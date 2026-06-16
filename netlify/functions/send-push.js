const webpush = require('web-push')

const VAPID_PUBLIC  = process.env.VAPID_PUBLIC
const VAPID_PRIVATE = process.env.VAPID_PRIVATE
const VAPID_SUBJECT = process.env.VAPID_SUBJECT || 'mailto:tobihsrs@gmail.com'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

exports.handler = async (event) => {
  try {
    if (event.httpMethod === 'OPTIONS') {
      return { statusCode: 204, headers: CORS, body: '' }
    }
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, headers: CORS, body: 'Method Not Allowed' }
    }
    if (!VAPID_PUBLIC || !VAPID_PRIVATE) {
      return { statusCode: 500, headers: CORS, body: 'VAPID keys not configured' }
    }

    webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC, VAPID_PRIVATE)

    let data
    try {
      data = JSON.parse(event.body || '{}')
    } catch {
      return { statusCode: 400, headers: CORS, body: 'Bad JSON' }
    }

    const subscriptions = Array.isArray(data.subscriptions) ? data.subscriptions : []
    const payload = JSON.stringify(data.payload || {})

    if (!subscriptions.length) {
      return { statusCode: 200, headers: CORS, body: JSON.stringify({ sent: 0, expired: [] }) }
    }

    const expired = []
    let sent = 0

    await Promise.all(subscriptions.map(async (sub) => {
      if (!sub || !sub.endpoint) return
      try {
        await webpush.sendNotification(sub, payload, { TTL: 86400 })
        sent++
      } catch (err) {
        if (err && (err.statusCode === 404 || err.statusCode === 410)) {
          expired.push(sub.endpoint)
        } else {
          console.error('[send-push] failed for endpoint:', sub.endpoint && sub.endpoint.slice(0, 60))
          console.error('[send-push] error:', err && err.statusCode, err && err.body, err && err.message)
        }
      }
    }))

    return {
      statusCode: 200,
      headers: { ...CORS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ sent, expired }),
    }
  } catch (err) {
    // Outer catch: gibt den echten Fehler zurück damit wir ihn im Browser sehen
    console.error('[send-push] outer error:', err)
    return {
      statusCode: 500,
      headers: { ...CORS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err && err.message, stack: err && err.stack }),
    }
  }
}

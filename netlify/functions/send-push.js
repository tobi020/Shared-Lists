// Netlify Function: verschickt Web-Push-Nachrichten an alle Abos eines Rooms.
// Der Client, der etwas abhakt/hinzufügt, ruft diese Funktion auf und übergibt
// die Push-Abos der ANDEREN Geräte. Die VAPID-Schlüssel liegen als Env-Vars in
// Netlify (Site settings → Environment variables), nie im Client.

const webpush = require('web-push')

const VAPID_PUBLIC  = process.env.VAPID_PUBLIC
const VAPID_PRIVATE = process.env.VAPID_PRIVATE
const VAPID_SUBJECT = process.env.VAPID_SUBJECT || 'mailto:tobihsrs@gmail.com'

if (VAPID_PUBLIC && VAPID_PRIVATE) {
  webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC, VAPID_PRIVATE)
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS, body: '' }
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: CORS, body: 'Method Not Allowed' }
  }
  if (!VAPID_PUBLIC || !VAPID_PRIVATE) {
    return { statusCode: 500, headers: CORS, body: 'VAPID keys not configured' }
  }

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
      // 404/410 = Abo abgelaufen oder abgemeldet → zum Aufräumen melden
      if (err && (err.statusCode === 404 || err.statusCode === 410)) {
        expired.push(sub.endpoint)
      } else {
        console.error('[send-push] failed:', err && err.statusCode, err && err.body)
      }
    }
  }))

  return {
    statusCode: 200,
    headers: { ...CORS, 'Content-Type': 'application/json' },
    body: JSON.stringify({ sent, expired }),
  }
}

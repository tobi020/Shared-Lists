import http.server, socketserver

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()
    def log_message(self, *a):
        pass  # kein Log-Spam

with socketserver.TCPServer(('', 3001), NoCacheHandler) as s:
    s.serve_forever()

import http from 'http'

const port = process.env.PORT || 1337

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.end('Hello Azure\n')
}).listen(port)
console.log(`server is listening on ${port}`) //eslint-disable-line no-console

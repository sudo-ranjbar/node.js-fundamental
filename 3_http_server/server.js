const http = require('http')

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.end('hello home page')
  }
  if(req.url === '/about'){
    res.write('hello world')
    res.end()
  }

})

server.listen(8000)
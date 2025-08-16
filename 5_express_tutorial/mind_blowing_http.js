const http = require('http')
const { readFileSync } = require('fs')

// these files are being built only once a server has been started
// so they dont invoke by each user request therefore they dont need
// to be async!
const homePage = readFileSync('./navbar-app/index.html',)
const homeStyles = readFileSync('./navbar-app/styles.css',)
const homeLogo = readFileSync('./navbar-app/logo.svg',)
const homeLogic = readFileSync('./navbar-app/browser-app.js',)


// this callback that is passed to createServer 
// is always invoked when a user make a request

// read more about http status codes in:
// developer.mozilla.org --> first link when u search

// also read about mime types in mozila
// search for (mime types mdn)

const server = http.createServer((req, res) => {
  const url = req.url
  console.log(url);

  // this is how we miserably includes our public or static files

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  } else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeLogo)
    res.end()
  } else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  } else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }


})

server.listen(8000, () => {
  console.log('server running on port 8000');
})
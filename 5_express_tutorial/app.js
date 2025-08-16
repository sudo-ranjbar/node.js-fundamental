const app = require('express')()
// const express = require('express')
// const app = express()

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen


// home
app.get('/', (req, res) => {
  res.status(200).send('Home Page')
})
// about
app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})
// override default 404 document
app.all('{*splat}', (req,res)=>{
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(8000, ()=>{
  console.log('server running on port 8000')
})
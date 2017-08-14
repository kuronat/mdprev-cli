#!/usr/bin/env node
var express = require('express')
var path = require('path')
var app = express()
app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/md', (req, res)=>{
  res.sendFile(path.resolve(process.argv[2]))
})

app.listen(process.env.PORT || 3000, ()=>{
  console.log("Listening")
})

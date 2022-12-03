'use stric'

const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  const ip = req.header('x-forwarded-for') || req.connection.remoteAddress
  console.log(req.socket.remoteAddress)

  res.render('miip/base', {
    title: 'Mi ip',
    description: 'cual es mi ip, mi ip publica, validador de ip',
    ip
  })
})

module.exports = router

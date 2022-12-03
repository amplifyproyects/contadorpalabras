'use stric'

const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('contador/base', {
    title: 'Contador de palabras',
    description: 'Contador de palabras en español, contador online, contador de caracteres, cuantas palabras tiene'
  })
})

module.exports = router

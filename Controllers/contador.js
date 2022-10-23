'use stric'

const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('contador/contador', {
    title: 'Contador de palabras',
    description: 'Contador de palabras en español, contador online'
  })
})

module.exports = router

'use stric'

const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('diferenciaFechas/base', {
    title: 'Diferencia fechas',
    description: 'Calcular diferencia dentre fechas, contador dias entre dos fechas, distancia fechas, mese entre dos fechas, años entre dos fechas, cuantos años tengos'
  })
})

module.exports = router

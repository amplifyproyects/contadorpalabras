const express = require('express')
const app = express()
const config = require('./config')
const controller = require('./Controllers/contador')
const diferenciaEntreFechas = require('./Controllers/diferenciaFechas')

app.set('view engine', 'pug')

app.use('/static', express.static('src'))

app.use('/contador', controller)

app.use('/diferenciafechas', diferenciaEntreFechas)

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})

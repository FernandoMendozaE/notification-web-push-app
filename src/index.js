/**
 * modulo 'dotenv' encargado de asignar las variables del archivo .env al S.O. para poder accederlas al iniciar la aplicación
 */
require('dotenv').config() // Modulo

const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use(require('./routes/index')) // Enrruta las rutas

// Static Contect
app.use(express.static(path.join(__dirname, 'public'))) // path: une direcctorios 'user/ruta/ruta'

app.listen(3000, () => {
  console.log(`Server started on 3000`)
})

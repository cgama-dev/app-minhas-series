require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

//Loading Config Routes
const seriesRouter = require('./routes/series.router')
const genreRouter = require('./routes/genre.router')

const port = process.env.PORT || 5007

mongoose.connect('mongodb://dbminhasseries:dbminhasseries123@ds011495.mlab.com:11495/db-minhas-series', {
    useCreateIndex: true,
    useNewUrlParser: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'))

db.once('open', () => console.log(`Conectado com o Banco ${new Date()}`))

// Loading Midleware
app.use(cors())
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({limit: '10mb', extended: true }))

// Loading Routes
app.use('/series', seriesRouter)
app.use('/genres', genreRouter)

app.listen(port, () => console.log('Api minhas series rodando ...'))
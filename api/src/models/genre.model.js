const mongoose = require('mongoose')

const GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const GenreModel = mongoose.model('Genre', GenreSchema)

module.exports = GenreModel
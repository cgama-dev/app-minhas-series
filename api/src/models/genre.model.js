const mongoose = require('mongoose')

const GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const GenreModel = mongoose.model('Genre', GenreSchema)

module.exports = GenreModel
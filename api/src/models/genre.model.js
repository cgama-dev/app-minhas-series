const mongoose = require('mongoose')

const GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    photo: {
        type: String
    },
})

const GenreModel = mongoose.model('Genre', GenreSchema)

module.exports = GenreModel
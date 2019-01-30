const mongoose = require('mongoose')

const SerieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Assistido', 'Assistindo', 'Assistir']
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre'
    },
    comments: {
        type: String
    }
})

const SerieModel = mongoose.model('Serie', SerieSchema)

module.exports = SerieModel
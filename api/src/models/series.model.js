const mongoose = require('mongoose')

const SerieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Assistido', 'Assistindo', 'Assistir'],
        default: 'Assistir'
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre'
    },
    comments: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const SerieModel = mongoose.model('Serie', SerieSchema)

module.exports = SerieModel
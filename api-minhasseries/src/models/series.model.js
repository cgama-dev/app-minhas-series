const mongoose = require('mongoose')

const SerieSchema = new mongoose.Schema({
    name: {
        type: String
    },
    status: {
        type: String,
        enum: ['watched', 'watching', 'towatch'],
        default: 'towatch'
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre'
    },
    photo: {
        type: String
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
const express = require('express')

const router = express.Router()

const { query, getById, getByGenre, create, update, destroy } = require('./../controllers/series.controller')()

router.get('/', query)
router.get('/:id', getById)
router.get('/genre/:idGenre', getByGenre)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router
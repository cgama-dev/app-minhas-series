const express = require('express')

const router = express.Router()

const { query, getById, create, update, destroy } = require('./../controllers/genre.controller.js')()

router.get('/', query)
router.get('/:id', getById)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router
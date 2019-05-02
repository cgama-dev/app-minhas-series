const express = require('express')
const multer = require('multer')
const router = express.Router()

const multerConfig = require('./../config/upload')
const { query, getById, getByGenre, create, update, destroy, uploadPhoto } = require('./../controllers/series.controller')()

router.get('/', query)
router.get('/:id', getById)
router.get('/genre/:idGenre', getByGenre)
router.post('/', create)
router.post('/upload', multer(multerConfig).single('file'), uploadPhoto)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router
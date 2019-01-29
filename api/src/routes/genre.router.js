const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send({ menssage: 'Rota genre' })
})

module.exports = router
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send({ menssage: 'Rota series' })
})

module.exports = router
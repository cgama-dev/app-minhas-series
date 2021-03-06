
const GenreModel = require('./../models/genre.model')

const GenreController = () => {
    const controller = {
        query: async (req, res) => {
            try {
                console.log("genres")
                const genres = await GenreModel.find({})

                res.status(200).send({ message: 'Gêneros encontradas com sucesso', data: genres })

            } catch (err) {

                res.status(400).send({ message: 'Erro ao buscar gêneros', error: err })

            }
        },
        getById: async (req, res) => {
            try {

                const id = req.params.id

                const genre = await GenreModel.findById(id)

                res.status(200).send({ message: 'Gênero encontrado com sucesso', data: genre })

            } catch (err) {

                res.status(400).send({ message: 'Erro ao buscar gêneros', error: err })
            }
        },
        create: async (req, res) => {
            try {

                const { name, photo } = req.body

                const genre = await GenreModel.create({ name, photo })

                res.status(200).send({ message: 'Gênero criado com sucesso', data: genre })

            } catch (err) {

                res.status(400).send({ message: 'Erro ao buscar gêneros', error: err })

            }
        },
        update: async (req, res) => {
            try {

                const id = req.params.id

                const genre = await GenreModel.findByIdAndUpdate(id, req.body, { new: true })


                res.status(200).send({ message: 'Serie atualizada com sucesso', data: genre })

            } catch (err) {

                res.status(400).send({ message: 'Erro ao atualizar gêneros', error: err })

            }
        },
        destroy: async (req, res) => {
            try {

                const id = req.params.id

                const serie = await GenreModel.findByIdAndRemove({ _id: id })

                res.status(200).send({ message: 'Gênero deletado com sucesso', data: serie })

            } catch (err) {

                res.status(400).send({ message: 'Erro ao deletar gênero', error: err })

            }
        }
    }

    return controller
}

module.exports = GenreController

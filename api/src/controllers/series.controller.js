
const SeriesModel = require('./../models/series.model')

const SeriesController = () => {
    const controller = {
        query: async (req, res) => {
            try {

                const series = await SeriesModel.find({}).populate('genre', "name")

                res.status(200).send({ message: 'Series encontradas com sucesso', data: series })

            } catch (err) {

                res.status(400).send({ message: 'Erro ao buscar series', error: err })

            }
        },
        getById: async (req, res) => {
            try {
                const id = req.params.id

                const serie = await SeriesModel.findById(id).populate('genre', "name")

                res.status(200).send({ message: 'Serie encontrada com sucesso', data: serie })

            } catch (err) {

                res.status(400).send({ message: 'Erro ao buscar series', error: err })
            }
        },
        create: async (req, res) => {
            try {
                const { name, status, genre, comments } = req.body

                const serie = await SeriesModel.create({
                    name,
                    status,
                    genre,
                    comments
                })

                res.status(200).send({ message: 'Serie criada com sucesso', data: serie })

            } catch (err) {

                res.status(400).send({ message: 'Erro ao criar serie', error: err })
            }
        },
        update: async (req, res) => {
            try {

                const id = req.params.id

                const serie = await SeriesModel.findByIdAndUpdate(id, req.body, { new: true })

                res.status(200).send({ message: 'Serie atualizada com sucesso', data: serie })

            } catch (err) {

                res.status(400).send({ message: 'Erro ao atualizar serie', error: err })
            }
        },
        destroy: async (req, res) => {
            try {

                const id = req.params.id

                const serie = await SeriesModel.findByIdAndRemove({ _id: id })

                res.status(200).send({ message: 'Serie deletada com sucesso' })

            } catch (err) {
                res.status(400).send({ error: 'Erro ao deletar series' })
            }
        }
    }

    return controller
}

module.exports = SeriesController

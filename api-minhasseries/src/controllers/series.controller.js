
const SeriesModel = require('./../models/series.model')

const UploadStorageService = require('./../services/upload-storage.service')()

const SeriesController = () => {
    const controller = {

        uploadPhoto: async (req, res) => {
            try {

                const url = await UploadStorageService.upload(req.file)
                
                res.status(200).send({ url })
                
            } catch (err) {
                res.status(400).send({error: 'Ops! Ocorreu algum erro no download'})
            }
        },
        query: async (req, res) => {
            try {
                console.log("series")
                const series = await SeriesModel.find({}).populate('genre', "name")

                return res.status(200).send({ message: 'Series encontradas com sucesso', data: series })

            } catch (err) {

                return res.status(400).send({ message: 'Erro ao buscar series', error: err })

            }
        },
        getById: async (req, res) => {
            try {
                const id = req.params.id

                const serie = await SeriesModel.findById(id).populate('genre', "name")

                return res.status(200).send({ message: 'Serie encontrada com sucesso', data: serie })

            } catch (err) {

                return res.status(400).send({ message: 'Erro ao buscar series', error: err })
            }
        },
        getByGenre: async (req, res) => {
            try {
                const id = req.params.idGenre

                const serie = await SeriesModel.find({
                    genre: id
                }).populate('genre', "name")

                if (!serie) {
                    return res.status(200).send({ message: 'Não existe nenhuma série para esse gênero', data: serie })
                }

                return res.status(200).send({ message: 'Serie encontrada com sucesso', data: serie })

            } catch (err) {

                return res.status(400).send({ message: 'Erro ao buscar series', error: err })
            }
        },
        create: async (req, res) => {
            try {
                const { photo, name, status, genre, comments } = req.body

                const serie = await SeriesModel.create({
                    photo,
                    name,
                    status,
                    genre,
                    comments
                })

                return res.status(200).send({ message: 'Serie criada com sucesso', data: serie })

            } catch (err) {

                return res.status(400).send({ message: 'Erro ao criar serie', error: err })
            }
        },
        update: async (req, res) => {
            try {

                const id = req.params.id

                const serie = await SeriesModel.findByIdAndUpdate(id, req.body, { new: true })

                return res.status(200).send({ message: 'Serie atualizada com sucesso', data: serie })

            } catch (err) {

                return res.status(400).send({ message: 'Erro ao atualizar serie', error: err })
            }
        },
        destroy: async (req, res) => {
            try {

                const id = req.params.id

                const serie = await SeriesModel.findByIdAndRemove({ _id: id })

                return res.status(200).send({ message: 'Serie deletada com sucesso' })

            } catch (err) {
                return res.status(400).send({ error: 'Erro ao deletar series' })
            }
        }
    }

    return controller
}

module.exports = SeriesController

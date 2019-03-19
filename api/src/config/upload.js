const multer = require('multer')

const configMulter = {
    
    storage: multer.memoryStorage(),

    limits: {
        filesize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMines = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ]
        //Verifica se a extensão do arquivo é está dentro dos arquivos válidos
        if (allowedMines.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error("Inválido tipo arquivo"))
        }
    }
}


module.exports = configMulter
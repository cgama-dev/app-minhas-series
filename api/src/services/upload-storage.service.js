const firebase = require('firebase');

const { Storage } = require('@google-cloud/storage');

const format = require('util').format;

const storage = new Storage({
    projectId: "minhas-series-c00dd",
    keyFile: "./../config/config.json"
});

const UploadStorageService = () => {
    const service = {
        upload: (file) => {
            return new Promise((resolve, reject) => {

                const bucket = storage.bucket('minhas-series-c00dd.appspot.com');
                
                const fileUpload = bucket.file(file.originalname);

                const blobStream = fileUpload.createWriteStream({
                    metadata: {
                        contentType: file.mimetype
                    }
                });

                blobStream.on('error', err => {                    
                    resolve(false)
                });

                blobStream.on('finish', () => {
                    const publicUrl = format(
                        `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`
                    );
                    resolve(publicUrl)
                });

                blobStream.end(file.buffer);
            })
        }
    }

    return service
}

module.exports = UploadStorageService
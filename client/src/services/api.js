import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5002'
})

export const uploadPhotoSerie = async (file) => {

    const formData = new FormData();

    formData.append('file', file)

    const data = await api.post('/series/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    return data.data.url

}


export default api
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3002/'
})

const apis = {
    loadGenres: ()=> api.get('genres') 
}  

export default apis
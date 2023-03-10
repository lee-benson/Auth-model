import axios from 'axios'

const LOCALSTORAGE_KEY = 'token'

const token = localStorage.getItem(LOCALSTORAGE_KEY)

const api = axios.create({
  baseURL: 'http://localhost:8090/api/',
  headers: {
    'Authorization': token
  }
})

export default api

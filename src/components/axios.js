import axios from "axios"
const instance = axios.create({
    baseURL:"https://api.weatherapi.com/v1"
})

export default instance;
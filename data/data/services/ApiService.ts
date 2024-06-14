import axios from "axios";

const url = process.env.URL_SERVER;

export const ApiService = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    }
})

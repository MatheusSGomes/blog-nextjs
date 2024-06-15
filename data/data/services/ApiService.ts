import axios from "axios";

// json-server db.json --port=3002 --watch
// const url = process.env.URL_API;
const url = "http://localhost:3002/posts";

export const ApiService = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    }
})

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

const PostsApis = axios.create({
    baseURL: 'http://localhost:3002/api',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            return await handleGet(req, res);

        default:
            return res.status(405).json({ error: 'Method not allowed' })
    }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
    try {
        const posts = await PostsApis.get('/posts');
        return res.status(200).json(posts.data);
    } catch (error) {
        console.log(error);
    }
}
import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

// http://localhost:3002/posts

const PostsApis = axios.create({
    baseURL: 'http://localhost:3002',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            return await handleGet(req, res);

        case 'POST':
            return await handlePost(req, res);

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

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
    try {
        const newPost = req.body.data;

        const createdPost = await PostsApis.post('/posts', newPost);

        return res.status(200).json(createdPost.data);
    } catch (error) {
        console.log(error);
    }
}

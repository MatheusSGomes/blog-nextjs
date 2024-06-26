import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import { BlogPost } from "../../../data/@types/BlogPostInterface";
import { getSession } from "next-auth/react";

// http://localhost:3002/posts

const PostsApis = axios.create({
    baseURL: 'http://localhost:3002',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session && req.method !== 'GET') {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    switch (req.method) {
        case 'GET':
            return await handleGet(req, res);

        case 'POST':
            return await handlePost(req, res);

        case 'PUT':
            return await handlePut(req, res);

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
        const newPost = req.body.data as BlogPost;

        newPost.slug = newPost.title
            .toLowerCase()
            .replace(/\s/g, '-')
            .replace(/[^\w-]+/g, '');

        const createdPost = await PostsApis.post('/posts', newPost);

        return res.status(200).json(createdPost.data);
    } catch (error) {
        console.log(error);
    }
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
    try {
        const newPost = req.body.data as BlogPost;

        await PostsApis.put('/posts', newPost, {
            params: {
                id: newPost.id
            }
        });

        return res.status(200).end();
    } catch (error) {
        console.log(error);
    }
}

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import { getSession } from "next-auth/react";

const PostApis = axios.create({
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

        case 'DELETE':
            return await handleDelete(req, res);

        default:
            return res.status(405).json({ error: 'Method not allowed' })
    }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
    try {
        const post = await PostApis.get('/post', {
            params: {
                id: req.query.postId
            }
        });

        if (!post.data) {
            return res.status(404).send({
                error: 'Post not found',
            });
        }

        return res.status(200).json(post.data);
    } catch (error) {
        console.log(error);
    }
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
    try {
        const post = await PostApis.delete('/post', {
            params: {
                id: req.query.postId
            }
        });

        return res.status(200).end();
    } catch (error) {
        console.log(error);
    }
}

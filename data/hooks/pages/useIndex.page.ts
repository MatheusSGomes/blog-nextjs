import { useEffect, useState } from "react";
import { BlogPost } from "../../@types/BlogPostInterface";
import { ApiService } from "../../data/services/ApiService";

export default function useIndex() {
    // const posts: BlogPost[] = [
    //     {
    //         id: '1',
    //         title: 'Título do post 1',
    //         slug: 'titulo-do-post-1',
    //         description: 'Descrição do post 1',
    //         picture: 'https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg',
    //     },
    //     {
    //         id: '2',
    //         title: 'Título do post 2',
    //         slug: 'titulo-do-post-2',
    //         description: 'Descrição do post 2',
    //         picture: 'https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg',
    //     },
    // ]

    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        ApiService
            .get('/')
            .then((res) => {
                setPosts(res.data)
            });
    }, [])

    return { posts };
}

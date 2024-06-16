import { FormEvent, useRef, useState } from 'react';
import styles from '../../styles/pages/posts/publish.module.css';
import { ApiService } from '../../data/data/services/ApiService';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function PostsPublish() {
    const { data: session } = useSession();
    const router = useRouter();

    const [title, setTitle] = useState(''),
        [description, setDescription] = useState(''),
        [picture, setPicture] = useState(''),
        blogEditorRef = useRef<HTMLDivElement>(null);

    async function sendPost(e: FormEvent) {
        e.preventDefault();

        const postContent = blogEditorRef.current?.innerHTML || '';

        if (postContent.length === 0) {
            toast.error('Para cadastrar o post é necessário escrever o conteúdo');
            return false;
        }

        if (
            title.length > 0 &&
            description.length > 0 &&
            picture.length > 0 &&
            postContent.length > 0
        ) {
            const slug = title
                .toLowerCase()
                .replace(/\s/g, '-')
                .replace(/[^\w-]+/g, '');

            await ApiService
                .post('posts', {
                    data: { title, description, slug, picture, content: postContent},
                })

            resetForm();
            router.push('/');
        }
    }

    function resetForm() {
        setTitle('');
        setDescription('');
        setPicture('');

        if (blogEditorRef.current) {
            blogEditorRef.current.innerHTML = '';
        }
    }

    if (!session) {
        return (
            <div className="text-center mt-10">
                <button onClick={() => signIn()}>Login</button>
            </div>
        );
    }

    return (
        <>
            <h2 className={styles['page-title']}>Novo Post</h2>

            <form onSubmit={sendPost} className={styles['post-form']}>
                <input
                    placeholder='Título'
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />

                <input
                    placeholder='Descrição'
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                />

                <input
                    placeholder='Imagem'
                    type="url"
                    value={picture}
                    onChange={(event) => setPicture(event.target.value)}
                    required
                />

                <div
                    className={styles['post-content']}
                    ref={blogEditorRef}
                    contentEditable
                />

                <button type="submit" className="rounded-lg">Publicar</button>
            </form>
        </>
    );
}
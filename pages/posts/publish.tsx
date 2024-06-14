import { FormEvent, useRef, useState } from 'react';
import styles from '../../styles/pages/posts/publish.module.css';
import { ApiService } from '../../data/data/services/ApiService';

export default function PostsPublish() {
    const [title, setTitle] = useState(''),
        [description, setDescription] = useState(''),
        [picture, setPicture] = useState(''),
        blogEditorRef = useRef<HTMLDivElement>(null);

    async function sendPost(e: FormEvent) {
        e.preventDefault();

        const postContent = blogEditorRef.current?.innerHTML || '';

        if (
            title.length > 0 &&
            description.length > 0 &&
            picture.length > 0 &&
            postContent.length > 0
        ) {

            await ApiService.post('posts', {
                data: { title, description, picture, content: postContent},
            })

            resetForm();
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

    return <>
        <h2 className={styles['page-title']}>Novo Post</h2>

        <form onSubmit={sendPost} className={styles['post-form']}>
            <input
                placeholder='Título'
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <input
                placeholder='Descrição'
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <input
                placeholder='Imagem'
                type="url"
                value={picture}
                onChange={(event) => setPicture(event.target.value)}
            />

            <div
                className={styles['post-content']}
                ref={blogEditorRef}
                contentEditable
            />

            <button type="submit">Publicar</button>
        </form>
    </>;
}
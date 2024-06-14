import { useState } from 'react';
import styles from '../../styles/pages/posts/publish.module.css';

export default function PostsPublish() {
    const [title, setTitle] = useState(''),
        [description, setDescription] = useState(''),
        [picture, setPicture] = useState('');

    return <>
        <h2 className={styles['page-title']}>Novo Post</h2>

        <form className={styles['post-form']}>
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
        </form>

        <button>Publicar</button>
    </>;
}
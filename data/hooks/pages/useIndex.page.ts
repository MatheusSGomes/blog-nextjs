

export default function useIndex() {
    const posts = [
        {
            id: '1',
            title: 'Título do post 1',
            slug: 'titulo-do-post-1',
            description: 'Descrição do post 1',
            picture: 'https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg',
        },
        {
            id: '2',
            title: 'Título do post 2',
            slug: 'titulo-do-post-2',
            description: 'Descrição do post 2',
            picture: 'https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg',
        },
    ]

    return { posts };
}

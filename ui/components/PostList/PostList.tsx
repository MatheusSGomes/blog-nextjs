export default function PostList ({ posts }) {
    return (
        <div>
            {posts.map((post) => (
                <div>
                    <img src={post.picture} alt={post.description} />
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    );
}
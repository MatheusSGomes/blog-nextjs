import useIndex from '../data/hooks/pages/useIndex.page';
import PostList from '../ui/components/PostList/PostList';

export default function Home() {
  const { posts } = useIndex();

  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {posts.map((post) => (
            <PostList key={post.id} post={post.data} />
          ))}
        </div>
    </div>
  )
}

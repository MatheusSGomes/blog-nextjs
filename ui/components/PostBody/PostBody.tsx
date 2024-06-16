export default function PostBody({ post }) {

  const markup = { __html: post.content };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-semibold text-center">{ post.title }</h1>

      <img className="w-full rounded-xl" src={ post.picture } alt={ post.title } />

      <div
        className="text-xl"
        dangerouslySetInnerHTML={ markup }
      />
    </div>
  );
}

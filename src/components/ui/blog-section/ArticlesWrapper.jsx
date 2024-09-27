import Article from "../../Article";
import LoadingSpinner from "../../LoadingSpinner";

export default function ArticlesWrapper({ data, loading }) {
  // Images Placeholder
  const autoArticleImage = "https://placehold.co/600x400";
  const autoAuthorImage = "https://placehold.co/400x400";

  // Loading Statement
  if (loading) {
    return (
      <div className="min-h-72 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="grid  gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data &&
        data.map((post) => {
          const formattedDate = new Date(post.createdAt).toLocaleDateString(
            "en-GB",
            {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }
          );
          return (
            <Article
              key={post.id}
              label={post.label}
              articleImg={post.image === "" ? autoArticleImage : post.image}
              title={post.title}
              body={post.body}
              authorImg={post.authorId === "" ? autoAuthorImage : post.authorId}
              authorName={post.author}
              date={formattedDate}
            />
          );
        })}
    </div>
  );
}

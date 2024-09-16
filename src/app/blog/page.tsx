import BlogCard from "./components/BlogCard";

export default function BlogPosts() {
  return (
    <div>
      <main>
        <h1>BlogPosts</h1>
        <div>
          <ul>
            <BlogCard />
            <BlogCard />
          </ul>
        </div>
      </main>
    </div>
  );
}

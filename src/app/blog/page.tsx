import Link from "next/link";

export default function BlogPosts() {
  return (
    <div>
      <main>
        <h1>BlogPosts</h1>
        <div>
          <ul>
            <li>
              <Link href="/blog/1">1</Link>
            </li>
            <li>
              <Link href="/blog/2">2</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

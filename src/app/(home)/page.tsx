import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Home</h1>
        <div>
          <ul>
            <li>
              <Link href="/collections/1">1</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/products/red">Red</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/blog/1">1</Link>
            </li>
            <li>
              <Link href="/blog/1">2</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

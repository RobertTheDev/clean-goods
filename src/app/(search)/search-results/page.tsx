import Link from "next/link";

export default function SearchResults() {
  return (
    <div>
      <main>
        <h1>SearchResults</h1>
        <div>
          <ul>
            <li>
              <Link href="/products/red">Red</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

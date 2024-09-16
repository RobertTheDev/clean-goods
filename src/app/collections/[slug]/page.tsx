import Link from "next/link";

export default function Collection() {
  return (
    <div>
      <main>
        <h1>Collection</h1>
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

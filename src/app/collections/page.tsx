import Link from "next/link";

export default function Collections() {
  return (
    <div>
      <main>
        <h1>Collections</h1>
        <div>
          <ul>
            <li>
              <Link href="/collections/1">1</Link>
              <Link href="/collections/2">2</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

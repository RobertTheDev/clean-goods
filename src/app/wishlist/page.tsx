import Link from "next/link";

export default function Wishlist() {
  return (
    <div>
      <main>
        <h1>Wishlist</h1>
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

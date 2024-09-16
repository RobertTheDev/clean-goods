import Link from "next/link";

export default function Basket() {
  return (
    <div>
      <main>
        <h1>Basket</h1>
        <div>
          <ul>
            <li>
              <Link href="/products/red">Red</Link>
            </li>
          </ul>
        </div>
        <Link href="/checkout">Checkout</Link>
      </main>
    </div>
  );
}

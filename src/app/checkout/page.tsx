import Link from "next/link";

export default function Checkout() {
  return (
    <div>
      <main>
        <h1>Checkout</h1>
        <Link href="/order-confirmation">Order Confirmation</Link>
      </main>
    </div>
  );
}

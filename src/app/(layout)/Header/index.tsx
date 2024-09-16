import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <div>
          <span>Logo</span>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/collections">Collections</Link>
              <Link href="/wishlist">Wishlist</Link>
              <Link href="/basket">Basket</Link>
              <Link href="/account">Account</Link>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Link href="/search-results?q=hello">Search</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/wishlist">Wishlist</Link>
            <Link href="/basket">Basket</Link>
            <Link href="/account">Account</Link>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

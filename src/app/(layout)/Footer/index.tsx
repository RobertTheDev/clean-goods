import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <span>©{new Date().getFullYear()}</span>
      <ul>
        <li>
          <Link href="/about-us">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/faqs-help">FAQs</Link>
          <Link href="/pages/returns-policy">Returns Policy</Link>
          <Link href="/pages/terms-and-conditions">Terms and Conditions</Link>
          <Link href="/pages/privacy-policy">Privacy Policy</Link>
        </li>
      </ul>
    </footer>
  );
}

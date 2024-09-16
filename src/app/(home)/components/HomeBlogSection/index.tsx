import Link from "next/link";

export default function HomeBlogSection() {
  return (
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
  );
}

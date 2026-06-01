import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World.{" "}
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/app/">Marketplace</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

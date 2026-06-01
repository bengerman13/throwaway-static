import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        About
      </Link>
      <Link href="/app/">
        App
      </Link>
    </div>
  );
}

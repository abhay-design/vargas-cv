import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between mb-[66px] content-center">
      <div className="font-bold text-2xl">
        <Link href={"/"}>Lite.</Link>
      </div>

      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href={"/"} className="text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/posts"} className="text-black">
              Blog
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="text-black">
              About
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="text-black">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

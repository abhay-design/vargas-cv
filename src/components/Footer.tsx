// import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-center mt-8">
      <p>
        &copy; 2025 Lite &middot; Built with NextJs v15 &middot;{" "}
        <a href={"/sitemap.xml"}>SiteMap</a>
      </p>
    </footer>
  );
}

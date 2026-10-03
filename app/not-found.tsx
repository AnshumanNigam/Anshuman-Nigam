import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found section-night">
      <div>
        <span className="eyebrow">404 / Not found</span>
        <h1>That page doesn&apos;t exist.</h1>
        <p>The link may be wrong, or the page may have moved.</p>
        <Link href="/" className="button-light">Back home <span>↗</span></Link>
      </div>
    </main>
  );
}

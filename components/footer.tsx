import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>{profile.name}</span>
        <span>{profile.tagline}</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

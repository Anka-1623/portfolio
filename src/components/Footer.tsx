export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-xs text-muted-2 sm:flex-row sm:px-10">
        <span>© {new Date().getFullYear()} Emirhan Solmaz</span>
        <span className="font-mono">Built with Next.js</span>
      </div>
    </footer>
  );
}

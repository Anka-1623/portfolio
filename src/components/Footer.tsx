import { CONTAINER } from "@/lib/ui";
import GiantName from "./GiantName";

export default function Footer() {
  return (
    <footer className="mt-32 sm:mt-44">
      <div className={CONTAINER}>
        <GiantName />
        <div className="flex flex-col items-center justify-between gap-2 border-t border-line py-8 font-mono text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Emirhan Solmaz</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}

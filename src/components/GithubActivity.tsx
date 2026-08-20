import { formatRelativeTime, getGithubStats } from "@/lib/github";
import RevealOnScroll from "./RevealOnScroll";

export default async function GithubActivity() {
  const stats = await getGithubStats();

  return (
    <section className="relative overflow-hidden border-t border-border py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 top-16 select-none font-mono text-[10rem] font-semibold leading-none text-surface-2 sm:text-[14rem]"
      >
        05
      </span>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-16">
          <RevealOnScroll>
            <span className="font-mono text-xs tracking-[0.25em] text-accent">
              05 — ON GITHUB
            </span>
          </RevealOnScroll>

          <div>
            <RevealOnScroll>
              <p className="max-w-xl text-xl leading-relaxed text-foreground sm:text-2xl">
                Most of the work lives in private client repos, but the
                public side of the graph is real — pulled live from GitHub,
                not typed in by hand.
              </p>
            </RevealOnScroll>

            {stats ? (
              <RevealOnScroll delay={0.1}>
                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
                  <div>
                    <p className="font-mono text-3xl font-semibold text-foreground">
                      {stats.publicRepos}
                    </p>
                    <p className="mt-1 text-xs text-muted">Public repos</p>
                  </div>
                  <div>
                    <p className="font-mono text-3xl font-semibold text-foreground">
                      {stats.yearsActive}+
                    </p>
                    <p className="mt-1 text-xs text-muted">Years on GitHub</p>
                  </div>
                  <div className="col-span-2 sm:col-span-2">
                    <p className="font-mono text-3xl font-semibold text-foreground">
                      {formatRelativeTime(stats.lastActivity)}
                    </p>
                    <p className="mt-1 text-xs text-muted">Last push</p>
                  </div>
                </div>

                {stats.languages.length > 0 && (
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {stats.languages.map((lang) => (
                      <li
                        key={lang}
                        className="rounded-full bg-surface-2 px-3 py-1 font-mono text-xs text-muted"
                      >
                        {lang}
                      </li>
                    ))}
                  </ul>
                )}
              </RevealOnScroll>
            ) : (
              <RevealOnScroll delay={0.1}>
                <p className="mt-8 text-sm text-muted">
                  Live stats are unavailable right now — the profile is still
                  the best source of truth.
                </p>
              </RevealOnScroll>
            )}

            <RevealOnScroll delay={0.16}>
              <a
                href="https://github.com/Anka-1623"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
              >
                View profile on GitHub
                <span aria-hidden>→</span>
              </a>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

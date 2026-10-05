import { PiArrowUpRight } from "react-icons/pi";
import { formatRelativeTime, getGithubStats } from "@/lib/github";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";

export default async function GithubActivity() {
  const stats = await getGithubStats();

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <RevealOnScroll>
          <SectionHeading title="On GitHub">
            Pulled live from the GitHub API.
          </SectionHeading>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          {stats ? (
            <>
              <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-8 sm:grid-cols-4">
                <div>
                  <p className="font-mono text-3xl font-semibold text-foreground">
                    {stats.publicRepos}
                  </p>
                  <p className="mt-1 text-sm text-muted">Public repos</p>
                </div>
                <div>
                  <p className="font-mono text-3xl font-semibold text-foreground">
                    {stats.yearsActive}+
                  </p>
                  <p className="mt-1 text-sm text-muted">Years on GitHub</p>
                </div>
                <div>
                  <p className="font-mono text-3xl font-semibold text-foreground">
                    {formatRelativeTime(stats.lastActivity)}
                  </p>
                  <p className="mt-1 text-sm text-muted">Last push</p>
                </div>
                {stats.languages.length > 0 && (
                  <div>
                    <p className="font-mono text-sm leading-9 text-foreground">
                      {stats.languages.slice(0, 3).join(", ")}
                    </p>
                    <p className="mt-1 text-sm text-muted">Top languages</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <p className="mt-12 border-t border-border pt-8 text-sm text-muted">
              Live stats are unavailable right now. The profile has the full
              picture.
            </p>
          )}

          <a
            href="https://github.com/Anka-1623"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-accent"
          >
            GitHub profile
            <PiArrowUpRight aria-hidden className="h-4 w-4" />
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}

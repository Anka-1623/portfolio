import { PiArrowUpRight } from "react-icons/pi";
import { formatRelativeTime, getGithubStats } from "@/lib/github";
import CountUp from "./CountUp";
import MaskText from "./MaskText";
import RevealOnScroll from "./RevealOnScroll";

export default async function GithubActivity() {
  const stats = await getGithubStats();

  return (
    <div id="github">
      <MaskText
        text="On GitHub"
        className="text-[clamp(2.4rem,5vw,4.2rem)] font-semibold leading-none tracking-[-0.035em]"
      />
      <p className="mt-4 font-serif text-lg text-muted">
        Pulled live from the GitHub API.
      </p>

      <RevealOnScroll delay={0.1}>
        {stats ? (
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-8">
            <div>
              <dd className="text-6xl font-semibold tracking-tight">
                <CountUp value={stats.publicRepos} />
              </dd>
              <dt className="mt-2 font-mono text-sm text-muted">Public repos</dt>
            </div>
            <div>
              <dd className="text-6xl font-semibold tracking-tight">
                <CountUp value={stats.yearsActive} suffix="+" />
              </dd>
              <dt className="mt-2 font-mono text-sm text-muted">Years on GitHub</dt>
            </div>
            <div>
              <dd className="text-3xl font-semibold leading-[1.9] tracking-tight">
                {formatRelativeTime(stats.lastActivity)}
              </dd>
              <dt className="mt-2 font-mono text-sm text-muted">Last push</dt>
            </div>
            {stats.languages.length > 0 && (
              <div>
                <dd className="font-serif text-xl leading-[2.4]">
                  {stats.languages.slice(0, 3).join(", ")}
                </dd>
                <dt className="mt-2 font-mono text-sm text-muted">Top languages</dt>
              </div>
            )}
          </dl>
        ) : (
          <p className="mt-12 border-t border-line pt-8 text-muted">
            Live stats are unavailable right now. The profile has the full
            picture.
          </p>
        )}

        <a
          href="https://github.com/Anka-1623"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-1.5 text-sm transition-colors hover:text-accent"
        >
          GitHub profile
          <PiArrowUpRight aria-hidden className="size-4" />
        </a>
      </RevealOnScroll>
    </div>
  );
}

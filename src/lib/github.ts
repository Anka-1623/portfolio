const GITHUB_USERNAME = "Anka-1623";

export type GithubStats = {
  publicRepos: number;
  yearsActive: number;
  languages: string[];
  lastActivity: string;
  profileUrl: string;
};

type GithubUser = {
  public_repos: number;
  created_at: string;
};

type GithubRepo = {
  language: string | null;
  updated_at: string;
};

export async function getGithubStats(): Promise<GithubStats | null> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
        {
          headers: { Accept: "application/vnd.github+json" },
          next: { revalidate: 3600 },
        }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user = (await userRes.json()) as GithubUser;
    const repos = (await reposRes.json()) as GithubRepo[];

    const languageCounts = new Map<string, number>();
    let lastActivity = user.created_at;

    for (const repo of repos) {
      if (repo.language) {
        languageCounts.set(
          repo.language,
          (languageCounts.get(repo.language) ?? 0) + 1
        );
      }
      if (repo.updated_at > lastActivity) lastActivity = repo.updated_at;
    }

    const languages = [...languageCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([lang]) => lang);

    const msPerYear = 1000 * 60 * 60 * 24 * 365;
    const yearsActive = Math.max(
      1,
      Math.floor((Date.now() - new Date(user.created_at).getTime()) / msPerYear)
    );

    return {
      publicRepos: user.public_repos,
      yearsActive,
      languages,
      lastActivity,
      profileUrl: `https://github.com/${GITHUB_USERNAME}`,
    };
  } catch {
    return null;
  }
}

export function formatRelativeTime(iso: string): string {
  const diffDays = Math.floor(
    (Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24)
  );
  if (diffDays <= 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 30) return `${diffDays} days ago`;
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
  }
  const diffYears = Math.floor(diffMonths / 12);
  return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
}

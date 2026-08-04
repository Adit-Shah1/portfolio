import { fullLog } from "@/data/projects";
import { site } from "@/data/site";

const GITHUB_USER = "Adit-Shah1";
const DAY = 86400;

/** The repos behind the projects on this page — so the count can't drift from the list. */
const repos = fullLog.flatMap((p) => p.repos ?? []);

async function countCommits(repo: string, token: string) {
  const res = await fetch(
    `https://api.github.com/repos/${repo}/commits?author=${GITHUB_USER}&per_page=1`,
    {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" },
      next: { revalidate: DAY },
    },
  );
  if (!res.ok) throw new Error(`${repo}: ${res.status} ${res.statusText}`);
  // GitHub has no commit-count endpoint. With per_page=1 the last page number
  // *is* the count; no Link header means the repo has 0 or 1 commits.
  const last = res.headers.get("link")?.match(/[?&]page=(\d+)>;\s*rel="last"/)?.[1];
  return last ? Number(last) : ((await res.json()) as unknown[]).length;
}

/** Commits authored by Adit across every repo backing a project on the page. */
export async function getCommitCount() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return site.commitsFallback;
  try {
    const counts = await Promise.all(repos.map((r) => countCommits(r, token)));
    return counts.reduce((a, b) => a + b, 0);
  } catch {
    // ponytail: one failed repo falls back to the whole hardcoded number rather
    // than silently rendering a total that's too low.
    return site.commitsFallback;
  }
}

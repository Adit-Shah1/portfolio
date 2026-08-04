import { cache } from "react";
import { fullLog } from "@/data/projects";
import { site } from "@/data/site";
import { getCommitCount } from "./github";

const WEEK_MS = 7 * 864e5;

/**
 * Every number on the page, derived — nothing here can go stale by hand.
 * Cached so Hero and Stats share one pass.
 */
export const getStats = cache(async () => {
  const commits = await getCommitCount();
  const weeks = Math.floor((Date.now() - new Date(site.firstCommit).getTime()) / WEEK_MS);
  const projects = fullLog.length;

  return {
    commits,
    weeks,
    tiles: [
      { value: 2, suffix: "", label: "startups in build" },
      { value: projects, suffix: "", label: "projects on this page" },
      { value: commits, suffix: "", label: "commits since may 16" },
      { value: weeks, suffix: "", label: "weeks of shipping" },
    ],
  };
});

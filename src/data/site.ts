export const site = {
  name: "Adit Shah",
  claim: (commits: number, weeks: number) =>
    `First-year computer science student in Melbourne. ${commits} commits in ${weeks} weeks, two startups in build — and counting.`,
  statusLine: "melbourne · monash university · building petory & vela",
  availability: "Open to 2026/27 internships",
  email: "aditshreeshah@gmail.com",
  github: "https://github.com/Adit-Shah1",
  linkedin: "https://www.linkedin.com/in/adit-shah-3384113b6/" as string | null,
  /** Drop resume.pdf into /public and set to "/resume.pdf" */
  resumeUrl: null as string | null,
  firstCommit: "2026-05-16",
  /**
   * Last known good commit total. Only rendered when the GitHub API is
   * unreachable or GITHUB_TOKEN is unset — see src/lib/github.ts.
   */
  commitsFallback: 137,
  meta: {
    title: "Adit Shah — first-year CS, already shipping",
    description:
      "First-year computer science student at Monash, Melbourne. Co-founding Petory and Vela, and shipping something new most weeks.",
    // Updated to the real production URL at deploy time
    url: "https://adit-shah.vercel.app",
  },
};

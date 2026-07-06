export const site = {
  name: "Adit Shah",
  claim:
    "First-year computer science student in Melbourne. 175+ commits in seven weeks, two startups in build — and counting.",
  statusLine: "melbourne · monash university · building petory & vela",
  availability: "Open to 2026/27 internships",
  email: "aditshreeshah@gmail.com",
  github: "https://github.com/Adit-Shah1",
  linkedin: "https://www.linkedin.com/in/adit-shah-3384113b6/" as string | null,
  /** Drop resume.pdf into /public and set to "/resume.pdf" */
  resumeUrl: null as string | null,
  firstCommit: "2026-05-16",
  // Stats are hardcoded on purpose: Vercel CI can't see the sibling repos on
  // the T7 drive. Recompute locally with:
  //   for r in "/Volumes/T7 Touch/repos"/*/; do git -C "$r" rev-list --all --count 2>/dev/null; done | paste -sd+ - | bc
  stats: [
    { value: 2, suffix: "", label: "startups in build" },
    { value: 10, suffix: "", label: "projects on this page" },
    { value: 175, suffix: "+", label: "commits since may 16" },
    { value: 7, suffix: "", label: "weeks of shipping" },
  ],
  meta: {
    title: "Adit Shah — first-year CS, already shipping",
    description:
      "First-year computer science student at Monash, Melbourne. Co-founding Petory and Vela, and shipping something new most weeks.",
    // Updated to the real production URL at deploy time
    url: "https://adit-shah.vercel.app",
  },
};

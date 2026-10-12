/* ════════════════════════════════════════════════════════════════
   PORTFOLIO CONTENT — edit this file to update the site.
   You never need to touch index.html for the things below.

   Rules:
   • Keep the commas between items and the quotes around text.
   • Leave a field as "" (empty) if you don't have it yet — it is
     simply hidden on the page.
   • Put files (certificate images/PDFs, screenshots) inside the
     assets/ folder and write the path, e.g. "assets/certs/cisco.pdf".
   • After saving, refresh the page (Ctrl+Shift+R) to see changes.
   See HOW-TO-UPDATE.md for step-by-step examples.
   ════════════════════════════════════════════════════════════════ */

window.PORTFOLIO = {

  /* Small status text in the black top bar. */
  status: "Seeking opportunities",

  /* ── CERTIFICATIONS ──────────────────────────────────────────────
     title        : name of the certificate
     issuer       : who issued it
     date         : e.g. "Mar 2026"            (optional)
     credentialId : the ID printed on it      (optional)
     verifyUrl    : official verification link (optional → "Verify ↗")
     file         : image (.jpg/.png/.webp) or .pdf in assets/certs/
                    (optional → "View certificate")                  */
  certifications: [
    { title: "Cyber Security & Ethical Hacking", issuer: "Boston Institute of Analytics", date: "", credentialId: "", verifyUrl: "", file: "" },
    { title: "Ethical Hacking", issuer: "Cisco", date: "", credentialId: "", verifyUrl: "", file: "" },
    { title: "AI Security Specialization", issuer: "Edureka", date: "", credentialId: "", verifyUrl: "", file: "" },
    { title: "Google Cybersecurity Professional Certificate", issuer: "Google / Coursera", date: "", credentialId: "", verifyUrl: "", file: "" },
    { title: "Google Cloud Cybersecurity Professional Certificate", issuer: "Google", date: "", credentialId: "", verifyUrl: "", file: "" },
    { title: "Fundamentals of Cybersecurity", issuer: "Amypo", date: "", credentialId: "", verifyUrl: "", file: "" }
  ],

  /* ── PROJECT PROOF (videos, screenshots, reports) ────────────────
     The key must match the project: cirrussec, securelens,
     websentinel, shieldsense, buysquare.
     video   : .webm or .mp4 path        poster : still image for the video
     images  : list of { src, caption }  docs   : list of { label, href }
     badge   : short tag shown on the preview (e.g. "synthetic data")  */
  projectProof: {
    cirrussec: {
      video: "assets/poc/cirrussec/demo.webm",
      poster: "assets/poc/cirrussec/poster.jpg",
      caption: "CirrusSec walkthrough — overview, resources, attack paths, IAM analysis, remediation and PDF reports (synthetic lab data).",
      badge: "synthetic lab data",
      images: [],
      docs: [ { label: "Sample assessment report (PDF)", href: "assets/poc/cirrussec/cirrussec-sample-report.pdf" } ]
    },
    securelens: {
      video: "assets/poc/securelens/demo.webm",
      poster: "assets/poc/securelens/poster.jpg",
      caption: "SecureLens AI scanning a deliberately vulnerable snippet — Semgrep, Bandit & AST analysis, dashboard, findings and AI-suggested fixes.",
      badge: "local LLM · demo code",
      images: [],
      docs: []
    },
    websentinel: {
      video: "",
      poster: "",
      caption: "",
      badge: "authorised target · scanme.nmap.org",
      images: [
        { src: "assets/poc/websentinel/01-kali-menu.jpg",   caption: "WebSentinel installed as a Kali Linux application" },
        { src: "assets/poc/websentinel/02-scan-config.jpg", caption: "Interactive setup — target scanme.nmap.org, full mode, PDF report" },
        { src: "assets/poc/websentinel/03-scan-start.jpg",  caption: "Scan started — WebSentinel v1.2.0 running its modules" },
        { src: "assets/poc/websentinel/04-results.jpg",     caption: "Results — score 72/100 (MODERATE), 7 OWASP-mapped findings" }
      ],
      docs: [ { label: "BIA capstone report (PDF)", href: "assets/poc/websentinel/websentinel-bia-capstone-report.pdf" } ]
    },
    shieldsense: { video: "", poster: "", caption: "", badge: "", images: [], docs: [] },
    buysquare:   { video: "", poster: "", caption: "", badge: "", images: [], docs: [] }
  },

  /* ── PRACTICE PROFILES (TryHackMe, Hack The Box, PortSwigger…) ──
     The "Labs & proof" section appears automatically once ANY of
     profiles / writeups / achievements has an entry.
     Example:
     { platform: "TryHackMe", username: "shaheeth", url: "https://tryhackme.com/p/shaheeth", stat: "Top 5% · 120 rooms" }  */
  profiles: [
  ],

  /* ── WRITE-UPS / BLOG POSTS ──────────────────────────────────────
     Example:
     { title: "Building a RAG secure code reviewer", date: "Nov 2026", url: "https://medium.com/...", summary: "How SecureLens grounds findings in OWASP/CWE.", tags: ["AppSec", "AI"] }  */
  writeups: [
  ],

  /* ── ACHIEVEMENTS (CTFs, hackathons, disclosures, awards) ────────
     Example:
     { title: "CTF — 3rd place", date: "Dec 2026", detail: "Team of 3, 40 teams", url: "" }  */
  achievements: [
  ]
};

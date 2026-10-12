# How to update your portfolio

Everything you'll want to add later lives in **one file: `content.js`**.
You don't need to edit `index.html`.

Open `content.js` in any text editor (VS Code or Notepad), change it, save,
then refresh the page with **Ctrl + Shift + R**.

## Folder layout

```
index.html          ← the site (don't need to touch)
content.js          ← YOUR CONTENT — edit this
assets/
  portrait.webp
  Mohamed_Shaheeth_M_Resume.pdf
  certs/            ← put certificate images / PDFs here (create the folder)
  poc/
    cirrussec/      demo.webm, poster.jpg, sample report
    securelens/     demo.webm, poster.jpg
    websentinel/    4 screenshots + BIA capstone report
```

## 1. Add certificate details

Find your certificate in the `certifications` list and fill in the blanks:

```js
{ title: "Ethical Hacking", issuer: "Cisco",
  date: "Mar 2026",
  credentialId: "ABC-123-XYZ",
  verifyUrl: "https://www.credly.com/badges/....",
  file: "assets/certs/cisco-ethical-hacking.pdf" },
```

- `verifyUrl` adds a **Verify ↗** button. Use the official link from Coursera, Credly, Cisco and so on.
- `file` adds a **View certificate** button. An image (`.jpg`, `.png`, `.webp`) opens in the
  on-page viewer, and a `.pdf` opens in a new tab.
- Blank fields (`""`) are simply hidden.
- To add a new certificate, copy a whole line, paste it below, edit it, and keep the comma
  between lines. The certification counter on the page updates by itself.

## 2. Add TryHackMe, Hack The Box or PortSwigger profiles

```js
profiles: [
  { platform: "TryHackMe",  username: "shaheeth", url: "https://tryhackme.com/p/shaheeth", stat: "Top 5% · 120 rooms" },
  { platform: "Hack The Box", username: "shaheeth", url: "https://app.hackthebox.com/profile/...", stat: "Hacker rank" }
],
```

A **Practice & proof** section, and its menu link, appears automatically once anything is
in `profiles`, `writeups` or `achievements`.

## 3. Add write-ups and achievements

```js
writeups: [
  { title: "Building a RAG secure code reviewer", date: "Nov 2026",
    url: "https://medium.com/@you/...", summary: "How SecureLens grounds findings in OWASP/CWE.",
    tags: ["AppSec", "AI"] }
],
achievements: [
  { title: "CTF — 3rd place", date: "Dec 2026", detail: "Team of 3 · 40 teams", url: "" }
],
```

## 4. Add proof to a project (video, screenshots, report)

Each project has an entry under `projectProof` (`cirrussec`, `securelens`, `websentinel`,
`shieldsense`, `buysquare`). For example, to give ShieldSense a demo:

```js
shieldsense: {
  video: "assets/poc/shieldsense/demo.mp4",
  poster: "assets/poc/shieldsense/poster.jpg",
  caption: "ShieldSense flagging anomalous behaviour in a test feed",
  badge: "test footage",
  images: [ { src: "assets/poc/shieldsense/alert.jpg", caption: "Automated alert" } ],
  docs:   [ { label: "Project report (PDF)", href: "assets/poc/shieldsense/report.pdf" } ]
},
```

When a project has a video or screenshots, its animated illustration is replaced by a
live preview, and **▶ Demo video**, **Screenshots** and report buttons are added.

**Keep video files small.** Aim for under 25 MB: export at 1280px wide, trim to the
important part, and use `.mp4` (H.264) or `.webm`. Large files load slowly, and GitHub
rejects files over 100 MB. Or upload the video to YouTube as *unlisted* and put the
link in `docs`.

## 5. Before you publish anything: safety check

Only show scans of targets you own or are **explicitly authorised** to test, such as
`scanme.nmap.org`, your own lab VMs, or deliberately vulnerable apps like DVWA and
Juice Shop.

Never publish screenshots, videos or reports that name a real company's site with its
findings. That can look like unauthorised testing, and it discloses their weaknesses
publicly. Also crop out personal desktop content: file explorers, chats and photos.

## 6. Publish free on GitHub Pages

1. Create a repository named `Shaheeth.github.io` on GitHub.
2. Upload everything in this folder (`index.html`, `content.js`, `assets/`, this guide).
3. Go to **Settings → Pages → Deploy from branch → main / root**.
4. Your site goes live at `https://shaheeth.github.io`. Add that link to your résumé and LinkedIn.

To update it later, edit `content.js` on GitHub (pencil icon) and commit. The site
refreshes within a minute.

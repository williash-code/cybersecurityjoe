---
name: email-to-website-articles
description: >-
  Extracts and analyzes tech, AI, and cybersecurity emails from Gmail (newsletters,
  security advisories, tech digests), synthesizes them into plain-English articles,
  integrates them into the website's blog data store, and deploys them to production.
---

# Email-to-Website Articles Runbook

This skill automates the full pipeline of extracting intelligence from incoming email newsletters in Gmail, drafting structured articles in CyberSecurity Joe's zero-jargon style, integrating them into the website data store, and deploying them to the live production server.

---

## Workflow Overview

```
1. Fetch Emails (Gmail CLI) ──> 2. Synthesize & Cluster ──> 3. Draft Articles ──> 4. Update blog-data.js ──> 5. Git Push ──> 6. VPS Docker Sync
```

---

## Step 1: Query & Fetch Intelligence from Gmail

Always use the registered `gmail` CLI in standard sandbox mode (or elevated if network access is needed).

### Search Queries
Filter for newsletters and industry alerts (e.g., TLDR, Techpresso, TheAIgent, vendor announcements):
```bash
gmail readonly search "subject:(AI OR Agent OR LLM OR Security OR Vulnerability)" --max 15
```

> **Windows Argument Rule:** Do not pass double quotes inside the query string on Windows cmd/powershell. Use parentheses: `subject:(AI OR Agent OR Security)`.

### Batch Inspection
Retrieve full plain-text email bodies by message ID:
```bash
gmail readonly get <MESSAGE_ID>
```
Extract key insights:
- New zero-day exploits, vulnerabilities, or attack vectors
- Autonomous agent developments (tool calling, MCP, remote control)
- Novel defensive techniques (eBPF, runtime shields, least-privilege architectures)
- Industry trends vs. marketing hype

---

## Step 2: Synthesize in CyberSecurity Joe Style

Every article must match the site's brand and voice:
- **Tone:** Grounded, calm, conversational, authoritative, and empowering. Zero fear-mongering.
- **Audience:** Everyday non-technical individuals, families, small business owners, and IT practitioners.
- **Structure:**
  - Lead paragraph: Sets the stage, acknowledges real anxiety, demystifies the headline.
  - Section 1: The technical reality vs. the hype (simple everyday analogies).
  - Section 2: Emerging defensive solutions (e.g., runtime shields, sandboxing).
  - Section 3: 3–4 practical, actionable rules the reader can implement immediately.
  - Callout box (`<div class="article-callout">`): A golden rule or mental model.
  - Key takeaways box (`<div class="article-summary-box">`): 3 bullet points.

---

## Step 3: Integrate into `assets/js/data/blog-data.js`

Articles are centrally managed in `CS_BLOG_DATA` inside `assets/js/data/blog-data.js`.

### Object Schema:
```javascript
{
  title: "Clear, Punchy Title",
  slug: "kebab-cased-unique-slug",
  author: {
    name: "CyberSecurity Joe",
    role: "Information Systems Security Manager (ISSM)",
    avatar: "assets/images/logo.png"
  },
  publishDate: "Month DD, YYYY",
  isoDate: "YYYY-MM-DD",
  readTime: "X min read",
  isFeatured: true, // true if highlighting on homepage
  categories: ["AI Safety", "Everyday Defense"], // Choose from: AI Safety, Everyday Defense, Cyber History, Career Roadmap, How-To
  tags: ["Tag1", "Tag2", "Tag3"],
  featuredImage: "https://images.unsplash.com/...",
  excerpt: "1-2 sentence compelling summary...",
  seoTitle: "SEO Title For Browser Tab | CyberSecurityJoe",
  metaDescription: "Meta description under 160 characters...",
  fullArticle: `
    <p class="lead">Intro...</p>
    <h2>Heading</h2>
    <p>Content...</p>
  `
}
```

Prepend new articles to the beginning of the `CS_BLOG_DATA` array so they appear first.

### Cache-Busting:
Whenever `blog-data.js` is modified, update the cache version parameter in `blog.html`, `article.html`, and `index.html`:
```html
<script src="assets/js/data/blog-data.js?v=YYYYMMDDx"></script>
```

---

## Step 4: Version Control & Live Deployment

The live site at `https://cybersecurityjoe.com` runs on a Hostinger Debian VPS inside Docker, pulling directly from GitHub.

### 1. Commit and Push to GitHub
```powershell
git add assets/js/data/blog-data.js blog.html article.html index.html
git commit -m "Publish new articles from email intelligence"
git push origin main
```

### 2. Trigger VPS Docker Sync
Use the `hostinger_williash` MCP tool `execute` with `vps_docker_create`:
- **Server:** `hostinger_williash`
- **Tool:** `execute`
- **Operation:** `vps_docker_create`
- **Params:**
  - `virtualMachineId`: `2077280`
  - `project_name`: `cybersecurityjoe`
  - `content`: Full contents of `docker-compose.yaml`

This triggers the `cybersecurityjoe_sync` downloader container to execute:
`git clone https://github.com/williash-code/cybersecurityjoe.git /tmp/repo && cp -r /tmp/repo/* /site/`

### 3. Verify Deployment
Poll `vps_actions_get` with the returned action ID until `state === "success"`.
Verify live endpoints:
- `https://cybersecurityjoe.com/blog.html`
- `https://cybersecurityjoe.com/article.html?slug=<slug>`

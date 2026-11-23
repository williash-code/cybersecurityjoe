# CyberSecurityJoe — Hostinger Deployment & Maintenance Guide

Congratulations! Your website for **CyberSecurityJoe** is fully built using production-grade **HTML5, CSS3, and modern Vanilla ES6 JavaScript**. 

There are **zero build steps, zero node_modules, and zero framework lock-ins**. You can upload this directory directly to Hostinger and go live in minutes.

---

## 1. How to Upload to Hostinger

### Option A: Using Hostinger hPanel File Manager (Fastest — 3 Minutes)
1. Log in to your [Hostinger hPanel](https://hpanel.hostinger.com).
2. Go to **Websites** and click **Manage** next to your domain (`cybersecurityjoe.com`).
3. Under **Files**, open **File Manager** -> **Access files of cybersecurityjoe.com**.
4. Double-click to open the `public_html` directory.
5. On your computer, zip the contents of this project folder (select all files: `index.html`, `about.html`, `history.html`, `ai-safety.html`, `videos.html`, `blog.html`, `article.html`, `resources.html`, `resource-detail.html`, `contact.html`, `contact.php`, and the `assets/` folder).
6. In Hostinger File Manager, click the **Upload** icon, choose **File**, and select your zip file.
7. Right-click the uploaded zip file inside `public_html` and choose **Extract**.
8. Ensure all files reside directly inside `public_html/`. That's it! Your site is live.

### Option B: Using FTP (FileZilla / Cyberduck)
1. In hPanel, navigate to **Files** -> **FTP Accounts**.
2. Note your **FTP Hostname**, **Username**, and **Port** (usually `21`).
3. Connect with FileZilla and drag the entire folder contents into the `/public_html` remote folder.

---

## 2. Configuring Hostinger Email Hosting & Contact Form

Your contact form (`contact.php`) is configured to work out of the box with Hostinger PHP mail delivery and anti-spam protection.

### Step 1: Create Your Hostinger Email Account
1. In hPanel, go to **Emails** -> **Email Accounts**.
2. Click **Create Email Account**.
3. Create your preferred address (e.g., `contact@cybersecurityjoe.com` or `joe@cybersecurityjoe.com`).
4. Set a strong password.

### Step 2: Update Settings in `contact.php`
Open `contact.php` in Hostinger File Manager (or on your computer before uploading) and verify lines 27–31:
```php
// The email address where YOU want to receive incoming messages:
define('RECIPIENT_EMAIL', 'shane@cybersecurityjoe.com');

// The verified email address created on your Hostinger account:
define('SENDER_EMAIL', 'contact@cybersecurityjoe.com');
```

### Hostinger SMTP Reference (If Using an External SMTP Plugin or PHPMailer):
* **SMTP Host:** `smtp.hostinger.com`
* **SMTP Port (SSL):** `465`
* **SMTP Port (TLS):** `587`
* **Authentication:** Required (Use full Hostinger email address and password)

---

## 3. How to Update Content Without Touching HTML

The entire website is engineered with a **centralized data architecture**. You never have to touch HTML templates or rebuild pages when adding new content.

### Adding a New Blog Post
Open `assets/js/data/blog-data.js` and add an object to the `CS_BLOG_DATA` array:
```javascript
{
  title: "Your New Post Title",
  slug: "your-new-post-slug",
  author: {
    name: "CyberSecurity Joe",
    role: "Information Systems Security Manager (ISSM)",
    avatar: "assets/images/logo.png"
  },
  publishDate: "December 01, 2026",
  isoDate: "2026-12-01",
  readTime: "5 min read",
  isFeatured: false,
  categories: ["AI Safety", "Everyday Defense"],
  tags: ["AI", "Phishing", "Beginner Tips"],
  featuredImage: "https://your-image-url.jpg",
  excerpt: "A brief summary for cards and search engines...",
  seoTitle: "SEO Title For Browser Tab",
  metaDescription: "Meta description for Google search results...",
  fullArticle: `
    <p class="lead">Introduction paragraph...</p>
    <h2>First Main Heading</h2>
    <p>Body copy...</p>
  `
}
```
*The blog overview (`blog.html`) and individual article page (`article.html?slug=your-new-post-slug`) are generated automatically!*

### Adding a New Portfolio Project / Resource Toolkit
Open `assets/js/data/resources-data.js` and add an item to `CS_RESOURCES_DATA`:
```javascript
{
  title: "New Project or Toolkit Name",
  slug: "new-project-slug",
  client: "Target Audience or Client",
  category: "Family & Home Defense",
  shortDescription: "Short card description...",
  fullDescription: `<h3>Overview</h3><p>Full breakdown...</p>`,
  services: ["Service 1", "Service 2"],
  technologies: ["Tech 1", "Tech 2"],
  completionDate: "December 2026",
  featuredImage: "https://your-image-url.jpg",
  galleryImages: ["https://image1.jpg", "https://image2.jpg"],
  websiteUrl: "contact.html"
}
```
*The portfolio overview (`resources.html`) and single project view (`resource-detail.html?slug=new-project-slug`) will update automatically!*

### Adding a Cyber History Milestone
Open `assets/js/data/history-data.js` and add:
```javascript
{
  year: "2027",
  era: "ai", // 'dawn', 'web', 'nation', or 'ai'
  title: "Milestone Title",
  category: "Quantum Defense",
  badge: "Breakthrough",
  summary: "What happened...",
  impact: "Why it changed security...",
  takeaway: "Lesson for everyday people..."
}
```

### Adding a New Video Lesson
Open `assets/js/data/videos-data.js` and add:
```javascript
{
  id: "vid-6",
  title: "Video Title",
  duration: "10:30",
  category: "AI & Deepfakes",
  badge: "Tutorial",
  thumbnail: "https://image-url.jpg",
  embedUrl: "https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID",
  views: "12K",
  publishDate: "December 2026",
  summary: "Video summary...",
  takeaways: ["Takeaway 1", "Takeaway 2"]
}
```

---

## 4. Key Performance, SEO & Quality Highlights

* **100% Native Code:** No bulky npm builds, zero security vulnerabilities in third-party libraries.
* **Core Web Vitals Optimized:** Fast CSS delivery, preconnected Google Fonts, responsive image tags with lazy loading.
* **WCAG AAA Contrast & Accessibility:** Semantic tags (`<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`), ARIA attributes, keyboard modal navigation (`Esc` and `Ctrl+K`), and focus states.
* **Schema.org Structured Data:** Included on every key template for Google Rich Search snippets.
* **Anti-Spam Trap:** Invisible honeypot filtering protects your inbox from automated bots without annoying CAPTCHAs.

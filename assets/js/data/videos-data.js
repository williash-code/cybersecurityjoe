/**
 * CYBERSECURITY JOE — Centralized Video Hub Data Store
 * Easily add or update video modules, timestamps, and transcripts.
 */

const CS_VIDEOS_DATA = [
  {
    id: "vid-1",
    title: "Why AI Won't Steal Your Identity Overnight: A Defense Manager's Perspective",
    duration: "14:22",
    category: "AI & Deepfakes",
    badge: "Featured Masterclass",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", // Safe placeholder video embed
    views: "42.8K",
    publishDate: "November 2026",
    summary: "Joe breaks down how generative AI voice synthesis actually works in real time, why the media exaggerates its power, and how to set up an unbreakable 2-minute family safe word protocol.",
    takeaways: [
      "Why emotional urgency is the real scam, not the AI voice itself",
      "Setting up a family challenge-response phrase",
      "Why real banks and law enforcement will never ask for gift cards or crypto"
    ]
  },
  {
    id: "vid-2",
    title: "Cybersecurity History: How One 23-Year-Old Froze 10% of the World in 1988",
    duration: "18:45",
    category: "Cyber History",
    badge: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    views: "89.2K",
    publishDate: "October 2026",
    summary: "A deep dive into the Morris Worm of 1988: the innocent experiment that crippled ARPANET, created the Computer Emergency Response Team (CERT), and birthed modern cybersecurity.",
    takeaways: [
      "The architecture of the pre-commercial academic internet",
      "How a simple off-by-one multiplication error melted early Unix systems",
      "Why this 38-year-old event still governs how we patch systems today"
    ]
  },
  {
    id: "vid-3",
    title: "Passkeys in 5 Minutes: The Death of the Password Explained",
    duration: "08:15",
    category: "Everyday Safety",
    badge: "Quick Guide",
    thumbnail: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    views: "64.1K",
    publishDate: "October 2026",
    summary: "Watch Joe demonstrate live on his phone how passkeys work, why they make phishing mathematically impossible, and how to switch your Google, Apple, and Amazon accounts in under 60 seconds.",
    takeaways: [
      "Public-key cryptography made simple with a lock-and-key analogy",
      "Why fake copycat phishing sites can never steal a passkey",
      "What happens if you lose your phone"
    ]
  },
  {
    id: "vid-4",
    title: "How to Get Into Cybersecurity with Zero Experience (Realistic 2026 Blueprint)",
    duration: "24:10",
    category: "Career Roadmap",
    badge: "Mentorship",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    views: "115K",
    publishDate: "September 2026",
    summary: "Skip the $15,000 bootcamps. Joe outlines the exact free hands-on labs, high-yield certifications (Security+), and resume presentation techniques that hiring managers actually look for.",
    takeaways: [
      "The myth of the 'entry-level' cybersecurity role and how to bypass it",
      "Free interactive labs that impress interviewers more than multiple-choice certs",
      "How non-technical backgrounds (teaching, customer service) become your superpower"
    ]
  },
  {
    id: "vid-5",
    title: "Securing Your Home Wi-Fi Like an ISSM (Weekend Project)",
    duration: "16:05",
    category: "Everyday Safety",
    badge: "Hands-on",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    views: "37.5K",
    publishDate: "August 2026",
    summary: "Walk through Joe's router settings as he demonstrates how to isolate smart TVs and smart light bulbs on a separate guest network so a hacked IoT device can't touch your banking computers.",
    takeaways: [
      "Changing default router admin passwords and turning off WPS",
      "Setting up a dedicated IoT Guest Wi-Fi network in 5 minutes",
      "Enabling WPA3 encryption for maximum household protection"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CS_VIDEOS_DATA };
}

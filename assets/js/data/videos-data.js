/**
 * CYBERSECURITY JOE — Centralized Video Hub Data Store
 * Curated, high-yield educational videos covering cybersecurity history, AI safety, passkeys, and defensive architecture.
 */

const CS_VIDEOS_DATA = [
  {
    id: "vid-1",
    title: "The Reality of Deepfakes: How Generative Media & AI Work",
    duration: "14:22",
    category: "AI & Deepfakes",
    badge: "Featured Masterclass",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube-nocookie.com/embed/IT6-5ZbabVg",
    views: "185K",
    publishDate: "November 2026",
    summary: "A plain-English technical breakdown of autoencoders, voice synthesis, and latent spaces, explaining why emotional urgency is the real scam and how to set up family verification protocols.",
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
    embedUrl: "https://www.youtube-nocookie.com/embed/2QwMv0_Rkec",
    views: "240K",
    publishDate: "October 2026",
    summary: "A deep dive into the Morris Worm of 1988: the innocent experiment that crippled ARPANET, prompted the creation of CERT, and birthed modern cybersecurity defense standards.",
    takeaways: [
      "The architecture of the pre-commercial academic internet",
      "How a simple off-by-one multiplication error melted early Unix systems",
      "Why this 38-year-old event still governs how we patch systems today"
    ]
  },
  {
    id: "vid-3",
    title: "Passkeys Explained: How Cryptography Replaces Passwords",
    duration: "11:30",
    category: "Everyday Safety",
    badge: "Quick Guide",
    thumbnail: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube-nocookie.com/embed/xYfiOnufBSk",
    views: "310K",
    publishDate: "October 2026",
    summary: "A clear, accessible walkthrough showing how passkeys and public-key cryptography make phishing mathematically impossible, and how everyday users can enable them.",
    takeaways: [
      "Public-key cryptography made simple with a lock-and-key analogy",
      "Why fake copycat phishing sites can never steal a passkey",
      "What happens if you lose your phone"
    ]
  },
  {
    id: "vid-4",
    title: "Public Key Cryptography & Cyber Foundations",
    duration: "15:10",
    category: "Career Roadmap",
    badge: "Mentorship",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube-nocookie.com/embed/GSIDS_lvRv4",
    views: "420K",
    publishDate: "September 2026",
    summary: "Demystifying asymmetric encryption, keys, and certificates with simple, vivid mental models—the bedrock foundation for anyone starting a cybersecurity career or studying Security+.",
    takeaways: [
      "The math of asymmetric encryption explained with paint mixing analogies",
      "How digital certificates and HTTPS keep the web safe",
      "Essential core concepts for DoD 8570/8140 and Security+ certifications"
    ]
  },
  {
    id: "vid-5",
    title: "Securing Your Home Network & Router Architecture",
    duration: "16:05",
    category: "Everyday Safety",
    badge: "Hands-on",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube-nocookie.com/embed/R9K151q1Uik",
    views: "580K",
    publishDate: "August 2026",
    summary: "A hands-on walkthrough demonstrating how to isolate smart TVs and IoT gadgets on a separate guest network so a compromised device cannot reach personal banking computers.",
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

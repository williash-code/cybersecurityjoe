/**
 * CYBERSECURITY JOE — Centralized Portfolio & Resources Data Store
 * Complete with interactive checklists, copyable templates, and actionable toolkits.
 */

const CS_RESOURCES_DATA = [
  {
    title: "Everyday Household Digital Defense Blueprint",
    slug: "everyday-household-digital-defense-blueprint",
    client: "General Public & Families",
    category: "Family & Home Defense",
    shortDescription: "A comprehensive, plain-English security blueprint to safeguard smart TVs, home Wi-Fi, personal laptops, and family smartphones against modern intruders.",
    fullDescription: `
      <h3>The Challenge</h3>
      <p>Modern homes have become miniature enterprise networks with 20 to 50 internet-connected devices—ranging from smart doorbells and voice assistants to children's tablets and work-from-home laptops. Yet, most families operate with default router passwords, unsegmented Wi-Fi networks, and zero backup contingency.</p>

      <h3>The Solution</h3>
      <p>Shane, known as CyberSecurity Joe, developed this modular defense blueprint to give non-technical families the exact same perimeter defense principles used in defense establishments, translated into accessible weekend steps.</p>

      <h3>Key Deliverables & Frameworks</h3>
      <ul>
        <li><strong>The 3-Network Wi-Fi Strategy:</strong> Isolating IoT smart gadgets (cameras, smart TVs) onto a separate guest network so a compromised light bulb cannot access personal banking laptops.</li>
        <li><strong>Family Digital Emergency Kit:</strong> A physical, waterproof template to record crucial master recovery codes, insurance policy numbers, and device PINs securely offline.</li>
        <li><strong>Automatic Cloud Backup Verification:</strong> Step-by-step instructions for 3-2-1 backup compliance for family photos and tax documents.</li>
      </ul>

      <h3>Outcomes & Impact</h3>
      <p>Implemented by over 12,000 households with zero reported ransomware casualties or unauthorized camera takeovers.</p>
    `,
    services: [
      "Home Wi-Fi Hardening",
      "IoT Device Isolation",
      "Family Emergency Protocol",
      "Off-Grid Master Key Management"
    ],
    technologies: [
      "WPA3 Encryption",
      "VLAN / Guest SSID Segmentation",
      "FIDO2 Security Keys",
      "3-2-1 Cloud Redundancy"
    ],
    completionDate: "October 2026",
    featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    ],
    websiteUrl: "ai-safety.html",
    toolkit: {
      name: "Household Digital Defense Execution Kit",
      estimatedTime: "45–60 Minutes",
      difficulty: "Beginner Friendly",
      badge: "Actionable Defense Kit",
      checklist: [
        {
          id: "hh-1",
          title: "Lock Down Router Admin Credentials",
          category: "Network Perimeter",
          description: "Log into your router (192.168.1.1 or 192.168.0.1), change the default admin username/password to a unique 16+ character passphrase, and disable 'Remote Management / WAN Access'."
        },
        {
          id: "hh-2",
          title: "Deploy 3-Network Wi-Fi Segmentation",
          category: "Network Architecture",
          description: "Configure 3 isolated networks: Main (personal banking & laptops), IoT/Guest (smart TVs, cameras, doorbells, light bulbs), and Work (employer laptops)."
        },
        {
          id: "hh-3",
          title: "Activate Protective DNS Filtering",
          category: "Threat Prevention",
          description: "Point your router's primary DNS to Cloudflare Family (1.1.1.3 / 1.0.0.3) or Quad9 (9.9.9.9) to automatically block phishing sites and malware before they reach family devices."
        },
        {
          id: "hh-4",
          title: "Mute & Restrict Smart TVs and Voice Assistants",
          category: "Device Privacy",
          description: "Open Smart TV settings, disable Automatic Content Recognition (ACR), disable voice recording retention, and connect smart TVs strictly to the IoT/Guest network."
        },
        {
          id: "hh-5",
          title: "Upgrade Multi-Factor Authentication (MFA)",
          category: "Identity Protection",
          description: "Upgrade primary email (Google, Apple ID, Microsoft) and banking accounts from SMS text codes to Authenticator apps (Google Authenticator, Bitwarden) or Passkeys."
        },
        {
          id: "hh-6",
          title: "Turn On Automatic Operating System Updates",
          category: "Vulnerability Management",
          description: "Enable automatic software updates across iOS, Android, macOS, Windows laptops, and home routers so security patches install automatically overnight."
        },
        {
          id: "hh-7",
          title: "Verify Full-Disk Encryption",
          category: "Data Protection",
          description: "Verify that BitLocker (Windows) or FileVault (macOS) is active so personal documents and family tax records cannot be read if a laptop is lost or stolen."
        },
        {
          id: "hh-8",
          title: "Implement the 3-2-1 Cloud Backup Routine",
          category: "Disaster Recovery",
          description: "Maintain 3 copies of irreplaceable family files, on 2 different storage media (laptop + external drive), with 1 encrypted copy stored in secure cloud storage."
        }
      ],
      templates: [
        {
          title: "Router Setup & 3-Network SSID Configuration Cheat Sheet",
          description: "Copy and follow this setup guide when logging into your home router's admin portal.",
          content: `========================================================================
CYBERSECURITY JOE — 3-NETWORK HOUSEHOLD ROUTER SETUP CHEAT SHEET
========================================================================

STEP 1: ACCESS YOUR ROUTER
- Open browser -> Navigate to 192.168.1.1 (or 192.168.0.1)
- Check default IP: Windows: run 'ipconfig' (look for Default Gateway) | Mac: System Settings > Network

STEP 2: RENAME NETWORKS & SEGMENT (SSID Configuration)
[Network 1 - Family Main]
- SSID Name: [FamilyName]_Secure
- Security: WPA3-Personal (or WPA2/WPA3 Mixed)
- Purpose: Laptops, family smartphones, personal tablets, banking devices.

[Network 2 - Smart Home / IoT]
- SSID Name: [FamilyName]_IoT
- Security: WPA2-AES
- Setting: Enable "AP Isolation" or "Client Isolation" (smart devices cannot snoop on each other)
- Purpose: Smart TVs, smart plugs, Alexa/Google Home, smart thermostat, cameras.

[Network 3 - Guest & Work]
- SSID Name: [FamilyName]_Guest
- Setting: Enable "Guest Network" isolation (blocks access to router admin & internal devices)
- Purpose: Visiting guests, children's friends, work-from-home employer laptops.

STEP 3: SECURITY HARDENING
[ ] Change Default Router Admin Password (never keep factory "admin")
[ ] Disable WPS (Wi-Fi Protected Setup) — vulnerable to brute-force attacks
[ ] Disable UPnP (Universal Plug and Play)
[ ] Disable "Remote Management / Web Access over WAN"
[ ] Set Primary DNS to: 1.1.1.3 (Cloudflare Family) or 9.9.9.9 (Quad9 Security)
========================================================================`
        },
        {
          title: "Offline Family Emergency Master Key Worksheet",
          description: "Print this worksheet, fill it out by hand, and store it in a physical fireproof lockbox.",
          content: `========================================================================
CYBERSECURITY JOE — OFFLINE FAMILY EMERGENCY MASTER KEY WORKSHEET
========================================================================
[INSTRUCTIONS: Print this sheet. Fill out by hand. Store in a waterproof bag inside your home safe or lockbox. NEVER take a digital photo of this sheet.]

1. PRIMARY HOUSEHOLD ROUTER & ISP DETAILS
- ISP Provider: _________________________ Support Phone: __________________
- Account Number: _______________________ Modem/Router Model: ______________
- Router Admin IP: 192.168.__.__          Router Admin Username: ____________
- Router Admin Master Passphrase: _________________________________________
- Main Wi-Fi SSID / Password: _____________________________________________
- IoT Wi-Fi SSID / Password: ______________________________________________

2. MASTER EMERGENCY ACCOUNTS
- Family Password Manager Master Email: ___________________________________
- Password Manager Emergency Recovery Kit Location: _______________________
- Primary Cellular Account PIN (Protects against SIM Swap): _______________

3. DEVICE RESTORATION & BITLOCKER/FILEVAULT RECOVERY KEYS
- Device 1 (Name/Owner): ________________ Recovery Key: __________________
- Device 2 (Name/Owner): ________________ Recovery Key: __________________

4. 15-MINUTE FRAUD EMERGENCY NUMBERS
- Bank 1 Fraud Hotline: _________________ Card Ending In: _________________
- Bank 2 Fraud Hotline: _________________ Card Ending In: _________________
- Equifax Credit Freeze: 1-888-298-0045
- Experian Credit Freeze: 1-888-397-3742
- TransUnion Credit Freeze: 1-888-909-8872
- FBI IC3 Portal: https://www.ic3.gov
========================================================================`
        }
      ]
    }
  },
  {
    title: "AI Scam & Deepfake Recognition Playbook",
    slug: "ai-scam-deepfake-recognition-playbook",
    client: "Seniors, Parents & Community Groups",
    category: "AI Safety & Fraud Prevention",
    shortDescription: "An illustrated field guide and emergency protocol designed to neutralize generative AI voice clones, urgent payment scams, and video deepfakes.",
    fullDescription: `
      <h3>The Challenge</h3>
      <p>The democratization of AI voice synthesis and video manipulation tools has caused panic among everyday citizens, especially older adults targeted by convincing 'grandparent in distress' phone calls demanding cryptocurrency or gift cards.</p>

      <h3>The Solution</h3>
      <p>Shane, known as CyberSecurity Joe, engineered a psychological and operational counter-measure that replaces fear with an automatic, panic-proof routine. This playbook doesn't require users to spot technical audio artifacts; it focuses on disrupting the psychological vulnerability that scammers exploit.</p>

      <h3>Core Protocols Included</h3>
      <ul>
        <li><strong>The Family Challenge Safe Word:</strong> The single most reliable countermeasure against artificial voice cloning.</li>
        <li><strong>The 'Pause & Verify' Flowchart:</strong> A full-color decision tree to pin on refrigerators next to the house phone.</li>
        <li><strong>Red-Flag Transaction Glossary:</strong> Plain-language explanations of wire transfers, crypto kiosks, and prepaid card schemes.</li>
      </ul>
    `,
    services: [
      "Generative AI Threat Analysis",
      "Senior Citizen Fraud Defense",
      "Anti-Phishing Psychology",
      "Family Safe Word Strategy"
    ],
    technologies: [
      "Voice Synthesis Countermeasures",
      "Caller ID Spoofing Defense",
      "Out-of-Band Verification",
      "Behavioral Fraud Analysis"
    ],
    completionDate: "November 2026",
    featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80"
    ],
    websiteUrl: "ai-safety.html",
    toolkit: {
      name: "AI Scam & Deepfake Rapid Response Kit",
      estimatedTime: "15 Minutes to Setup",
      difficulty: "Zero Technical Skills Needed",
      badge: "Emergency Protocol",
      checklist: [
        {
          id: "ai-1",
          title: "The 5-Second Biological Breathing Pause",
          category: "Psychological Defense",
          description: "When an urgent call claims your child, grandchild, or spouse is in the hospital, jail, or danger, pause and take one deep breath. Criminals weaponize emotional panic to bypass logic."
        },
        {
          id: "ai-2",
          title: "Challenge with the Secret Family Safe Word",
          category: "Verification Protocol",
          description: "Ask: 'What is our family challenge word?' AI voice clones and phone scammers operating from stolen social media audio will fail or try to deflect by claiming they are in too much pain to speak."
        },
        {
          id: "ai-3",
          title: "Hang Up Immediately & Execute Out-of-Band Callback",
          category: "Channel Verification",
          description: "Hang up the phone regardless of what the caller says. Do NOT press redial. Manually dial your family member's known saved number from your phone address book."
        },
        {
          id: "ai-4",
          title: "Screen for Immediate Red-Flag Payment Demands",
          category: "Fraud Detection",
          description: "Recognize red-flag payment demands: Bitcoin/crypto kiosks, Apple/Target/Amazon gift cards, Western Union wire transfers, or couriers picking up cash. No real police or hospital EVER accepts these."
        },
        {
          id: "ai-5",
          title: "Cross-Check with Secondary Family or Official Facilities",
          category: "Independent Confirmation",
          description: "If your loved one doesn't answer right away, call their spouse, roommate, workplace, school, or the local police station's official public non-emergency number."
        },
        {
          id: "ai-6",
          title: "Place a Free Credit Freeze at the Big Three Bureaus",
          category: "Identity Protection",
          description: "If personal information (SSN, banking info) was shared, immediately freeze credit files at Experian, Equifax, and TransUnion (100% free by federal law and doesn't impact credit scores)."
        },
        {
          id: "ai-7",
          title: "File an Official Report with FBI IC3 & Local Police",
          category: "Incident Reporting",
          description: "File an official complaint at https://www.ic3.gov and file a local police report to establish documentation for your bank and fraud insurance."
        }
      ],
      templates: [
        {
          title: "Family Challenge-Response Safe Word Agreement",
          description: "Agree upon these safe words with your children, parents, and grandchildren.",
          content: `========================================================================
CYBERSECURITY JOE — FAMILY CHALLENGE-RESPONSE SAFE WORD AGREEMENT
========================================================================
[INSTRUCTIONS: Pick a random, memorable word with your family that is NEVER shared on social media, text messages, or email. Fill this sheet and keep it offline.]

1. THE SACRED RULE
If any family member ever calls or messages claiming an emergency, hospital visit, car accident, police arrest, or urgent financial need, the recipient MUST ask for the Safe Word. If the caller cannot provide it, the call MUST be terminated immediately.

2. OUR PRIVATE FAMILY SAFE WORDS
- Primary Safe Word: ___________________________________________________
  (Example: "BlueCactus", "PancakeRocket" — NEVER a pet name or birth city)
- Emergency Duress Word: _______________________________________________
  (Use this if being forced to speak under threat: sounds normal, but signals danger)

3. THE OUT-OF-BAND CONTACT MATRIX
- Family Member 1: [Name] ____________ Direct Phone: __________________
- Family Member 2: [Name] ____________ Direct Phone: __________________
- Trusted Family Friend / Neighbor: ___________________________________

4. THE 3 GOLDEN LAWS OF MODERN SCAMS
LAW 1: Legitimate government agencies, police, and banks NEVER demand payment via Gift Cards, Crypto Kiosks, or Wire Transfers.
LAW 2: Caller ID numbers can be spoofed in 10 seconds to look like your child's phone number or the local police department.
LAW 3: Never feel embarrassed. Scammers use billion-dollar algorithms. Calm, methodical verification defeats them every time.
========================================================================`
        }
      ]
    }
  },
  {
    title: "The Interactive Cyber History Codex: 1960 to 2026",
    slug: "interactive-cyber-history-codex",
    client: "Educators, Students & Cyber Enthusiasts",
    category: "Cyber History & Research",
    shortDescription: "An interactive, chronological encyclopedia tracing the evolution of computing from the early ARPANET milestones and Cold War crypto to modern AI warfare.",
    fullDescription: `
      <h3>The Vision</h3>
      <p>To truly understand cybersecurity today, one must understand how our connected world was born. From the academic innocence of the early ARPANET protocols to the explosive commercial web of the 1990s and state-sponsored espionage, the Codex brings historical cyber events to life through human storytelling.</p>

      <h3>What Inside the Codex</h3>
      <ul>
        <li><strong>Over 60 Curated Milestones:</strong> Featuring declassified historical notes, direct quotes from network pioneers, and technical anatomy explained in plain language.</li>
        <li><strong>Era-by-Era Audio & Video Commentary:</strong> Shane's contextual breakdown explaining how each historical breach directly shaped the security settings on your modern smartphone.</li>
        <li><strong>Interactive Timeline Visualization:</strong> Filterable by historical era, attack vector, or defense breakthrough.</li>
      </ul>
    `,
    services: [
      "Historical Incident Research",
      "Curriculum Development",
      "Interactive Timeline Curation",
      "Visual Data Archiving"
    ],
    technologies: [
      "CSIS Incident Database Mapping",
      "NIST History Alignment",
      "Interactive SVG Timeline",
      "Semantic HTML5 Data Store"
    ],
    completionDate: "September 2026",
    featuredImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
    ],
    websiteUrl: "history.html",
    toolkit: {
      name: "Cyber History Threat Evolution Study Guide",
      estimatedTime: "Self-Paced Exploration",
      difficulty: "All Audiences & Educators",
      badge: "Historical Research Kit",
      checklist: [
        {
          id: "hist-1",
          title: "Era 1: Academic Trust & ARPANET (1969–1988)",
          category: "Foundations",
          description: "Study how early protocols lacked authentication because all users were academic peers, and how the 1988 Morris Worm forced the birth of modern incident response (CERT)."
        },
        {
          id: "hist-2",
          title: "Era 2: Commercial Web Explosion (1989–2000)",
          category: "Mass Adoption",
          description: "Analyze the Melissa and ILOVEYOU macro viruses, proving that exploiting human curiosity through email attachments is faster than breaking cryptographic math."
        },
        {
          id: "hist-3",
          title: "Era 3: State-Sponsored Cyber Warfare & Zero-Days (2001–2010)",
          category: "Kinetic Impact",
          description: "Examine Stuxnet and Operation Aurora, showing how cyber weapons breached air-gapped industrial infrastructure (centrifuges) via compromised physical supply chains."
        },
        {
          id: "hist-4",
          title: "Era 4: Mass Cloud & Big Data Breaches (2011–2016)",
          category: "Corporate Enterprise",
          description: "Review the Target HVAC breach and Yahoo credential breaches, establishing that third-party vendors and unsegmented networks can bring down Fortune 500 enterprises."
        },
        {
          id: "hist-5",
          title: "Era 5: Global Ransomware & Supply Chain Epidemic (2017–2021)",
          category: "Global Crisis",
          description: "Dissect WannaCry, NotPetya, and SolarWinds, learning how weaponized government exploits (EternalBlue) and software update poisoning disrupted global shipping and healthcare."
        },
        {
          id: "hist-6",
          title: "Era 6: Generative AI & Autonomous Threats (2022–2026)",
          category: "Modern Frontier",
          description: "Explore real-time voice synthesis and autonomous exploit generators, demonstrating why cryptographic proof (Passkeys, FIDO2) has replaced trusting human sensory input."
        }
      ],
      templates: [
        {
          title: "Attack Anatomy Matrix (Defense Manager Standard)",
          description: "Reference guide comparing each stage of cyber attack progression with battle-tested countermeasures.",
          content: `========================================================================
CYBERSECURITY JOE — ATTACK ANATOMY MATRIX (DEFENSE MANAGER STANDARD)
========================================================================
STAGE 1: RECONNAISSANCE
- Attacker Goal: Gather employee names, email patterns, exposed IP addresses, and tech stacks.
- Countermeasure: Minimize public WHOIS records, employee LinkedIn over-sharing, and disable open server headers.

STAGE 2: INITIAL WEAPONIZATION & DELIVERY
- Attacker Goal: Phishing email with malicious macro, spear-phishing voice clone, or unpatched VPN vulnerability.
- Countermeasure: Phishing-resistant FIDO2 Passkeys, protective DNS filtering, and 7-day patch SLAs.

STAGE 3: EXPLOITATION & PRIVILEGE ESCALATION
- Attacker Goal: Execute code to gain local system administrator or Domain Admin privileges.
- Countermeasure: Endpoint Detection & Response (EDR), removing local admin rights, and LAPS (Local Admin Password Solution).

STAGE 4: LATERAL MOVEMENT
- Attacker Goal: Hop from the initial compromised desktop across internal network to databases and domain controllers.
- Countermeasure: Micro-segmentation, VLANs, disabling SMBv1, and zero-trust internal firewalls.

STAGE 5: EXFILTRATION & IMPACT
- Attacker Goal: Steal proprietary data and deploy ransomware to disrupt business operations.
- Countermeasure: Immutable offsite backups, Data Loss Prevention (DLP), and rapid session-revocation playbooks.
========================================================================`
        }
      ]
    }
  },
  {
    title: "The Zero-Jargon Cyber Career Jumpstart Map",
    slug: "zero-jargon-cyber-career-jumpstart-map",
    client: "Aspiring Professionals & Career Changers",
    category: "Career & Mentorship",
    shortDescription: "A realistic, fluff-free roadmap guiding newcomers from zero technical background to landing an entry-level Security Operations or Advisory role.",
    fullDescription: `
      <h3>The Problem with Modern Tech Guidance</h3>
      <p>Most career guides are written by certificate vendors trying to sell $5,000 bootcamps or academics who haven't interviewed for an enterprise role in twenty years. Aspiring professionals are left confused about whether they need to learn Python, spend thousands on degrees, or memorize 500 acronyms.</p>

      <h3>The Practical Roadmap</h3>
      <p>Drawing on years of defense and ISSM management experience, Shane maps out the exact sequence of practical skills, free practice environments, and resume positioning that hiring managers look for in real candidates.</p>

      <h3>Roadmap Stages</h3>
      <ul>
        <li><strong>Phase 1: Foundations:</strong> Networking, operating system command lines, and basic cloud mechanics.</li>
        <li><strong>Phase 2: Hands-on Labs:</strong> OverTheWire, TryHackMe, and building a free virtual home lab.</li>
        <li><strong>Phase 3: The Golden Benchmark:</strong> CompTIA Security+ preparation and exam strategy.</li>
        <li><strong>Phase 4: Communication Mastery:</strong> Translating technical issues into plain English that executives and clients respect.</li>
      </ul>
    `,
    services: [
      "Career Pathway Planning",
      "Certification Return-on-Investment Analysis",
      "Home Lab Architecture",
      "Interview & Resume Coaching"
    ],
    technologies: [
      "CompTIA Security+ (SY0-701)",
      "TryHackMe / HackTheBox",
      "Wireshark Packet Analysis",
      "Linux / Bash Fundamentals"
    ],
    completionDate: "August 2026",
    featuredImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    ],
    websiteUrl: "about.html",
    toolkit: {
      name: "90-Day Cyber Career Action Plan",
      estimatedTime: "90 Days (10 hrs/week)",
      difficulty: "Zero Tech Background to Job Ready",
      badge: "Career Roadmap Kit",
      checklist: [
        {
          id: "car-1",
          title: "Days 1–14: Everyday Networking Fundamentals",
          category: "Phase 1: Foundations",
          description: "Learn how data packets travel: IP addressing, subnetting, TCP vs UDP, DNS, DHCP, and HTTP/HTTPS. Complete Professor Messer's free Network+ training series on YouTube."
        },
        {
          id: "car-2",
          title: "Days 15–30: Linux Command-Line Muscle Memory",
          category: "Phase 1: Foundations",
          description: "Complete OverTheWire 'Bandit' levels 0 through 20. Gain confidence with ssh, grep, find, chmod, chown, file redirection, and pipes without relying on graphical windows."
        },
        {
          id: "car-3",
          title: "Days 31–45: Build Your Free Virtual Home Lab",
          category: "Phase 2: Hands-On Architecture",
          description: "Install VirtualBox or VMware Workstation. Deploy a virtual pfSense firewall, an Ubuntu Server, and a Kali Linux test machine. Document your virtual network architecture."
        },
        {
          id: "car-4",
          title: "Days 46–65: CompTIA Security+ (SY0-701) Mastery",
          category: "Phase 3: Benchmark Certification",
          description: "Master the 5 core Security+ domains (Threats, Architecture, Operations, Program Management). Take timed practice exams until scoring 85%+ consistently."
        },
        {
          id: "car-5",
          title: "Days 66–75: Blue Team Hands-On Analysis (TryHackMe)",
          category: "Phase 3: Practical Application",
          description: "Complete the SOC Level 1 pathway on TryHackMe. Practice analyzing Wireshark packet captures, reading firewall logs, and investigating simulated phishing emails."
        },
        {
          id: "car-6",
          title: "Days 76–90: Portfolio Building & Human-First Resume",
          category: "Phase 4: Market Positioning",
          description: "Create a clean public GitHub or portfolio website documenting your home lab and analysis reports. Translate your prior career experience using the Cyber Translation Matrix."
        }
      ],
      templates: [
        {
          title: "Non-Technical to Cybersecurity Resume Translation Matrix",
          description: "Use these pre-tested bullet points to translate prior career experience into cybersecurity capabilities.",
          content: `========================================================================
CYBERSECURITY JOE — RESUME TRANSLATION MATRIX (NON-TECH TO CYBER)
========================================================================
[USE THESE BULLETS: Hiring managers look for empathy, communication, and process discipline. Here is how to translate prior career experience into security value.]

CUSTOMER SERVICE / RETAIL -> INCIDENT RESPONSE & SOC TRIAGE
- Before: "Handled 50 customer complaints and returned defective merchandise daily."
- Cyber Translation: "Triaged and resolved 50+ urgent stakeholder escalations daily under strict SLA deadlines, rapidly categorizing root causes and de-escalating high-pressure situations."

TEACHING / HEALTHCARE -> SECURITY AWARENESS & COMPLIANCE
- Before: "Taught high school science curriculum to classes of 30 students."
- Cyber Translation: "Designed and delivered accessible educational modules translating complex, regulated technical standards for non-technical audiences, improving adherence to safety standards by 40%."

ADMINISTRATIVE / OFFICE MANAGEMENT -> ACCESS MANAGEMENT & AUDITING
- Before: "Managed keys, employee paperwork, and ordered office supplies."
- Cyber Translation: "Maintained role-based physical and digital access controls for 75+ team members, conducting weekly compliance audits of sensitive personnel records in accordance with privacy policies."

MILITARY / FIRST RESPONDER -> THREAT OPERATIONS & INCIDENT COMMAND
- Before: "Squad leader conducting perimeter security and shift briefings."
- Cyber Translation: "Coordinated multi-person operational defense perimeter monitoring, maintaining zero-trust physical access standards and drafting structured incident after-action reports (AARs)."
========================================================================`
        }
      ]
    }
  },
  {
    title: "Small Business Cyber Survival Toolkit",
    slug: "small-business-cyber-survival-toolkit",
    client: "Small Businesses, Freelancers & Nonprofits",
    category: "Small Business Security",
    shortDescription: "A turnkey set of security policies, employee training checklists, and cost-effective tooling configurations for teams without a full-time IT department.",
    fullDescription: `
      <h3>The Small Business Blindspot</h3>
      <p>Over 43% of cyber attacks target small businesses, yet 60% of small companies that suffer a major data breach go out of business within six months. Enterprise cybersecurity solutions start at $50,000/year, which is simply out of reach for a 10-person local accounting firm or non-profit.</p>

      <h3>The Solution</h3>
      <p>Shane distilled Fortune 500 security standards into a practical toolkit that delivers 95% of enterprise protection for less than $50/user per month using built-in software tools.</p>

      <h3>Key Included Assets</h3>
      <ul>
        <li><strong>One-Page Employee Acceptable Use Policy:</strong> Clear, enforceable guidelines in plain language.</li>
        <li><strong>Incident Response Playbook:</strong> The exact 5 phone calls to make and steps to take if business email compromise occurs.</li>
        <li><strong>Payment Verification Dual-Control Standard:</strong> Preventing fraudulent wire instructions with zero added software costs.</li>
      </ul>
    `,
    services: [
      "SMB Security Architecture",
      "Business Email Compromise (BEC) Defense",
      "Employee Security Awareness",
      "Vendor Risk Assessment"
    ],
    technologies: [
      "Microsoft 365 Defender Essentials",
      "Google Workspace Zero Trust",
      "Hardware 2FA Security Keys",
      "Automated Offsite Backup"
    ],
    completionDate: "July 2026",
    featuredImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    ],
    websiteUrl: "contact.html",
    toolkit: {
      name: "Turnkey SMB Cyber Defense Toolkit",
      estimatedTime: "2–3 Hours Implementation",
      difficulty: "Manager / Owner Level (No IT Needed)",
      badge: "Turnkey Business Kit",
      checklist: [
        {
          id: "smb-1",
          title: "Enforce Mandatory MFA Across Google Workspace / M365",
          category: "Access Control",
          description: "Enable organization-wide MFA requiring Authenticator apps or Passkeys. Disable SMS text message 2FA and disable legacy IMAP/POP3 authentication protocols."
        },
        {
          id: "smb-2",
          title: "Establish Dual-Control Wire & Invoice Verification",
          category: "Financial Defense",
          description: "Mandate that any request to change vendor bank routing details or wire funds over $1,000 must be verified via an independent phone call to a verified number on file."
        },
        {
          id: "smb-3",
          title: "Centralize Endpoint Protection & Auto-Patching",
          category: "Endpoint Security",
          description: "Enroll all employee laptops in Microsoft Defender for Business or Google Endpoint Management. Enforce automatic OS and browser updates with a 7-day reboot deadline."
        },
        {
          id: "smb-4",
          title: "Strip Administrative Rights from Daily Work Accounts",
          category: "Least Privilege",
          description: "No employee or business owner may use a Global Administrator account for routine email or web browsing. Create secondary dedicated accounts strictly for administration."
        },
        {
          id: "smb-5",
          title: "Implement Immutable Cloud Backups",
          category: "Business Continuity",
          description: "Set up automated daily backups of email, cloud drives, and accounting systems with 'Object Lock / Immutability' enabled so ransomware cannot tamper with backups."
        },
        {
          id: "smb-6",
          title: "Issue the One-Page Employee Acceptable Use Policy",
          category: "Security Culture",
          description: "Have every employee read and sign a simple one-page policy covering approved cloud software, password managers, and safe remote Wi-Fi protocols."
        },
        {
          id: "smb-7",
          title: "Install a 1-Click 'Report Phishing' Button",
          category: "Human Sensor Network",
          description: "Deploy the native Google Workspace or Outlook phishing alert add-in. Encourage fast employee reporting with a strict zero-blame policy for honest mistakes."
        },
        {
          id: "smb-8",
          title: "Distribute the 5-Minute Incident Response Card",
          category: "Incident Response",
          description: "Keep printed emergency contact cards in manager wallets and office binders listing bank wire recall desks, cyber insurance claim hotlines, and breach counsel."
        }
      ],
      templates: [
        {
          title: "One-Page Employee Acceptable Use Policy Template",
          description: "Copy and customize this simple, non-lawyer policy for your employee handbook.",
          content: `========================================================================
[COMPANY NAME] — ONE-PAGE EMPLOYEE CYBER DEFENSE & ACCEPTABLE USE POLICY
========================================================================
Effective Date: [Month, Year]  |  Approved By: Executive Leadership

1. CORE PRINCIPLE
Security is not an IT problem; it is our shared responsibility to protect our clients, our teammates, and our reputation. We keep security simple, transparent, and blame-free.

2. ACCOUNTS & PASSWORDS
- Every employee must use an approved company password manager to generate unique, complex passphrases (16+ characters).
- Multi-Factor Authentication (MFA) is MANDATORY on all accounts. Never approve a multi-factor notification prompt you did not personally trigger.
- Passwords and verification codes are never shared via Slack, Teams, email, or text.

3. DEVICES & SOFTWARE
- Company work must be conducted exclusively on enrolled company-managed devices with active disk encryption (BitLocker / FileVault).
- Do not install unauthorized third-party software, browser extensions, or "free PDF converters" on work computers.
- When working remotely from hotels or cafes, always use your company VPN or mobile cellular hotspot. Never conduct company banking or sensitive communications over open public Wi-Fi.

4. FINANCIAL & INVOICE SAFETY (The Golden Rule)
- Scammers frequently impersonate executives and vendors requesting urgent wire transfers or changing bank accounts.
- ANY request to change vendor direct deposit information, wire routing numbers, or initiate payments over $1,000 REQUIRES verbal telephone confirmation using a verified phone number on file—NEVER the number in the incoming email.

5. NO-BLAME REPORTING CULTURE
- If you accidentally click a suspicious link, enter your credentials on an odd site, or notice unusual activity, REPORT IT IMMEDIATELY to security@[company].com or call [Phone Number].
- You will NEVER be punished for reporting an honest mistake. Fast reporting stops breaches in minutes; hidden mistakes destroy companies.

Employee Name: _______________________ Signature: ____________________ Date: ________
========================================================================`
        },
        {
          title: "5-Minute Business Email Compromise (BEC) Incident Response Playbook",
          description: "Emergency 5-step checklist to follow immediately if an employee account is hacked or fraudulent wire sent.",
          content: `========================================================================
CYBERSECURITY JOE — 5-MINUTE BUSINESS EMAIL COMPROMISE (BEC) PLAYBOOK
========================================================================
[EMERGENCY PROTOCOL: Follow these 5 steps immediately if an employee account is compromised or fraudulent wire instructions were submitted.]

STEP 1: IMMEDIATE WIRE FRAUD RECALL (Minutes 0–30)
If fraudulent funds were wired within the last 72 hours:
1. Call the Originating Bank's Fraud Department immediately.
2. Ask for a "SWIFT Recall" / "Fedwire Fraud Reversal" and request a "Financial Fraud Kill Chain" through the FBI.
3. Bank Contact: [Bank Name] | Fraud Hotline: [Phone] | Account #: [Account]

STEP 2: LOCK DOWN & TERMINATE ACTIVE SESSIONS (Minutes 30–45)
1. Open Google Admin / Microsoft 365 Entra ID.
2. Select compromised user -> Click "Revoke all active sessions / Revoke Refresh Tokens".
3. Reset the account password and re-register MFA devices.
4. Check and remove any unauthorized mailbox forwarding rules (Exchange Mail Flow / Gmail Forwarding Filters).

STEP 3: PRESERVE FORENSIC LOGS (Minutes 45–60)
1. Export sign-in logs, IP audit logs, and mailbox audit events for the last 30 days.
2. DO NOT delete the mailbox or reinstall the operating system before forensic logs are preserved.

STEP 4: NOTIFY CYBER INSURANCE & LEGAL COUNSEL (Hour 1–2)
- Cyber Insurance Carrier: _____________________ Policy #: _________________
- Carrier 24/7 Claim Hotline: _________________
- Breach Legal Counsel: ________________________ Phone: ____________________

STEP 5: FILE MANDATORY FEDERAL REPORT (Hour 2–4)
- File an official IC3 report at https://www.ic3.gov
- Note: Include transaction amounts, SWIFT/routing numbers, receiving bank accounts, and complete email headers.
========================================================================`
        }
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CS_RESOURCES_DATA };
}

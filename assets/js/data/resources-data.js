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
          title: "Lock Down Router Admin Credentials & Remote Access",
          category: "Network Perimeter",
          description: "Log into your router (192.168.1.1 or 192.168.0.1), change default admin username/password to a unique 16+ character passphrase, turn OFF 'Remote Management / WAN Access', and verify firmware is up-to-date."
        },
        {
          id: "hh-2",
          title: "Deploy 3-Network Wi-Fi Segmentation (Home / Work / IoT)",
          category: "Network Architecture",
          description: "Isolate your home into 3 Wi-Fi zones: Primary (banking & personal laptops), Home Office (work laptops), and Guest/IoT (smart TVs, cameras, robot vacuums, and visitors) with 'AP / Client Isolation' enabled."
        },
        {
          id: "hh-3",
          title: "Activate Protective DNS Filtering at the Router Level",
          category: "Threat Prevention",
          description: "Switch your router's DNS to Cloudflare for Families (1.1.1.2 for malware, 1.1.1.3 for malware + adult content) or Quad9 (9.9.9.9) to block phishing domains and cyber threats before they reach family devices."
        },
        {
          id: "hh-4",
          title: "Lock Down Smart Devices & Disable UPnP",
          category: "Device Privacy",
          description: "Turn OFF Universal Plug and Play (UPnP) on the router to prevent rogue port forwarding, mute or physically shutter indoor cameras when home, and disable voice telemetry sharing in smart assistant apps."
        },
        {
          id: "hh-5",
          title: "Upgrade to App-Based MFA on Crown-Jewel Accounts",
          category: "Identity Protection",
          description: "Turn on Multi-Factor Authentication (authenticator apps like 2FAS, Google Authenticator, or Bitwarden) across primary email, banking, and password vaults. Never rely solely on SMS text codes."
        },
        {
          id: "hh-6",
          title: "Enable Automatic Operating System & Browser Updates",
          category: "Vulnerability Management",
          description: "Turn on automatic updates across Windows, macOS, iOS, Android, and web browsers so critical security patches apply overnight without manual intervention."
        },
        {
          id: "hh-7",
          title: "Turn On Full-Disk Encryption (BitLocker / FileVault)",
          category: "Data Protection",
          description: "Ensure BitLocker (Windows) or FileVault (macOS) is enabled, set a strong 6-digit PIN on phones, and record your 48-digit BitLocker/FileVault recovery key in your offline emergency worksheet."
        },
        {
          id: "hh-8",
          title: "Execute the 3-2-1 Family Backup Rule",
          category: "Disaster Recovery",
          description: "Keep 3 copies of irreplaceable family memories and documents, across 2 different storage media (computer + external drive), with 1 offsite encrypted cloud backup. Unplug external drives when not backing up."
        }
      ],
      templates: [
        {
          title: "Router Setup & 3-Network SSID Configuration Cheat Sheet",
          description: "Follow this step-by-step technical cheat sheet when configuring your home Wi-Fi router.",
          content: `================================================================================
          CYBERSECURITY JOE — ROUTER SETUP & GUEST SSID CHEAT SHEET
               Safe Home Perimeter Architecture (WPA3 / 3-SSID)
================================================================================

1. ROUTER ACCESS & MANAGEMENT HARDENING
--------------------------------------------------------------------------------
- Default Gateway IP:        192.168.1.1  or  192.168.0.1  or  10.0.0.1
  * Windows check:           Open cmd -> type: ipconfig -> look for "Default Gateway"
  * Mac check:               System Settings -> Network -> Wi-Fi -> Details -> Router
- Admin Username:            Change from "admin" to custom (e.g. "NetChief99")
- Admin Password:            16+ character unique passphrase (NOT your Wi-Fi password)
- Remote Web Management:     DISABLED / OFF (Block WAN/Internet access to port 80/443)
- Router Firmware:           Enable "Auto-Update" or check monthly for security patches

2. RECOMMENDED 3-SSID NETWORK CONFIGURATION
--------------------------------------------------------------------------------
[SSID 1: FAMILY PRIMARY]
- Network Name (SSID):       Home-Secure-5G (or [LastName]-Private)
- Radio Band:                5 GHz (or Smart Connect Dual Band)
- Security Protocol:         WPA3-Personal (preferred) or WPA2/WPA3 Mixed (AES)
- Password:                  20+ characters (e.g., Sun$hine*Oak*Table*44)
- Assigned Devices:          Personal laptops, personal phones, family tablets, printers

[SSID 2: WORK FROM HOME] (If router supports 3 SSIDs or VLANs)
- Network Name (SSID):       Home-Office-Work
- Security Protocol:         WPA3-Personal or WPA2-AES
- Assigned Devices:          Employer laptops, work smartphones, corporate VPN gear
- Note:                      Keeps corporate telemetry and work scanning separate

[SSID 3: GUEST & SMART IOT DEVICES] (Crucial Isolation Layer)
- Network Name (SSID):       Home-Guest-IoT (or [LastName]-Guests)
- Radio Band:                2.4 GHz & 5 GHz
- Security Protocol:         WPA2-PSK (AES) (Provides maximum compatibility with IoT)
- AP / Client Isolation:     ENABLED / ON  <-- CRITICAL SETTING
  * Effect:                  Prevents smart TVs/bulbs from scanning or reaching your PC
- Local Intranet Access:     DISABLED / OFF (Block access to router admin & LAN)
- Assigned Devices:          Smart TVs, Alexa/Google Home, Ring/Blink, robot vacs, guests

3. CORE FIREWALL & NETWORK CONTROLS
--------------------------------------------------------------------------------
- WPS (Wi-Fi Protected Setup): DISABLED / OFF (Eliminates 8-digit PIN brute-force flaw)
- UPnP (Universal Plug & Play):DISABLED / OFF (Prevents rogue port-forwarding)
- WAN Ping Response:          DISABLED / OFF (Makes router invisible to internet scans)

4. FAMILY & ANTI-MALWARE DNS CONFIGURATION
--------------------------------------------------------------------------------
Navigate to: Internet Settings / WAN -> DNS -> Manual Assignment
Choose ONE of the following:

Option A: Cloudflare for Families (Malware & Scam Protection)
- Primary DNS (IPv4):        1.1.1.2
- Secondary DNS (IPv4):      1.0.0.2

Option B: Cloudflare for Families (Malware + Adult Content Filter)
- Primary DNS (IPv4):        1.1.1.3
- Secondary DNS (IPv4):      1.0.0.3

Option C: Quad9 Threat Intelligence (Strict Cyber Shield)
- Primary DNS (IPv4):        9.9.9.9
- Secondary DNS (IPv4):      149.112.112.112
================================================================================`
        },
        {
          title: "Offline Family Emergency Master Key Worksheet",
          description: "Print this worksheet, fill it out by hand with ink, and store it securely in a fireproof safe.",
          content: `================================================================================
       OFFLINE FAMILY EMERGENCY MASTER KEY WORKSHEET — CONFIDENTIAL
    Print this sheet. Fill out by hand in ink. Store in a fireproof home safe.
        NEVER photograph this document or store it in your phone notes.
================================================================================
Last Updated Date: _____________________    Authorized Family Custodian: _____________________

1. HOME INTERNET SERVICE PROVIDER (ISP)
--------------------------------------------------------------------------------
Provider Name:               ____________________________________________________
Account Number:              ____________________________________________________
Account Primary Name:        ____________________________________________________
Customer Support Phone:      ____________________________________________________
Account Security PIN/Pass:   ____________________________________________________
Modem / Gateway Model:       ____________________________________________________

2. HOME ROUTER & WI-FI VAULT
--------------------------------------------------------------------------------
Router Brand & Model:        ____________________________________________________
Admin Login URL / IP:        http://192.168.______.______
Router Admin Username:       ____________________________________________________
Router Admin Password:       ____________________________________________________
Primary Wi-Fi Name (SSID):   ____________________________________________________
Primary Wi-Fi Password:      ____________________________________________________
Guest/IoT Wi-Fi Name (SSID): ____________________________________________________
Guest/IoT Wi-Fi Password:    ____________________________________________________

3. CROWN-JEWEL PRIMARY EMAIL ACCOUNTS (The Master Keys)
--------------------------------------------------------------------------------
Account 1 (Owner Name):      ____________________________________________________
Email Address:               ____________________________________________________
Password Manager Hint:       ____________________________________________________
2FA Method:                  [ ] Authenticator App   [ ] Hardware Key   [ ] SMS
Emergency Backup Codes:
  Code 1: __________________   Code 2: __________________   Code 3: __________________
  Code 4: __________________   Code 5: __________________   Code 6: __________________

Account 2 (Owner Name):      ____________________________________________________
Email Address:               ____________________________________________________
Password Manager Hint:       ____________________________________________________
2FA Method:                  [ ] Authenticator App   [ ] Hardware Key   [ ] SMS
Emergency Backup Codes:
  Code 1: __________________   Code 2: __________________   Code 3: __________________
  Code 4: __________________   Code 5: __________________   Code 6: __________________

4. MASTER PASSWORD MANAGER VAULT
--------------------------------------------------------------------------------
Password Manager Provider:   [ ] 1Password   [ ] Bitwarden   [ ] Apple   [ ] Other: _______
Account Login Email:         ____________________________________________________
Emergency Access Contact:    ____________________________________________________
Secret Key / Recovery Kit ID:____________________________________________________
Master Password Safe Hint:   ____________________________________________________

5. PHYSICAL DEVICES & FULL-DISK ENCRYPTION KEYS
--------------------------------------------------------------------------------
Device 1 (e.g. Dell Laptop): ____________________  User: _______________________________
Device PIN / Password:       ____________________
BitLocker Recovery Key (48 digits):
[ ____-____-____-____-____-____-____-____-____-____-____-____ ]

Device 2 (e.g. MacBook Pro): ____________________  User: _______________________________
Device PIN / Password:       ____________________
FileVault Recovery Key:      ____________________________________________________

6. OFFLINE BACKUP DRIVES & SECURE VAULT
--------------------------------------------------------------------------------
External Drive 1 Label:      ____________________________________________________
Physical Location:           ____________________________________________________
Backup Encryption Password:  ____________________________________________________
Cloud Backup Provider:       ____________________  Account Email: _______________________

7. EMERGENCY SUCCESSION INSTRUCTIONS
--------------------------------------------------------------------------------
In the event of medical emergency, incapacitation, or natural disaster:
1. Deliver this sealed physical envelope to the designated emergency contact:
   Name: __________________________________  Phone: ___________________________________
2. Access the primary email accounts first to preserve digital family assets.
3. Review and update this sheet annually every October (Cybersecurity Awareness Month).
================================================================================`
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
          description: "Agree upon these safe words with your children, parents, and grandchildren. Store strictly offline.",
          content: `================================================================================
              FAMILY DIGITAL INTEGRITY & SAFE WORD AGREEMENT
================================================================================

1. PURPOSE & PRINCIPLE
This agreement establishes an unbreakable offline verification protocol for our family.
Because artificial intelligence can replicate human voices and faces within seconds,
we agree that audio, video, and text messages can NO LONGER serve as proof of identity 
during an emergency or financial request. 

2. OUR FAMILY CHALLENGE-RESPONSE PAIR
The "Challenge" is the question asked by the receiver of the call.
The "Response" is the secret, memorable phrase that ONLY the genuine family member knows.

  • CHALLENGE QUESTION : _______________________________________________________
    (Example: "What was the name of the yellow tractor on grandpa's farm?")

  • VERIFIED RESPONSE  : _______________________________________________________
    (Example: "Barnyard Bumblebee 1984")

  • SECONDARY BACKUP   : _______________________________________________________
    (Used only if the primary response cannot be remembered)

3. GOLDEN RULES OF THE SAFE WORD
  [✓] RULE 1 - ABSOLUTE SECRECY: Never speak the safe word in public, text it, 
      email it, or save it on a computer or cloud drive.
  [✓] RULE 2 - MANDATORY USE: Any request for money, bail, gift cards, emergency travel, 
      or changing routine travel plans REQUIRES the safe word without exception.
  [✓] RULE 3 - NO EMOTIONAL EXCEPTIONS: Even if the caller is sobbing, screaming, 
      or claims they are under arrest, if they cannot produce the exact response, 
      the call MUST be terminated immediately.
  [✓] RULE 4 - ZERO RETALIATION: If a family member hangs up on a real emergency 
      because the safe word was not produced, they will NOT be punished or blamed. 
      Protocol over panic, every single time.
  [✓] RULE 5 - ANNUAL RENEWAL: We review and change our safe word every year on:
      Date of Next Review: ____________________

4. FAMILY ROSTER & EMERGENCY CALLBACK NUMBERS (Verified Numbers Only)
  Name: ____________________ | Direct Cell: ____________________ | Work/School: ____________________
  Name: ____________________ | Direct Cell: ____________________ | Work/School: ____________________
  Name: ____________________ | Direct Cell: ____________________ | Work/School: ____________________
  Trusted Neighbor / Third-Party Contact: ____________________ Phone: ____________________

Signed & Agreed by all family members:
Signature 1: ____________________________ Date: ______________
Signature 2: ____________________________ Date: ______________
Signature 3: ____________________________ Date: ______________
Signature 4: ____________________________ Date: ______________
================================================================================`
        },
        {
          title: "Out-of-Band Callback Verification Protocol Card",
          description: "Print or screenshot this pocket card. Keep by the house phone, on the fridge, or in your wallet.",
          content: `┌────────────────────────────────────────────────────────────────────────┐
│             CYBERSECURITY JOE'S OUT-OF-BAND (OOB) VERIFICATION         │
│               "TRUST THE PROTOCOL — NEVER TRUST THE CALLER ID"         │
├────────────────────────────────────────────────────────────────────────┤
│ 1. THE HANG-UP REFLEX                                                  │
│    Caller ID is trivial to forge. The name on your screen means zero.  │
│    If money, gift cards, or emergency distress is mentioned:           │
│    SAY: "I am hanging up now to verify through our emergency channel." │
│    ACTION: End the call immediately.                                   │
│                                                                        │
│ 2. THE 10-SECOND AIR GAP                                               │
│    Some telephone carriers allow incoming callers to hold an open      │
│    line even after you hang up. Wait at least 10 SECONDS before lifting │
│    the handset or opening your dial pad.                               │
│                                                                        │
│ 3. OUT-OF-BAND DIALING (DIFFERENT PATH)                                │
│    NEVER press redial. NEVER use a phone number given by the caller.   │
│    Open your physical address book or stored phone contacts.           │
│    Dial their real, everyday number. If they don't answer, call their   │
│    office, school dean, spouse, or roommate.                           │
│                                                                        │
│ 4. THE THIRD-PARTY SAFETY NET                                          │
│    If the person cannot be reached, call your agreed Trusted Contact   │
│    (a neighbor, local relative, or family attorney) before initiating  │
│    ANY bank wire or financial transaction.                             │
│                                                                        │
│ EMERGENCY HOTLINE: FBI Internet Crime Complaint Center: IC3.gov        │
└────────────────────────────────────────────────────────────────────────┘`
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
          title: "The Attack Anatomy Matrix (Vulnerability vs Exploit vs Payload vs C2 vs Exfiltration)",
          description: "Clear definitions using the 'Locked House Analogy', real-world incident mapping, and defensive countermeasures.",
          content: `================================================================================
CYBERSECURITY JOE — ATTACK ANATOMY MATRIX (THE "LOCKED HOUSE" FRAMEWORK)
================================================================================

1. VULNERABILITY (The Flaw / Weakness)
• Analogy: An unlatched basement window or an old, rusty back-door lock.
• Technical Definition: A bug, flaw, or misconfiguration in software or hardware that can be abused.
• Real Incident: Microsoft SMBv1 Flaw (CVE-2017-0144) where Windows handled crafted network packets improperly.
• How Defenders Stop It: Rapid vulnerability scanning and automated 14-day patching cycles; disable unused legacy services.

2. EXPLOIT (The Weapon / Tool)
• Analogy: A custom lockpick or bent coat hanger specifically shaped to slip through that basement window.
• Technical Definition: A script, program, or data sequence engineered to take advantage of the vulnerability to gain unauthorized access.
• Real Incident: "EternalBlue" tool developed by nation-state actors targeting the SMBv1 vulnerability.
• How Defenders Stop It: Intrusion Prevention Systems (IPS) blocking exploit packet signatures; firewall port blocking (e.g., blocking port 445).

3. PAYLOAD (The Burglary Action)
• Analogy: The burglar climbing inside and unpacking spray paint, crowbars, or stolen toolkits.
• Technical Definition: The actual malicious code that executes on the victim machine (e.g., ransomware encryptor, keylogger, trojan).
• Real Incident: The "WannaCry" encryptor (.exe) that encrypted all user files (.docx, .pdf, .jpg) and demanded $300 in Bitcoin.
• How Defenders Stop It: Modern Endpoint Detection and Response (EDR) that detects behavioral anomalies like mass file renaming or unauthorized encryption.

4. COMMAND & CONTROL / C2 (The Communications Link)
• Analogy: The burglar's two-way walkie-talkie connecting back to the getaway car parked down the block for instructions.
• Technical Definition: An external server or channel (DNS, Discord, Telegram, HTTPS) used by attackers to maintain communication and control over infected hosts.
• Real Incident: Malware beacons checking in with attacker-controlled domain names or TOR hidden services to receive new operational commands.
• How Defenders Stop It: Protective DNS filtering (Quad9, Cloudflare), blocking outbound traffic to uncategorized/new domains, egress firewall rules.

5. EXFILTRATION (The Theft of Assets)
• Analogy: The burglar loading the family jewelry box, birth certificates, and silver into the getaway vehicle trunk.
• Technical Definition: The unauthorized extraction, transfer, or copying of sensitive data from the target network to an external cloud or attacker server.
• Real Incident: Double-extortion ransomware stealing 500 GB of confidential medical charts before encrypting the local systems.
• How Defenders Stop It: Data Loss Prevention (DLP), network egress rate-limiting, least-privilege database access, data encryption at rest.
================================================================================`
        },
        {
          title: "Classroom & Workshop Discussion Scenario Pack (5 Modern Breach Prompts)",
          description: "Five realistic, zero-jargon modern breach prompts with discussion questions and facilitator keys for workshops or classrooms.",
          content: `================================================================================
CYBERSECURITY JOE — CLASSROOM & WORKSHOP DISCUSSION SCENARIO PACK
================================================================================

SCENARIO 1: THE AI VOICE CLONE WIRE TRANSFER
• Narrative: Friday at 4:45 PM, a regional school district controller receives an urgent call from the district superintendent's voice demanding an immediate $48,000 wire to an escrow account to prevent the student portal from going dark on Monday morning.
• Key Discussion Questions:
  1. What is the immediate 60-second action the controller must take?
  2. Why did the attacker pick Friday afternoon right before closing?
  3. How does a dual-control payment policy defeat this attack regardless of how real the voice sounded?
• Facilitator Key: Scammers weaponize urgency and authority. Audio is no longer proof of identity. Out-of-band verification via internal extension + dual approval stops 100% of these attempts.

SCENARIO 2: THE SILENT OPEN-SOURCE SUPPLY CHAIN BACKDOOR
• Narrative: A clinic appointment scheduling system relies on a free utility library maintained by a lone European hobbyist. An unknown contributor was recently given maintainer rights and silently slipped credential-harvesting code into the latest release.
• Key Discussion Questions:
  1. How do you detect an attack if your standard antivirus reports 100% green checkmarks?
  2. Who is responsible: the developer, the volunteer, or the healthcare clinic?
  3. How would strict network egress filtering have neutralized this attack even with the bad code running?
• Facilitator Key: Modern apps rely on open source. Egress filtering (preventing web servers from initiating unauthorized outbound calls) stops malicious beacons dead in their tracks.

SCENARIO 3: THE RANSOMWARE DILEMMA AT COMMUNITY REGIONAL HOSPITAL
• Narrative: At 2:00 AM, hospital ICU monitors and patient charts are locked by ransomware demanding $2.5M in Bitcoin. Restoring offline backups will take 72 hours, forcing emergency surgeries to be rerouted 45 miles away.
• Key Discussion Questions:
  1. Do you pay the ransom? What are the ethical, legal, and operational consequences?
  2. How do clinicians continue emergency medical operations during a complete digital blackout?
  3. What network design flaw allows a receptionist's laptop to compromise ICU medical databases?
• Facilitator Key: Medical cyber safety is patient safety. Network segmentation (firewalling medical telemetry completely away from email networks) prevents lateral movement.

SCENARIO 4: THE SMART HOME CAMERA BLACKMAIL
• Narrative: A family's nursery Wi-Fi camera is accessed by a stranger who talks through the speaker and emails video clips of the home demanding $5,000 in gift cards.
• Key Discussion Questions:
  1. How did the hacker get in without ever hacking the home Wi-Fi? (Credential stuffing from an unrelated breach).
  2. What are the immediate digital and physical steps the parents should take?
  3. How does putting IoT gadgets on an isolated "Guest Wi-Fi" protect the rest of the household?
• Facilitator Key: 95% of IoT camera breaches are caused by password reuse. Unique passwords in a password manager + Multi-Factor Authentication (MFA) eliminate this threat.

SCENARIO 5: THE SHADOW AI PROMPT LEAK
• Narrative: An engineer at a financial tech company pastes 2,000 lines of proprietary code into a free public AI chatbot to fix a bug, inadvertently including live database passwords and customer banking records.
• Key Discussion Questions:
  1. Was this a "cyber attack" or an internal policy/governance failure?
  2. Why does outright banning AI tools often backfire into "Shadow AI"?
  3. What automated tools can strip API keys and confidential data before text leaves the employee's browser?
• Facilitator Key: Security must enable productivity safely. Enterprise-managed AI instances with strict zero-data-retention agreements and automated Data Loss Prevention (DLP) are required.
================================================================================`
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
          description: "Battle-tested bullet formulas translating customer service, military, retail, helpdesk, and healthcare into high-impact security operations language.",
          content: `================================================================================
CYBERSECURITY JOE — RESUME TRANSLATION MATRIX (NON-TECHNICAL TO CYBER)
================================================================================
[HIRING TRUTH: Managers value empathy, composure under fire, and strict protocol adherence. 
Use this matrix to re-engineer your real-world experience into cybersecurity metrics.]

1. CUSTOMER SERVICE & CALL CENTER -> SOC ANALYST / INCIDENT TRIAGE
• Everyday Task: Handled 60+ customer escalations, resolved billing disputes, authenticated callers.
• Cyber Translation:
  - "Conducted identity verification for 80+ customer requests daily, strictly enforcing multi-factor authentication protocols and preventing unauthorized account takeover attempts."
  - "Triaged and investigated 50+ anomalous account escalations daily under tight SLA response windows, documenting detailed root-cause summaries and escalating critical incidents."
  - "Identified emerging social engineering and phishing patterns across customer touchpoints, collaborating with security leads to update authentication playbooks."

2. MILITARY VETERAN (INFANTRY, LOGISTICS, OPERATIONS) -> SOC WATCH / PHYSICAL SECURITY / RISK
• Everyday Task: Guard duty, perimeter patrols, inventory accountability, briefing commanders.
• Cyber Translation:
  - "Maintained continuous operational watch across mission-critical perimeters, ensuring 100% accountability of \$1.2M in sensitive assets with zero security breaches or policy violations."
  - "Authored, updated, and strictly enforced Standard Operating Procedures (SOPs) during high-stress operational conditions, ensuring full compliance with defense regulations."
  - "Conducted routine threat vulnerability assessments and briefed cross-functional leadership on actionable operational risk mitigations."

3. RETAIL STORE SUPERVISOR / CASHIER -> LOSS PREVENTION / ACCESS CONTROL (IAM) / FRAUD
• Everyday Task: Balancing registers, auditing cash drawers, monitoring for shoplifters, issuing keys.
• Cyber Translation:
  - "Administered physical and digital Access Control (IAM) protocols for 25+ store employees, enforcing least-privilege keycard permissions and maintaining zero unauthorized entries."
  - "Conducted weekly inventory loss audits and forensic transaction reviews, identifying anomalous shrinkage trends and reducing fraud losses by 22%."
  - "Trained and mentored 30+ team members on security awareness and physical defense protocols, fostering a proactive workplace security culture."

4. IT HELPDESK / DESKTOP SUPPORT -> ENDPOINT DEFENSE / VULNERABILITY REMEDIATION
• Everyday Task: Resetting passwords, re-imaging laptops, fixing printer drivers.
• Cyber Translation:
  - "Hardened and maintained 200+ enterprise Windows and macOS workstations, deploying critical OS patches and antimalware definitions within a strict 7-day maintenance window."
  - "Managed user identity lifecycles across Active Directory and Azure AD, provisioning role-based access control (RBAC) and immediately revoking credentials upon employee offboarding."
  - "Investigated endpoint threat alerts and suspicious email reports, executing prompt host isolation to prevent potential lateral malware movement."

5. HEALTHCARE & MEDICAL ADMINISTRATION -> PRIVACY (HIPAA) & COMPLIANCE AUDITING
• Everyday Task: Protecting patient charts, complying with HIPAA laws, verifying doctor orders.
• Cyber Translation:
  - "Enforced strict HIPAA and regulatory data privacy governance across Electronic Health Record (EHR) systems, safeguarding sensitive Protected Health Information (PHI) for 5,000+ patients."
  - "Conducted monthly access permission audits to eliminate role creep and unauthorized chart access, achieving a 100% audit pass rate during state regulatory inspections."
  - "Spearheaded peer-level phishing awareness training across clinical staff, cutting suspicious link clicks by 45% across hospital departments."
================================================================================`
        },
        {
          title: "The $0 Free Virtual Home Lab Architecture & Build Guide",
          description: "Step-by-step blueprint to build an isolated enterprise network with pfSense, Ubuntu Server, and Kali Linux on Oracle VirtualBox.",
          content: `================================================================================
CYBERSECURITY JOE — $0 FREE VIRTUAL HOME LAB ARCHITECTURE GUIDE
================================================================================

1. LAB TOPOLOGY OVERVIEW
[Host PC / Mac] (Internet)
       │
       ▼
[pfSense Virtual Firewall]
  • WAN Adapter: NAT (Accesses Internet for updates)
  • LAN Adapter: Internal Network ("intnet-lab") -> Gateway IP: 10.0.50.1
       │
       ├─────────────────────────────────────────┐
       ▼                                         ▼
[Ubuntu Server 24.04 LTS]                 [Audit Client: Kali Linux or Lubuntu]
  • IP: 10.0.50.10 (Static DHCP)           • IP: 10.0.50.20 (DHCP)
  • Role: Production Web Server            • Role: Security Analyst Workstation
  • Runs: Nginx, UFW Firewall, SSH          • Runs: Wireshark, Nmap, Curl

2. REQUIRED FREE SOFTWARE (100% Free / Open Source)
• Hypervisor: Oracle VirtualBox 7.x (virtualbox.org)
• Firewall: pfSense Community Edition 2.7.x ISO (pfsense.org)
• Target Server: Ubuntu Server 24.04 LTS ISO (ubuntu.com)
• Analyst Client: Kali Linux or Lubuntu 24.04 Desktop ISO

3. STEP-BY-STEP SETUP SEQUENCE
[STEP 1: Create Isolated Network in VirtualBox]
- Open VirtualBox -> Preferences / Network -> Create Internal Network named "intnet-lab".
- This isolates your lab completely so no virtual experiments touch your home Wi-Fi.

[STEP 2: Deploy pfSense Firewall]
- Create VM: 1 Core CPU, 1024 MB RAM, 10 GB Disk.
- Network Adapter 1: Attached to "NAT" (WAN).
- Network Adapter 2: Attached to "Internal Network", Name: "intnet-lab" (LAN).
- Complete installation. Set LAN IP address to 10.0.50.1/24. Enable DHCP service.

[STEP 3: Deploy Ubuntu Server Target]
- Create VM: 1 Core CPU, 2048 MB RAM, 20 GB Disk.
- Network Adapter 1: Attached to "Internal Network", Name: "intnet-lab".
- Boot and install Ubuntu Server. It will automatically receive an IP (e.g., 10.0.50.10).
- Run: sudo apt update && sudo apt install -y nginx ufw
- Enable UFW firewall: 
  sudo ufw default deny incoming
  sudo ufw allow 80/tcp
  sudo ufw allow 22/tcp
  sudo ufw enable

[STEP 4: Deploy Analyst Client]
- Create VM: 2 Cores CPU, 2048 MB RAM, 25 GB Disk.
- Network Adapter 1: Attached to "Internal Network", Name: "intnet-lab".
- Open browser inside client, browse to https://10.0.50.1 to manage pfSense (admin / pfsense).

4. FIRST HANDS-ON DETECTION EXPERIMENT
1. From Analyst Client, launch a stealth SYN scan against your server:
   nmap -sS -p 1-1000 10.0.50.10
2. In pfSense WebGUI, navigate to Status -> System Logs -> Firewall.
3. Observe and document the dropped packet logs for probed closed ports.
4. SSH into the Ubuntu server (ssh user@10.0.50.10) and monitor authorization logs:
   sudo tail -f /var/log/auth.log
5. Take a screenshot, document the findings in markdown, and push to your GitHub portfolio!
================================================================================`
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
          title: "Tenant-Wide Mandatory MFA on Google Workspace / M365",
          category: "Access Control",
          description: "Enforce organization-wide MFA with zero exceptions using authenticator apps or FIDO2 keys. Disable SMS text 2FA and turn off legacy IMAP/POP3 authentication protocols that bypass modern login challenges."
        },
        {
          id: "smb-2",
          title: "Dual-Control Wire Transfer & Payment Verification Standard",
          category: "Financial Defense",
          description: "Enforce a mandatory 'Two-Person Rule' for transactions over $1,000 and require verbal phone callbacks using a pre-existing trusted number on file before updating any vendor banking details or wire instructions."
        },
        {
          id: "smb-3",
          title: "Centralized Endpoint Protection (EDR) & Auto-Patching",
          category: "Endpoint Security",
          description: "Deploy managed behavioral endpoint protection (Microsoft Defender for Business, Huntress, or SentinelOne) across all employee devices and mandate automated OS/application patching within 72 hours."
        },
        {
          id: "smb-4",
          title: "Elimination of Local Administrator Privileges on Workstations",
          category: "Least Privilege",
          description: "Ensure all everyday staff and executive accounts are Standard Users. Create dedicated admin accounts strictly used when installing verified software, neutralizing over 85% of critical Windows exploits."
        },
        {
          id: "smb-5",
          title: "Immutable Cloud Backups with Version Retention & Air-Gap",
          category: "Business Continuity",
          description: "Deploy automated cloud backups with Object Lock/Immutability (30-90 day retention) so ransomware cannot delete or tamper with archives. Conduct quarterly restore drills to verify recovery."
        },
        {
          id: "smb-6",
          title: "Adopt a Plain-English One-Page Acceptable Use Policy",
          category: "Security Culture",
          description: "Replace 50-page legal manuals with an understandable one-page policy covering approved cloud software, company password managers, public Wi-Fi VPN rules, and prohibiting client data pastes into free AI chatbots."
        },
        {
          id: "smb-7",
          title: "1-Click Phishing Reporting & 'No-Blame' Incident Culture",
          category: "Human Sensor Network",
          description: "Install a native 1-click phishing report button in Outlook/Gmail and establish a company-wide promise: employees who report accidental clicks within 15 minutes face zero disciplinary action."
        },
        {
          id: "smb-8",
          title: "Distribute the 5-Minute Incident Response Card",
          category: "Incident Response",
          description: "Equip leadership and accounting desks with laminated emergency action cards detailing immediate device isolation, bank wire recall hotlines, and cyber insurance contact procedures."
        }
      ],
      templates: [
        {
          title: "One-Page Employee Acceptable Use Policy (Plain English)",
          description: "Ready-to-use, zero-jargon employee agreement ready to adapt for company handbooks and onboarding.",
          content: `================================================================================
          [COMPANY NAME] — EMPLOYEE ACCEPTABLE USE POLICY (AUP)
               Plain English Security Standards for All Team Members
================================================================================
Effective Date: _____________________    Version: 2026.1    Review Date: Annual

1. OUR PHILOSOPHY
We trust our team. We believe cybersecurity is a shared responsibility that
protects our livelihoods, our colleagues, and the confidential trust of our
clients. These standards keep our company safe without getting in the way of
your work.

2. COMPANY EQUIPMENT & ACCOUNTS
- Work computers, phones, and email accounts are provided for business operations.
- Incidental, reasonable personal use (e.g., checking personal email, news, or
  banking during lunch breaks) is acceptable, provided it does not compromise
  security or violate workplace policies.
- You should have no expectation of privacy on company-owned systems. The company
  reserves the right to inspect, monitor, or remotely wipe company devices if lost.

3. PASSWORDS & MULTI-FACTOR AUTHENTICATION (MFA)
- Every employee must use the company-provided Password Manager to generate and
  store unique, strong passwords (minimum 16 characters) for every service.
- Reusing your company password for personal websites (or vice versa) is strictly
  prohibited.
- MFA (authenticator app or hardware key) is mandatory on all company accounts.
  Never approve an MFA prompt or push notification you did not personally trigger.

4. CLIENT CONFIDENTIALITY & DATA PROTECTION
- Company and client confidential data must stay within approved company storage
  (Google Drive, Microsoft 365, or company CRM).
- Never export or forward confidential files to personal email accounts.
- Never download sensitive client records onto personal, unencrypted USB thumb drives.

5. APPROVED SOFTWARE & ARTIFICIAL INTELLIGENCE (AI) TOOLS
- Only software approved by IT / Management may be installed on company computers.
- AI Usage Guideline: When using public generative AI tools (such as free ChatGPT,
  Claude, or Gemini), NEVER input non-public client data, trade secrets, customer
  names, financial spreadsheets, or proprietary source code. Use only company-
  licensed enterprise AI instances with strict data privacy guarantees.

6. SECURE REMOTE WORK & PUBLIC WI-FI
- When working from coffee shops, airports, or hotels, always connect via the
  company Virtual Private Network (VPN) or use your phone's cellular hotspot.
- Never leave laptops unattended in public spaces or visible inside a parked car.
- Always lock your computer screen (Windows Key + L, or Mac Ctrl + Cmd + Q)
  whenever you step away from your desk.

7. FINANCIAL TRANSACTIONS & THE "CALL BACK" RULE
- Never initiate a wire transfer, ACH payment, or vendor banking change based
  solely on an email request—even if it appears to come from the CEO or a known vendor.
- You MUST verify all payment detail changes with a direct phone call using a pre-
  established, verified phone number from our master vendor records.

8. THE ZERO-FAULT REPORTING PROMISE
- Speed matters more than perfection. If you click a suspicious link, enter your
  credentials on an unfamiliar page, or lose a device, REPORT IT IMMEDIATELY
  to the Security Lead.
- As long as you report an honest mistake promptly, you will NOT face disciplinary
  action. Speaking up makes you a company defender.

--------------------------------------------------------------------------------
EMPLOYEE ACKNOWLEDGMENT:
I have read, understood, and agree to uphold this Acceptable Use Policy.

Employee Full Name:     _______________________________________________________
Job Title:              _______________________________________________________
Signature:              __________________________________   Date: ____________
================================================================================`
        },
        {
          title: "5-Minute Business Email Compromise (BEC) Incident Response Playbook",
          description: "Emergency action plan covering immediate containment, bank wire recall, and forensic preservation.",
          content: `================================================================================
       5-MINUTE BUSINESS EMAIL COMPROMISE (BEC) EMERGENCY PLAYBOOK
               Immediate Action Plan for Wire Fraud & Mailbox Hijacks
================================================================================
IF YOU SUSPECT A COMPROMISED EMAIL ACCOUNT OR AN UNAUTHORIZED WIRE TRANSFER:
DO NOT PANIC. EXECUTE THE ACTIONS BELOW IN SEQUENCE. TIME IS OF THE ESSENCE.
================================================================================

[MINUTE 0 TO 2] — IMMEDIATE ACCOUNT & DEVICE CONTAINMENT
--------------------------------------------------------------------------------
STEP 1: ISOLATE THE DEVICE (DO NOT SHUT DOWN)
- Unplug the network Ethernet cable from the affected computer, or toggle Wi-Fi OFF.
- DO NOT turn off or reboot the computer (shutting down destroys active RAM memory
  evidence needed for forensic analysis and insurance claims).

STEP 2: TERMINATE SESSIONS & RESET CREDENTIALS (FROM A CLEAN DEVICE)
- From a secondary, known-clean computer or mobile phone:
  * Google Workspace: Admin Console -> Users -> Select User -> Security ->
    Click "Sign out of all sessions" -> Reset Password -> Re-generate 2FA keys.
  * Microsoft 365: Microsoft Entra / Admin Center -> Users -> Select User ->
    Click "Revoke Sessions" -> Reset Password -> Require MFA re-registration.

STEP 3: AUDIT & DELETE MALICIOUS FORWARDING RULES
- Hackers almost always configure hidden forwarding rules to steal replies:
  * Check Outlook / OWA: Mail Settings -> Rules -> Delete any rule forwarding to
    external addresses or moving incoming emails to "RSS Subscriptions" or "Trash".
  * Check Google Workspace: Gmail Settings -> Forwarding and POP/IMAP -> Delete
    unauthorized forwarding addresses.

[MINUTE 2 TO 5] — FINANCIAL FREEZE & OUT-OF-BAND EMERGENCY RECALL
--------------------------------------------------------------------------------
*** IF ANY FUNDS WERE TRANSFERRED OR FRAUDULENT INVOICES SENT ***

STEP 4: TRIGGER THE 72-HOUR BANK WIRE RECALL
- Call your originating bank's Emergency Fraud Hotline immediately:
  Bank Fraud Department Phone: _________________________________________________
  Wire Reference / Transaction ID: _____________________________________________
- State clearly to the fraud representative:
  "I am reporting an active fraudulent wire transfer resulting from Business Email
   Compromise. I am requesting an immediate SWIFT / Fedwire recall and an urgent
   hold on the beneficiary account."
- Request the bank’s Fraud Analyst name and the Wire Recall Confirmation Number.

STEP 5: ACTIVATE THE FBI FINANCIAL FRAUD KILL CHAIN (FFKC)
- If the wire transfer originated in the U.S. or involved international routing:
  * Visit: https://www.ic3.gov (FBI Internet Crime Complaint Center)
  * File an emergency complaint within 72 hours if the transfer was $50,000 or greater.
  * Contact your local FBI Field Office Cyber Squad: ____________________________
  * The FBI can collaborate with the Financial Crimes Enforcement Network (FinCEN)
    to freeze funds at the destination bank before withdrawal.

[MINUTE 5 TO 15] — TRIAGE & OUT-OF-BAND COMMUNICATION
--------------------------------------------------------------------------------
STEP 6: ISSUE AN OUT-OF-BAND VENDOR & CLIENT WARNING
- If the compromised mailbox was used to send fake payment instructions to clients:
  * Pick up the phone and call the affected clients immediately.
  * DO NOT reply to the existing email thread (the hacker may still be watching).
  * Direct all clients: "Disregard any payment changes or invoice instructions
    received from [Email] today. Our verified account details have NOT changed."

STEP 7: NOTIFY CYBER INSURANCE & LEGAL COUNSEL
- Cyber Insurance Carrier:    __________________________________________________
- Policy Number:             __________________________________________________
- 24/7 Breach Claims Hotline: __________________________________________________
- Legal / Privacy Counsel:   __________________________________________________
- NOTE: Most cyber insurance policies require formal notification within 24 hours
  and will provide free forensic investigation teams and legal breach coaches.

[POST-INCIDENT REMEDIATION CHECKLIST]
--------------------------------------------------------------------------------
[ ] Check OAuth Application Permissions: Revoke any third-party apps granted
    access to the mailbox in the last 30 days.
[ ] Check Mailbox Delegation: Ensure the attacker did not add unauthorized users
    with "Send As" or "Full Access" permissions.
[ ] Preserve Audit Logs: Export Unified Audit Logs (UAL) or Google Workspace Admin
    Audit Logs to a secure, external storage location.
[ ] Conduct a post-incident review and reinforce the Dual-Control Phone Callback
    procedure across the entire finance and executive team.
================================================================================`
        }
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CS_RESOURCES_DATA };
}

/**
 * CYBERSECURITY JOE — Cyber History & Incident Timeline Data
 * Chronicles pivotal milestones from ARPANET to modern AI cyber warfare.
 */

const CS_HISTORY_DATA = [
  {
    year: "1969",
    era: "dawn",
    title: "The Birth of ARPANET & First Transmission",
    category: "Network Milestone",
    badge: "Origin Point",
    summary: "At 10:30 PM on October 29, 1969, researchers at UCLA attempted to send the word 'LOGIN' to Stanford. The system crashed after typing 'L-O', marking the humble dawn of the connected world.",
    impact: "Established the packet-switching architecture that would evolve into the global Internet.",
    takeaway: "The original network was built purely on trust among academic researchers, creating the architecture we still defend today."
  },
  {
    year: "1971",
    era: "dawn",
    title: "Creeper & Reaper: The First Computer Worm",
    category: "Malware & Antivirus",
    badge: "First Malware",
    summary: "Bob Thomas created 'Creeper' to test if a program could hop across TENEX mainframes, printing: 'I'M THE CREEPER: CATCH ME IF YOU CAN'. Ray Tomlinson soon created 'Reaper' to track it down and delete it.",
    impact: "Created both the concept of self-propagating software and the world's first antivirus software.",
    takeaway: "Security has always been an evolutionary arms race between offensive curiosity and defensive response."
  },
  {
    year: "1988",
    era: "dawn",
    title: "The Morris Worm Shuts Down 10% of the Internet",
    category: "Pivotal Incident",
    badge: "Watershed Moment",
    summary: "Graduate student Robert Tappan Morris launched 99 lines of code to gauge the size of ARPANET. A replication flaw caused thousands of Unix mainframes to freeze, crashing an estimated 6,000 machines.",
    impact: "Led to the creation of CERT (Computer Emergency Response Team) and the first conviction under the Computer Fraud and Abuse Act.",
    takeaway: "Unintended consequences in code can cause global infrastructure disruption."
  },
  {
    year: "1993",
    era: "web",
    title: "DEF CON 1 & The Hacker Community",
    category: "Culture & Community",
    badge: "Community",
    summary: "Jeff Moss founded DEF CON in Las Vegas as a small farewell party for a BBS network. It quickly transformed into the world's most influential and iconic underground cybersecurity conference.",
    impact: "Brought offensive research and vulnerability disclosure into mainstream industry awareness.",
    takeaway: "White-hat security researchers are essential guardians of global digital safety."
  },
  {
    year: "1999",
    era: "web",
    title: "Melissa Virus: The Email Automation Threat",
    category: "Social Engineering",
    badge: "Mass Outbreak",
    summary: "The Melissa macro virus spread through Microsoft Word documents via Microsoft Outlook, emailing itself to the first 50 contacts in every victim's address book and overwhelming global email servers.",
    impact: "Forced Microsoft and email providers to overhaul default macro execution and file inspection.",
    takeaway: "Human trust and contact lists remain the primary vector for social engineering."
  },
  {
    year: "2000",
    era: "web",
    title: "Mafiaboy & The Dawn of Massive DDoS",
    category: "Denial of Service",
    badge: "Infrastructure",
    summary: "A 15-year-old Canadian teenager using the alias 'Mafiaboy' launched coordinated denial-of-service attacks that knocked Yahoo, Amazon, Dell, E*TRADE, and eBay offline for hours.",
    impact: "Demonstrated to global stock markets that digital availability is directly tied to financial solvency.",
    takeaway: "Even the largest web giants require dedicated traffic filtering and redundancy."
  },
  {
    year: "2010",
    era: "nation",
    title: "Stuxnet: The Physical Destruction of Centrifuges",
    category: "State-Sponsored",
    badge: "Physical Impact",
    summary: "A hyper-complex, multi-zero-day worm targeted Siemens industrial control systems at the Natanz uranium enrichment facility in Iran, physically spinning centrifuges until they broke while falsifying monitor dials.",
    impact: "Officially inaugurated the era of cyber weapons causing real-world kinetic destruction.",
    takeaway: "Air-gapped and industrial systems are vulnerable without rigorous physical and supply-chain controls."
  },
  {
    year: "2013",
    era: "nation",
    title: "The Target Breach & HVAC Vendor Vulnerability",
    category: "Supply Chain",
    badge: "Data Breach",
    summary: "Attackers stole 40 million credit card numbers and 70 million customer records by compromising the credentials of a third-party heating and air conditioning (HVAC) contractor.",
    impact: "Proved that an enterprise is only as secure as its weakest external third-party vendor.",
    takeaway: "Third-party risk management and network segmentation are crucial for all organizations."
  },
  {
    year: "2017",
    era: "nation",
    title: "WannaCry & NotPetya Ransomware Pandemics",
    category: "Ransomware Pandemic",
    badge: "Global Crisis",
    summary: "Using the EternalBlue exploit leaked from NSA tools, WannaCry infected over 200,000 computers in 150 countries within hours, halting surgeries across the UK National Health Service (NHS) and shutting global ports.",
    impact: "Caused over $10 billion in global damage and positioned ransomware as a matter of national security.",
    takeaway: "Unpatched operating systems and lack of offline backups are fatal to modern institutions."
  },
  {
    year: "2020",
    era: "cloud",
    title: "SolarWinds Orion: Silent Supply Chain Espionage",
    category: "Software Supply Chain",
    badge: "Stealth Espionage",
    summary: "Sophisticated state actors inserted backdoors directly into routine software updates from SolarWinds, granting undetected access into the US Treasury, Pentagon, Homeland Security, and top tech companies.",
    impact: "Transformed global software development toward cryptographic code-signing and Software Bills of Materials (SBOMs).",
    takeaway: "Trust in trusted updates must be verified with cryptographic provenance."
  },
  {
    year: "2024",
    era: "ai",
    title: "The Rise of Autonomous AI Phishing & Voice Cloning",
    category: "AI Threats & Defenses",
    badge: "Modern AI Era",
    summary: "Generative AI models lowered the barrier for multilingual spear-phishing, real-time voice mimicry in financial fraud, and rapid automated vulnerability scanning.",
    impact: "Accelerated the universal adoption of FIDO2 Passkeys, hardware security keys, and human verification protocols.",
    takeaway: "When digital audio and video can be simulated, human out-of-band verification and calm protocols win every time."
  },
  {
    year: "2026",
    era: "ai",
    title: "The Zero-Trust Post-Quantum Frontier",
    category: "Future Defense",
    badge: "Present & Future",
    summary: "Organizations begin transitioning encryption to NIST post-quantum cryptographic standards while implementing continuous zero-trust authentication across human and AI agents.",
    impact: "Ensures the privacy of financial, defense, and healthcare data against quantum decryption.",
    takeaway: "Cybersecurity is never a static destination; it is an ongoing practice of resilience and human empowerment."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CS_HISTORY_DATA };
}

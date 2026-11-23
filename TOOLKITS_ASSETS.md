# CYBERSECURITY JOE — TOOLKIT ASSETS SPECIFICATION
**Author:** CyberSecurity Joe (Senior Cybersecurity Specialist & Technical Writer)  
**Target:** Website Resource Catalog, Interactive Detail Pages & Standalone Downloads  
**Standards:** NIST CSF 2.0 (Govern, Identify, Protect, Detect, Respond, Recover), CIS Critical Security Controls v8, Zero-Trust Architecture  
**Language:** Zero-Jargon Plain English, Action-Oriented, Human-Centered  

---

# ITEM 1: Everyday Household Digital Defense Blueprint

## 1. Overview & Positioning
- **Title:** Everyday Household Digital Defense Blueprint
- **Slug:** `everyday-household-digital-defense-blueprint`
- **Target Audience:** Families, non-technical homeowners, remote workers, parents, and seniors.
- **Core Philosophy:** "You don't need a degree in computer engineering to protect your home. You just need to close the front door, lock the windows, and stop leaving your house keys under the doormat."
- **Key Metric:** Eliminates over 98% of common household cyber threats (unauthorized camera access, drive-by malware, credential stuffing, and Wi-Fi piggybacking) in under 60 minutes of setup.

---

## 2. The 8-Point Interactive Checklist

### Point 1: Router Admin Hardening
- **Title:** Lock Your Router’s Front Door
- **Why It Matters:** Every home Wi-Fi box comes with a factory username and password (usually printed on a sticker or set to `admin`/`admin` or `admin`/`password`). Hackers and botnets scan the internet non-stop looking for homes that never changed this default lock.
- **Action Steps:**
  1. Open a browser and type `192.168.1.1` or `192.168.0.1` into the address bar to open your router dashboard.
  2. Log in using the default credentials printed on the router sticker.
  3. Navigate to **Administration** or **System Settings** and change the admin password to a unique 16+ character passphrase (e.g., `Copper*River*Pancake*94!`).
  4. Find **Remote Management / WAN Access** and set it to **OFF / Disabled**. This ensures nobody outside your physical house can access your router's login page.
  5. Click **Check for Firmware Updates** and turn on **Automatic Updates** if available.
- **Time Required:** 7 Minutes
- **Verification Test:** Try opening your router login page from your phone with Wi-Fi turned off (using cellular data) — it should fail to connect.

---

### Point 2: 3-Network Wi-Fi Segmentation (Home / Work / IoT)
- **Title:** Put Your Smart Gadgets on Their Own Island
- **Why It Matters:** A cheap $25 smart light bulb, baby monitor, or robot vacuum has minimal built-in security. If a hacker exploits a bug in that smart bulb, they can jump across the network to steal tax documents or bank passwords from your personal laptop.
- **The 3-Network Rule:**
  - **Network 1: Primary Family Network (`Home-Private`):** For family laptops, smartphones, and personal tablets where banking and personal email occur.
  - **Network 2: Home Office Network (`Home-Work`):** For work-provided employer laptops and confidential work devices.
  - **Network 3: Guest & Smart Device Network (`Home-IoT-Guest`):** For smart TVs, gaming consoles, smart plugs, cameras, robot vacuums, and house guests.
- **Action Steps:**
  1. In your router dashboard, find the **Guest Network** or **VLAN / Multi-SSID** menu.
  2. Enable the Guest Network on both 2.4 GHz and 5 GHz bands.
  3. Set the name to `[YourFamilyName]-Guest-IoT`.
  4. Set security to **WPA2/WPA3-Personal (AES)** with a strong password.
  5. Check the box labeled **Client Isolation** or **AP Isolation** (this prevents devices on this network from talking to each other or to your primary network).
  6. Reconnect your smart TVs, smart speakers, video doorbells, and visitors to this network.
- **Time Required:** 15 Minutes
- **Verification Test:** Connect your phone to the Guest-IoT network and try to ping or connect to your home printer or main computer; the connection should be blocked.

---

### Point 3: Router-Level DNS Filtering
- **Title:** Install a Protective Shield on Your Internet Address Book
- **Why It Matters:** DNS (Domain Name System) is like the phonebook of the internet. Every time you or a device visits a website, your router asks a DNS server where to go. By default, your Internet Provider monitors this and provides zero scam protection. A secure DNS filter blocks malicious phishing sites, malware servers, and malware downloads before they ever reach your computer.
- **Action Steps:**
  1. Log into your router dashboard and navigate to **Internet / WAN Settings** > **DNS Server**.
  2. Switch from "Automatic / ISP Assigned" to **Manual / Custom**.
  3. Enter one of the following trusted, free protective DNS addresses:
     - **Cloudflare for Families (Malware & Phishing Blocking):**
       - Primary IPv4: `1.1.1.2`
       - Secondary IPv4: `1.0.0.2`
     - **Cloudflare for Families (Malware + Adult Content Blocking for Kids):**
       - Primary IPv4: `1.1.1.3`
       - Secondary IPv4: `1.0.0.3`
     - **Quad9 Security (Global Threat Intelligence Shield):**
       - Primary IPv4: `9.9.9.9`
       - Secondary IPv4: `149.112.112.112`
  4. Save and reboot your router.
- **Time Required:** 5 Minutes
- **Verification Test:** Visit `https://one.one.one.one/help` or `https://test.quad9.net` to verify your DNS queries are securely filtered.

---

### Point 4: Smart Device Lockdown
- **Title:** Close the Backdoors on Smart Speakers and Cameras
- **Why It Matters:** Many smart gadgets attempt to puncture holes in your router's firewall using a feature called UPnP (Universal Plug and Play), letting outside devices establish direct connections to your home hardware without your knowledge.
- **Action Steps:**
  1. In router settings, navigate to **Advanced / NAT / Port Forwarding** > find **UPnP (Universal Plug and Play)** and toggle it to **OFF / Disabled**.
  2. For smart speakers and indoor cameras (Ring, Blink, Nest, Alexa):
     - Open their respective mobile apps, go to **Settings > Security**, and enable Multi-Factor Authentication.
     - Turn off optional cloud telemetry: Disable "Help improve product by sharing voice recordings".
     - Physically mute or use lens privacy sliders on bedroom and office cameras when not in active use.
  3. Change the default password in any standalone security camera or network drive (NAS) companion app.
- **Time Required:** 10 Minutes
- **Verification Test:** In your router dashboard, look under "Port Forwarding" or "UPnP Active Port Map" — the table should be completely empty.

---

### Point 5: Multi-Factor Authentication (MFA) on Crown-Jewel Accounts
- **Title:** Turn Single Passwords Into Double-Bolted Doors
- **Why It Matters:** Over 80% of data breaches involve stolen, guessed, or reused passwords. MFA requires a secondary proof of identity so that even if a cybercriminal buys your password on the dark web, they cannot break in.
- **Action Steps:**
  1. Download a reliable authenticator app on your smartphone (such as **2FAS**, **Google Authenticator**, **Microsoft Authenticator**, or use **Apple Keychain / 1Password**).
  2. Prioritize your **Four Crown-Jewel Accounts**:
     - **Primary Email Account** (Google, Outlook, iCloud) — because whoever owns your email can reset all your other passwords.
     - **Financial & Banking Accounts** (Checking, credit cards, brokerage).
     - **Password Manager** (1Password, Bitwarden, Apple Keychain).
     - **Primary Phone Carrier** (Verizon, AT&T, T-Mobile — set an account PIN to stop SIM-swap theft).
  3. In each account's security settings, select **Two-Factor Authentication > Authenticator App**. Scan the QR code.
  4. Save the provided one-time backup recovery codes into your Offline Master Key Worksheet.
  5. Avoid SMS/Text codes whenever an app-based authenticator or hardware passkey is offered.
- **Time Required:** 12 Minutes
- **Verification Test:** Open an Incognito/Private browser window and log into your primary email; verify that it demands the 6-digit code or prompt before letting you in.

---

### Point 6: Automatic Operating System & Browser Updates
- **Title:** Put Security Patches on Autopilot
- **Why It Matters:** Hackers rarely invent new exploits for home users. They scan for known security flaws that software makers have already fixed weeks or months ago. Delaying updates is like leaving a broken lock on your door because you haven't scheduled time to fix it.
- **Action Steps:**
  1. **Windows Laptops:** Go to `Settings > Windows Update > Advanced options`. Enable "Get me up to date" and set Active Hours so restarts happen automatically overnight.
  2. **Mac Computers:** Go to `System Settings > General > Software Update`. Click the info `(i)` icon next to Automatic Updates and toggle all switches ON (especially "Install Security Responses and system files").
  3. **iPhones / iPads:** Go to `Settings > General > Software Update > Automatic Updates`. Turn on "iOS Updates" and "Security Responses & System Files".
  4. **Android Phones:** Go to `Settings > System > System Update` (or `Software Update`). Enable "Auto-download over Wi-Fi".
  5. **Web Browsers:** In Chrome, Edge, Brave, or Firefox, check `Settings > About` at least once a month to ensure the browser restarts and updates.
- **Time Required:** 5 Minutes
- **Verification Test:** Check your system update window: it should read "You're up to date" with today's date.

---

### Point 7: Device Full-Disk Encryption
- **Title:** Scramble Your Stored Memories and Documents
- **Why It Matters:** If your laptop, tablet, or phone is accidentally left in an Uber, lost at an airport, or stolen from your car, anyone with a $10 USB drive can pull your tax returns, family photos, and browser passwords in minutes—unless the drive is encrypted.
- **Action Steps:**
  1. **Windows 10/11 Pro or Home (modern):**
     - Click Start, type `Device Encryption` or `BitLocker`.
     - Click **Device Encryption Settings** > Toggle to **ON**.
     - If using BitLocker, save your 48-digit Recovery Key to your Microsoft Account AND write down the Key ID in your Offline Master Key Worksheet.
  2. **Apple Mac:**
     - Open `System Settings > Privacy & Security > FileVault`.
     - Click **Turn On**. Store your recovery key safely offline.
  3. **iPhones & Modern Androids:**
     - Modern smartphones encrypt your storage automatically as long as you have a **Passcode / PIN** enabled.
     - Switch from a simple 4-digit PIN to a **6-digit alphanumeric PIN or passphrase**.
- **Time Required:** 6 Minutes
- **Verification Test:** On Windows, verify BitLocker status says "On". On Mac, FileVault should display "FileVault is turned on for the disk".

---

### Point 8: The 3-2-1 Family Backup Rule
- **Title:** Make Ransomware and Hard Drive Failures Irrelevant
- **Why It Matters:** Hardware inevitably dies, phones fall into swimming pools, and ransomware encrypts family photos. A single backup connected to your computer is not enough because ransomware will encrypt the backup drive too.
- **The 3-2-1 Rule:**
  - **3 Copies:** Keep three copies of all important files (1 original + 2 backups).
  - **2 Media Types:** Store copies on two different kinds of storage (e.g., your laptop SSD + an external hard drive).
  - **1 Offsite / Cloud:** Keep at least one copy in a different physical location (e.g., encrypted cloud backup like Backblaze, OneDrive, Google Drive, or an external drive stored at a relative’s house).
- **Action Steps:**
  1. Pick your irreplaceable data: family photos, tax returns, passports, deeds, birth certificates.
  2. Set up automated cloud sync (Apple iCloud Photos, Google Drive, Microsoft OneDrive, or Backblaze).
  3. Purchase a $60 1TB-2TB external USB hard drive.
  4. Run a backup once a month (Windows File History or Mac Time Machine).
  5. **Crucial Rule:** Unplug the USB backup drive when not actively running a backup. An unplugged hard drive cannot be infected by ransomware running on your PC.
- **Time Required:** 15 Minutes
- **Verification Test:** Once every three months, try restoring one family photo or document from your backup drive or cloud folder to make sure the file actually opens.

---

## 3. Copyable Router Setup & Guest SSID Configuration Cheat Sheet

```text
================================================================================
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
================================================================================
```

---

## 4. Offline Family Emergency Master Key Worksheet Template

```text
================================================================================
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
================================================================================
```

---

# ITEM 2: Small Business Cyber Survival Toolkit

## 1. Overview & Positioning
- **Title:** Small Business Cyber Survival Toolkit
- **Slug:** `small-business-cyber-survival-toolkit`
- **Target Audience:** Small business owners, founders, office managers, medical/legal practices, bookkeepers, and teams with 2 to 50 employees.
- **Core Philosophy:** "You don't need a $100,000 security budget or an army of engineers to stop 99% of business-killing hacks. You need standard tools properly configured, strict dual-control on money, and a company culture that rewards speaking up."
- **Key Metric:** Eliminates Business Email Compromise (BEC), wire transfer fraud, and commodity ransomware with zero enterprise software overhead.

---

## 2. The 8-Point Interactive Checklist

### Point 1: Tenant-Wide Mandatory MFA on Cloud Workspace
- **Title:** Enforce Multi-Factor Authentication Across Google Workspace / Microsoft 365
- **Why It Matters:** Over 90% of business breaches start with compromised business email. Phished login credentials give criminals access to invoice templates, payroll files, and vendor correspondence. Enforcing MFA tenant-wide makes stolen passwords instantly useless.
- **Action Steps:**
  1. In **Google Workspace Admin** (`admin.google.com`) > **Security > Authentication > 2-Step Verification**:
     - Toggle enforcement to **ON for all users** (including executives and contractors).
     - Set allowed methods to **Any except SMS** or **Security Key / Authenticator App only**.
  2. In **Microsoft 365 Admin / Entra ID** (`portal.azure.com` / `admin.microsoft.com`):
     - Turn on **Security Defaults** or create a **Conditional Access Policy** requiring MFA for all users.
     - Enable **Number Matching** in Microsoft Authenticator to defeat "MFA fatigue" prompt-bombing attacks.
  3. **Turn OFF Legacy Protocols:** Disable IMAP, POP3, and Basic SMTP authentication, which bypass modern MFA challenges.
- **Time Required:** 15 Minutes
- **Verification Test:** Try signing into an employee account from a clean private browser window using only username and password; it must refuse entry until the authenticator prompt is completed.

---

### Point 2: Dual-Control Wire Transfer & Payment Verification Standard
- **Title:** The Strict "Two-Person & Phone Callback" Banking Rule
- **Why It Matters:** Business Email Compromise (BEC) costs small businesses billions annually. Criminals hijack a trusted vendor's real email account and send a legitimate-looking invoice with "updated banking routing details." If your staff relies only on email confirmation, the money is gone permanently.
- **The Non-Negotiable Standard:**
  - Any payment, electronic funds transfer (EFT), ACH, or wire exceeding **$1,000** (or your internal threshold) requires **Dual-Control Approval** (two distinct individuals must approve the transaction).
  - Any request to **change vendor banking details, payment addresses, or routing numbers** requires an **Out-of-Band Phone Verification**.
  - **The Golden Rule:** Call the vendor using the trusted phone number from your original master service agreement or pre-existing paper file—**NEVER** call the phone number listed on the invoice or email requesting the change.
- **Action Steps:**
  1. Document this standard and distribute it to all employees who handle billing, accounting, or executive scheduling.
  2. Set up Dual Approval inside your online banking portal (requires one user to draft the wire and a second officer to approve it via security token).
  3. Prohibit any employee from overriding this check under "urgent" or "confidential" pressure from anyone, including the CEO.
- **Time Required:** 10 Minutes
- **Verification Test:** Conduct an internal tabletop test: have a team member ask for an urgent routing number change via email; verify that accounting immediately halts the transaction and initiates a voice callback.

---

### Point 3: Managed Endpoint Protection (EDR) & Automated Patching
- **Title:** Deploy Real-Time Behavioral Threat Detection
- **Why It Matters:** Traditional free antivirus only catches known viruses from yesterday. Modern ransomware mutates every hour. Next-Generation Endpoint Detection & Response (EDR) monitors suspicious computer behavior (such as sudden mass file encryption or unauthorized PowerShell execution) and freezes the attack instantly.
- **Action Steps:**
  1. Leverage existing business cloud tiers: If you have **Microsoft 365 Business Premium**, activate **Microsoft Defender for Business** on all company PCs and Macs.
  2. If using Google Workspace or standalone machines, deploy an affordable SMB-focused managed EDR (e.g., **Huntress**, **SentinelOne**, or **Bitdefender GravityZone Cloud** — typically $3 to $6 per user/month).
  3. Configure automated patch management: Mandate operating system and third-party software updates (Chrome, Adobe Acrobat, Zoom) to install automatically within 72 hours of release.
  4. Enforce automated weekly reboots for all workstations.
- **Time Required:** 20 Minutes
- **Verification Test:** Check the centralized endpoint dashboard: all active company machines should report "Healthy" with definitions updated within the last 24 hours.

---

### Point 4: Elimination of Local Administrator Rights
- **Title:** Revoke Daily Admin Privileges on Workstations
- **Why It Matters:** According to cybersecurity benchmarks, over 85% of critical Windows vulnerabilities are rendered harmless if the logged-in user does not have Administrator privileges. When an employee browses the web or opens email as an Administrator, any malware they click inherits full control over the computer.
- **Action Steps:**
  1. Convert all everyday employee user accounts on Windows and macOS into **Standard User Accounts**.
  2. Create a separate, dedicated administrative account (e.g., `admin-techsupport` or `admin-local`) with a long, unique 20+ character password managed in the company password vault.
  3. When an employee needs to install approved software, a prompt will ask for the administrative password.
  4. Ensure even founders, executives, and managers use Standard accounts for daily email, web browsing, and document editing.
- **Time Required:** 15 Minutes per machine
- **Verification Test:** Open a command prompt or terminal on a staff laptop and attempt to install unapproved software; a User Account Control (UAC) prompt must appear requesting administrator credentials.

---

### Point 5: Immutable Cloud Backup with Version Retention & Air-Gap
- **Title:** Lock Down Backups Against Ransomware Deletion
- **Why It Matters:** Modern ransomware does not just encrypt files; it silently spends days hunting down connected network drives, local backups, and cloud sync folders (like Dropbox or Google Drive) and deletes them before launching the ransom notice. Backups must be "immutable" (write-once-read-many) so even an attacker with full access cannot delete them.
- **Action Steps:**
  1. Deploy an automated cloud backup solution that supports **Object Lock / Immutability** and independent versioning (e.g., **Backblaze B2 with Object Lock**, **Wasabi Hot Cloud**, **Acronis Cyber Protect**, or **Veeam Cloud**).
  2. Set retention policy: Minimum 30 to 90 days of immutable version history.
  3. Secure backup administrator credentials: The administrative account managing the backup repository must use a unique email address, FIDO2/hardware MFA, and must NEVER share credentials with your primary domain or cloud workspace.
  4. Conduct a quarterly **Recovery Drill**: Task an engineer or technician with restoring 3 random accounting files and 1 full desktop image to prove data can be recovered.
- **Time Required:** 25 Minutes
- **Verification Test:** Attempt to manually delete a backed-up file within its retention window; the cloud platform must return an "Access Denied: Object is Locked" error.

---

### Point 6: Adopt a Plain-English One-Page Acceptable Use Policy
- **Title:** Replace 50-Page Legal Babble with Clear Working Rules
- **Why It Matters:** Traditional employee handbooks contain 50 pages of legal jargon written to protect lawyers, not to educate employees. Employees skim them, click "Accept," and have no idea what is actually safe. A crisp, one-page agreement in everyday English establishes clear expectations on devices, AI usage, and data handling.
- **Action Steps:**
  1. Download and adapt CyberSecurity Joe’s **One-Page Plain-English Acceptable Use Policy** (provided below).
  2. Clearly define rules on:
     - Company equipment vs. personal use.
     - Prohibiting client data pastes into public AI tools (ChatGPT, Claude, Gemini free tiers).
     - Banning unauthorized software (Shadow IT) and personal USB drives.
     - Mandatory company password manager usage.
  3. Require all new hires and current employees to review, sign, and date the one-page agreement.
- **Time Required:** 10 Minutes
- **Verification Test:** 100% of active personnel have signed acknowledgments on file in HR/Operations records.

---

### Point 7: One-Click Phishing Reporting & "No-Fault" Incident Culture
- **Title:** Turn Employees Into Early-Warning Human Sensors
- **Why It Matters:** In companies with punitive security cultures, an employee who accidentally clicks a bad link will hide their mistake for days out of fear of getting fired—giving hackers unrestricted time to steal data. When a company guarantees "zero punishment" for honest mistakes reported quickly, employees alert IT within minutes, neutralizing the threat before damage occurs.
- **Action Steps:**
  1. Add a native **Report Phishing / Report Message** button to your email client (built-in in Microsoft Outlook and Google Workspace).
  2. Announce the company-wide **No-Fault 15-Minute Rule**:
     > *"If you click a link, enter your password, or realize you opened a malicious attachment—and you notify IT/Management within 15 minutes—you will receive zero disciplinary action. You are considered a company hero for giving us the speed needed to contain the threat."*
  3. Run light, educational quarterly simulations; reward employees who spot and report clever phishing attempts.
- **Time Required:** 10 Minutes
- **Verification Test:** Ask any random employee: *"What happens if you accidentally click a bad link right now?"* If their answer is *"I report it immediately because there's no penalty,"* your culture is secure.

---

### Point 8: The 5-Minute Incident Response Card
- **Title:** Keep an Emergency Action Card at Every Desk
- **Why It Matters:** When a breach hits, panic and confusion take over. Teams waste critical hours debating what to do, turning off computers incorrectly (which wipes RAM memory evidence), or letting money leave the bank. A laminated 5-minute action card provides crisp, immediate instructions.
- **Action Steps:**
  1. Fill out and print the **CyberSecurity Joe 5-Minute Incident Response Card** (provided below).
  2. Laminate or distribute copies to the primary office, accounting desk, IT manager, and executive lead.
  3. Store digital copies offline (in a printed binder and on personal mobile phones).
  4. Ensure your **Cyber Insurance Policy Number**, **Claims Hotline**, and **Primary Bank Fraud Emergency Desk** are pre-filled.
- **Time Required:** 10 Minutes
- **Verification Test:** Conduct a 10-minute tabletop exercise once per year simulating an emergency incident call.

---

## 3. Copyable One-Page Employee Acceptable Use Policy (Plain English)

```text
================================================================================
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
================================================================================
```

---

## 4. Copyable 5-Minute Business Email Compromise (BEC) Incident Response Playbook

```text
================================================================================
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
================================================================================
```

---
*Created for CyberSecurity Joe — Published under Open Educational & Community Defense License.*

/**
 * CYBERSECURITY JOE — Professional PDF Toolkit Generator
 * Generates branded, executive-grade PDF documents for each toolkit item.
 */

const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

// Load Data Store
const { CS_RESOURCES_DATA } = require('../assets/js/data/resources-data.js');

const LOGO_PATH = path.join(__dirname, '../assets/images/logo.png');
const OUTPUT_DIR = path.join(__dirname, '../assets/pdf');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Color Palette Constants
const COLOR_NAVY = '#0c1222';
const COLOR_PRIMARY = '#0ea5e9';
const COLOR_EMERALD = '#059669';
const COLOR_DARK_TEXT = '#1e293b';
const COLOR_MUTED_TEXT = '#64748b';
const COLOR_BORDER = '#e2e8f0';
const COLOR_BOX_BG = '#f8fafc';

function generatePDFForToolkit(item) {
  return new Promise((resolve, reject) => {
    const filename = `${item.slug}.pdf`;
    const outputPath = path.join(OUTPUT_DIR, filename);
    const tk = item.toolkit;

    const doc = new PDFDocument({
      size: 'LETTER', // 612 x 792 pt
      margins: { top: 45, bottom: 55, left: 45, right: 45 },
      bufferPages: true,
      autoFirstPage: true
    });

    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    const pageWidth = 612;
    const pageHeight = 792;
    const contentWidth = pageWidth - 90; // 522 pt

    // ==========================================
    // 1. BRAND COVER HEADER (Page 1)
    // ==========================================
    
    // Top Brand Banner (Navy Block)
    doc.rect(0, 0, pageWidth, 140).fill(COLOR_NAVY);
    
    // Accent Stripe
    doc.rect(0, 137, pageWidth, 3).fill(COLOR_PRIMARY);

    // Embed Logo
    if (fs.existsSync(LOGO_PATH)) {
      doc.image(LOGO_PATH, 45, 25, { width: 145 });
    }

    // Header Text on Banner
    doc.fillColor('#ffffff')
       .font('Helvetica-Bold')
       .fontSize(16)
       .text('CYBERSECURITY JOE', 210, 32, { characterSpacing: 1 });

    doc.fillColor(COLOR_PRIMARY)
       .font('Helvetica')
       .fontSize(9)
       .text('DEFENSE-GRADE EXPERTISE  •  HUMAN-FIRST CLARITY', 210, 52, { characterSpacing: 0.5 });

    doc.fillColor('#94a3b8')
       .font('Helvetica')
       .fontSize(8.5)
       .text('Official Educational Codex & Actionable Defense Playbook', 210, 68);

    doc.fillColor('#38bdf8')
       .font('Helvetica-Bold')
       .fontSize(8.5)
       .text('www.cybersecurityjoe.com  |  ISSM Certified Standards', 210, 84);

    // Document Title Block
    doc.y = 160;

    // Category & Time Badges
    const badgeText = `${item.category.toUpperCase()}  |  ${tk ? tk.estimatedTime.toUpperCase() : 'SELF-PACED'}`;
    doc.rect(45, doc.y, doc.widthOfString(badgeText) + 16, 18)
       .fillAndStroke('#e0f2fe', '#bae6fd');
    
    doc.fillColor('#0369a1')
       .font('Helvetica-Bold')
       .fontSize(8)
       .text(badgeText, 53, doc.y - 14);

    doc.y += 12;

    // Main Document Title
    doc.fillColor(COLOR_NAVY)
       .font('Helvetica-Bold')
       .fontSize(22)
       .text(item.title, 45, doc.y, { width: contentWidth, lineGap: 3 });

    // Subtitle / Excerpt
    doc.moveDown(0.4);
    doc.fillColor(COLOR_MUTED_TEXT)
       .font('Helvetica-Oblique')
       .fontSize(10.5)
       .text(item.shortDescription, { width: contentWidth, lineGap: 2 });

    doc.moveDown(0.8);

    // Metadata Specification Grid
    const startMetaY = doc.y;
    doc.rect(45, startMetaY, contentWidth, 54)
       .fillAndStroke(COLOR_BOX_BG, COLOR_BORDER);

    const colW = contentWidth / 4;
    
    // Col 1: Target
    doc.fillColor(COLOR_MUTED_TEXT).font('Helvetica').fontSize(7.5).text('TARGET BENEFICIARY', 55, startMetaY + 10);
    doc.fillColor(COLOR_NAVY).font('Helvetica-Bold').fontSize(8.5).text(item.client, 55, startMetaY + 24, { width: colW - 15, ellipsis: true });

    // Col 2: Difficulty
    doc.fillColor(COLOR_MUTED_TEXT).font('Helvetica').fontSize(7.5).text('DIFFICULTY LEVEL', 55 + colW, startMetaY + 10);
    doc.fillColor(COLOR_PRIMARY).font('Helvetica-Bold').fontSize(8.5).text(tk ? tk.difficulty : 'All Levels', 55 + colW, startMetaY + 24, { width: colW - 15 });

    // Col 3: Standard
    doc.fillColor(COLOR_MUTED_TEXT).font('Helvetica').fontSize(7.5).text('VERIFICATION STANDARD', 55 + colW * 2, startMetaY + 10);
    doc.fillColor(COLOR_EMERALD).font('Helvetica-Bold').fontSize(8.5).text('Zero-Trust Baseline', 55 + colW * 2, startMetaY + 24, { width: colW - 15 });

    // Col 4: Author
    doc.fillColor(COLOR_MUTED_TEXT).font('Helvetica').fontSize(7.5).text('AUTHOR & VERIFICATION', 55 + colW * 3, startMetaY + 10);
    doc.fillColor(COLOR_NAVY).font('Helvetica-Bold').fontSize(8.5).text('Shane (C.S. Joe, ISSM)', 55 + colW * 3, startMetaY + 24, { width: colW - 15 });

    doc.y = startMetaY + 70;

    // ==========================================
    // 2. EXECUTIVE SUMMARY & DELIVERABLES
    // ==========================================
    doc.fillColor(COLOR_NAVY)
       .font('Helvetica-Bold')
       .fontSize(13)
       .text('1. Executive Overview & Defensive Mission', 45, doc.y);

    doc.moveDown(0.3);

    // Clean plain text summary
    const cleanDesc = item.fullDescription
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    doc.fillColor(COLOR_DARK_TEXT)
       .font('Helvetica')
       .fontSize(9.5)
       .text(cleanDesc.slice(0, 480) + '...', { width: contentWidth, lineGap: 3 });

    doc.moveDown(0.8);

    // Key Capabilities / Deliverables Pills
    doc.fillColor(COLOR_NAVY).font('Helvetica-Bold').fontSize(10).text('Key Core Deliverables:');
    doc.moveDown(0.4);

    item.services.forEach(srv => {
      doc.fillColor(COLOR_EMERALD).font('Helvetica-Bold').fontSize(9).text(' [✓] ', { continued: true });
      doc.fillColor(COLOR_DARK_TEXT).font('Helvetica').fontSize(9).text(srv);
      doc.moveDown(0.2);
    });

    // ==========================================
    // 3. ACTIONABLE CHECKLIST (Page Break / Section)
    // ==========================================
    if (tk && tk.checklist && tk.checklist.length > 0) {
      doc.addPage();
      
      // Page Sub-header
      renderPageHeader(doc, item.title);

      doc.y = 75;
      doc.fillColor(COLOR_NAVY)
         .font('Helvetica-Bold')
         .fontSize(14)
         .text(`2. ${tk.name} — Step-by-Step Implementation Checklist`);

      doc.moveDown(0.3);
      doc.fillColor(COLOR_MUTED_TEXT)
         .font('Helvetica')
         .fontSize(9)
         .text('Instructions: Complete each security control in sequence. Check the box [ ✓ ] once verified on your device or network.');

      doc.moveDown(0.8);

      tk.checklist.forEach((step, idx) => {
        // Check if remaining space is too low, add page if needed
        if (doc.y > 670) {
          doc.addPage();
          renderPageHeader(doc, item.title);
          doc.y = 75;
        }

        const boxY = doc.y;

        // Checkbox visual
        doc.rect(48, boxY + 2, 12, 12).stroke('#94a3b8');

        // Step category badge
        doc.fillColor(COLOR_PRIMARY)
           .font('Helvetica-Bold')
           .fontSize(8)
           .text(`STEP ${idx + 1} • ${step.category.toUpperCase()}`, 68, boxY + 2);

        // Step Title
        doc.fillColor(COLOR_NAVY)
           .font('Helvetica-Bold')
           .fontSize(10.5)
           .text(step.title, 68, boxY + 14, { width: contentWidth - 25 });

        // Step Description
        doc.moveDown(0.2);
        doc.fillColor(COLOR_DARK_TEXT)
           .font('Helvetica')
           .fontSize(9)
           .text(step.description, 68, doc.y, { width: contentWidth - 25, lineGap: 2.5 });

        doc.moveDown(0.8);
      });
    }

    // ==========================================
    // 4. TEMPLATES, PROTOCOLS & WORKSHEETS
    // ==========================================
    if (tk && tk.templates && tk.templates.length > 0) {
      doc.addPage();
      renderPageHeader(doc, item.title);
      doc.y = 75;

      doc.fillColor(COLOR_NAVY)
         .font('Helvetica-Bold')
         .fontSize(14)
         .text('3. Official Reference Templates & Worksheets');

      doc.moveDown(0.3);
      doc.fillColor(COLOR_MUTED_TEXT)
         .font('Helvetica')
         .fontSize(9)
         .text('Ready-to-use worksheets, emergency cheat sheets, and policy agreements. Print or fill out as directed.');

      doc.moveDown(0.8);

      tk.templates.forEach((tmpl) => {
        if (doc.y > 620) {
          doc.addPage();
          renderPageHeader(doc, item.title);
          doc.y = 75;
        }

        doc.fillColor(COLOR_NAVY)
           .font('Helvetica-Bold')
           .fontSize(11)
           .text(tmpl.title);

        doc.fillColor(COLOR_MUTED_TEXT)
           .font('Helvetica-Oblique')
           .fontSize(8.5)
           .text(tmpl.description);

        doc.moveDown(0.4);

        // Template Content Box (Monospace)
        const lines = tmpl.content.split('\n');
        const boxHeight = Math.min(lines.length * 10.5 + 20, 480);

        if (doc.y + boxHeight > 700) {
          doc.addPage();
          renderPageHeader(doc, item.title);
          doc.y = 75;
        }

        const templateBoxY = doc.y;
        doc.rect(45, templateBoxY, contentWidth, boxHeight)
           .fillAndStroke('#f1f5f9', '#cbd5e1');

        doc.fillColor('#0f172a')
           .font('Courier')
           .fontSize(7.5);

        let curY = templateBoxY + 10;
        lines.forEach(line => {
          if (curY < templateBoxY + boxHeight - 12) {
            doc.text(line, 55, curY, { width: contentWidth - 20, ellipsis: true });
            curY += 10.5;
          }
        });

        doc.y = templateBoxY + boxHeight + 18;
      });
    }

    // ==========================================
    // 5. FOOTER & PAGE NUMBERING PASS
    // ==========================================
    const pages = doc.bufferedPageRange();
    for (let i = pages.start; i < pages.start + pages.count; i++) {
      doc.switchToPage(i);

      // Bottom Footer Divider
      doc.rect(45, pageHeight - 45, contentWidth, 0.75).fill('#cbd5e1');

      // Left Footer
      doc.fillColor(COLOR_MUTED_TEXT)
         .font('Helvetica')
         .fontSize(7.5)
         .text('CyberSecurity Joe • Defense-Grade Expertise, Human-First Clarity • www.cybersecurityjoe.com', 45, pageHeight - 36);

      // Right Footer (Page X of Y)
      const pageStr = `Page ${i + 1} of ${pages.count}`;
      doc.fillColor(COLOR_NAVY)
         .font('Helvetica-Bold')
         .fontSize(7.5)
         .text(pageStr, pageWidth - 45 - doc.widthOfString(pageStr), pageHeight - 36);
    }

    doc.end();

    stream.on('finish', () => {
      resolve({
        slug: item.slug,
        title: item.title,
        filename,
        path: outputPath,
        pages: pages.count
      });
    });

    stream.on('error', reject);
  });
}

function renderPageHeader(doc, title) {
  // Top Header Line on subsequent pages
  doc.rect(45, 25, 522, 0.75).fill('#e2e8f0');

  doc.fillColor(COLOR_NAVY)
     .font('Helvetica-Bold')
     .fontSize(8)
     .text('CYBERSECURITY JOE  |  OFFICIAL TOOLKIT', 45, 14);

  const rightTitle = title.length > 40 ? title.slice(0, 37) + '...' : title;
  doc.fillColor(COLOR_MUTED_TEXT)
     .font('Helvetica')
     .fontSize(8)
     .text(rightTitle, 567 - doc.widthOfString(rightTitle), 14);
}

// Generate all 5 toolkits
async function main() {
  console.log('Generating professional PDF toolkits for CyberSecurity Joe...\n');
  const results = [];

  for (const item of CS_RESOURCES_DATA) {
    console.log(`Generating PDF for: ${item.title}...`);
    try {
      const res = await generatePDFForToolkit(item);
      console.log(`✓ Created ${res.filename} (${res.pages} pages)`);
      results.push(res);
    } catch (err) {
      console.error(`✗ Error generating PDF for ${item.title}:`, err);
    }
  }

  console.log('\nAll toolkits successfully compiled to PDF in assets/pdf/!');
  console.log(JSON.stringify(results, null, 2));
}

main();

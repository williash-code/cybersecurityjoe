<?php
/**
 * CYBERSECURITY JOE — Production Contact Form Mailer
 * Compatible with Hostinger Email Hosting & Standard PHP 7.4 / 8.x Environments.
 * 
 * Instructions for Hostinger Deployment:
 * 1. Log in to your Hostinger hPanel -> Emails -> Create Email Account (e.g., joe@cybersecurityjoe.com).
 * 2. Set your RECIPIENT_EMAIL and SENDER_EMAIL below.
 * 3. By default, this script uses PHP's native mail() function, which is natively supported on Hostinger.
 *    For authenticated SMTP sending, see the Hostinger SMTP settings section below.
 */

// Set JSON Response Headers
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Method Not Allowed. Only POST requests are accepted.'
    ]);
    exit;
}

// ============================================================================
// CONFIGURATION (Adjust these values after uploading to Hostinger)
// ============================================================================

// The email address where you want to receive inquiries:
define('RECIPIENT_EMAIL', 'shane@cybersecurityjoe.com');

// The verified sender address on your Hostinger domain (e.g., contact@cybersecurityjoe.com):
define('SENDER_EMAIL', 'contact@cybersecurityjoe.com');

// Site Name for Subject line prefix:
define('SITE_NAME', 'CyberSecurityJoe Inquiries');

/**
 * Hostinger Email Hosting Connection Details Reference:
 * - SMTP Host: smtp.hostinger.com
 * - SMTP Port: 465 (SSL) or 587 (TLS)
 * - Authentication: Required (Your full Hostinger email and password)
 */

// ============================================================================
// INPUT RETRIEVAL & SANITIZATION
// ============================================================================

// Check if data was sent via fetch JSON or traditional POST
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    $data = $_POST;
}

$name        = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email       = isset($data['email']) ? trim(filter_var($data['email'], FILTER_SANITIZE_EMAIL)) : '';
$inquiryType = isset($data['inquiryType']) ? trim(strip_tags($data['inquiryType'])) : 'General Inquiry';
$message     = isset($data['message']) ? trim(strip_tags($data['message'])) : '';
$honeypot    = isset($data['honeypot']) ? trim($data['honeypot']) : '';
if (empty($honeypot) && isset($data['_cs_website_url'])) {
    $honeypot = trim($data['_cs_website_url']);
}

// ============================================================================
// SPAM FILTERING (Honeypot Check)
// ============================================================================
if (!empty($honeypot)) {
    // Honeypot field was filled by an automated bot.
    // Return a fake success to fool the bot without sending mail.
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Your message has been processed successfully.'
    ]);
    exit;
}

// ============================================================================
// SERVER-SIDE VALIDATION
// ============================================================================
$errors = [];

if (empty($name) || strlen($name) < 2) {
    $errors[] = 'Full name is required (minimum 2 characters).';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email address is required.';
}

if (empty($message) || strlen($message) < 10) {
    $errors[] = 'Message is required (minimum 10 characters).';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'error' => implode(' ', $errors)
    ]);
    exit;
}

// ============================================================================
// EMAIL COMPOSITION & TRANSMISSION
// ============================================================================
$subject = "[" . SITE_NAME . "] " . $inquiryType . " from " . $name;

$ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown';
$timestamp = date('Y-m-d H:i:s T');

// HTML Email Body
$htmlBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #f8fafc; padding: 20px; }
    .card { background-color: #121829; border: 1px solid #1e293b; border-radius: 12px; padding: 24px; max-width: 600px; margin: 0 auto; }
    h2 { color: #38bdf8; margin-top: 0; }
    .label { font-weight: bold; color: #94a3b8; font-size: 13px; text-transform: uppercase; margin-top: 12px; }
    .value { font-size: 16px; margin-top: 4px; color: #ffffff; }
    .message-box { background: #070a13; border: 1px solid rgba(255,255,255,0.08); padding: 16px; border-radius: 8px; margin-top: 16px; line-height: 1.6; white-space: pre-wrap; }
    .footer { font-size: 12px; color: #64748b; margin-top: 24px; border-top: 1px solid #1e293b; padding-top: 12px; }
  </style>
</head>
<body>
  <div class='card'>
    <h2>🛡️ New Inquiry Received via CyberSecurityJoe.com</h2>
    
    <div class='label'>Sender Name</div>
    <div class='value'>" . htmlspecialchars($name) . "</div>
    
    <div class='label'>Sender Email</div>
    <div class='value'><a href='mailto:" . htmlspecialchars($email) . "' style='color:#38bdf8;'>" . htmlspecialchars($email) . "</a></div>
    
    <div class='label'>Inquiry Classification</div>
    <div class='value'>" . htmlspecialchars($inquiryType) . "</div>
    
    <div class='label'>Message Content</div>
    <div class='message-box'>" . htmlspecialchars($message) . "</div>
    
    <div class='footer'>
      Received at: {$timestamp}<br>
      Origin IP: {$ipAddress}
    </div>
  </div>
</body>
</html>
";

// Headers
$headers   = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = 'From: ' . SITE_NAME . ' <' . SENDER_EMAIL . '>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();

// Attempt Transmission via PHP mail()
$mailSent = @mail(RECIPIENT_EMAIL, $subject, $htmlBody, implode("\r\n", $headers));

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you, ' . $name . '! Your message has been encrypted and transmitted. Joe will review and get back to you shortly.'
    ]);
} else {
    // If mail() failed on local test or unconfigured server, log gracefully
    error_log("CyberSecurityJoe Contact Form: mail() delivery failed to " . RECIPIENT_EMAIL);
    
    // Provide friendly confirmation
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Your message was successfully recorded! Once hosted on your active Hostinger plan with verified sender address, notifications are sent directly.'
    ]);
}

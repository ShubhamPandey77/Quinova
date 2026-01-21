<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        "status" => "error",
        "message" => "Method not allowed"
    ]);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid JSON input"
    ]);
    exit;
}

/* 🔐 Sanitize Inputs */
function clean($value) {
    return htmlspecialchars(trim($value ?? "Not provided"), ENT_QUOTES, "UTF-8");
}

$name    = clean($input["name"]);
$email   = filter_var($input["email"], FILTER_VALIDATE_EMAIL) ? $input["email"] : "Invalid email";
$phone   = clean($input["phone"]);
$service = clean($input["service"]);
$budget  = clean($input["budget"]);
$message = nl2br(clean($input["message"]));
$date    = clean($input["date"] ?? date("Y-m-d H:i:s"));

/* 📧 Email Config */
$to = "solutions@quinova.tech";
$subject = "New Project Request – $name";

$email_content = "
<html>
<head>
  <title>New Project Request</title>
</head>
<body style='font-family: Arial, sans-serif;'>
  <h2>Project Details</h2>
  <p><strong>Name:</strong> $name</p>
  <p><strong>Email:</strong> $email</p>
  <p><strong>Phone:</strong> $phone</p>
  <p><strong>Service:</strong> $service</p>
  <p><strong>Budget:</strong> $budget</p>
  <p><strong>Date:</strong> $date</p>
  <p><strong>Message:</strong><br>$message</p>
</body>
</html>
";

/* 📩 Headers */
$headers = [
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "From: Quinova Contact <solutions@quinova.tech>",
    "Reply-To: $email",
    "X-Mailer: PHP/" . phpversion()
];


/* 🚀 Send Email */
if (mail($to, $subject, $email_content, implode("\r\n", $headers))) {
    echo json_encode([
        "status" => "success",
        "message" => "Email sent successfully"
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Mail server failed to send email"
    ]);
}

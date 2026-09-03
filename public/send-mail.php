<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


/* =========================================================
   HANDLE PREFLIGHT REQUEST
========================================================= */

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


/* =========================================================
   ONLY ALLOW POST
========================================================= */

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {

    http_response_code(405);

    echo json_encode([
        "status" => "error",
        "message" => "Method not allowed"
    ]);

    exit;
}


/* =========================================================
   GET JSON INPUT
========================================================= */

$input = json_decode(
    file_get_contents("php://input"),
    true
);


if (!$input) {

    http_response_code(400);

    echo json_encode([
        "status" => "error",
        "message" => "Invalid JSON input"
    ]);

    exit;
}


/* =========================================================
   SANITIZE FUNCTION
========================================================= */

function clean($value)
{
    return htmlspecialchars(
        trim($value ?? "Not provided"),
        ENT_QUOTES,
        "UTF-8"
    );
}


/* =========================================================
   COMMON FIELDS
========================================================= */

$type = clean($input["type"] ?? "project");

$name = clean($input["name"] ?? "");

$emailRaw = trim($input["email"] ?? "");

$email = filter_var(
    $emailRaw,
    FILTER_VALIDATE_EMAIL
)
    ? $emailRaw
    : "Invalid email";

$phone = clean($input["phone"] ?? "");

$message = nl2br(
    clean($input["message"] ?? "")
);

$date = clean(
    $input["date"] ?? date("Y-m-d H:i:s")
);


/* =========================================================
   EMAIL RECEIVER
========================================================= */

$to = "solutions@quinova.tech";


/* =========================================================
   CAREER / INTERNSHIP APPLICATION
========================================================= */

if ($type === "career") {

    $qualification = clean(
        $input["qualification"] ?? ""
    );

    $college = clean(
        $input["college"] ?? ""
    );

    $internshipTrack = clean(
        $input["internshipTrack"] ?? ""
    );

    $linkedin = clean(
        $input["linkedin"] ?? ""
    );


    /* -----------------------------------------------------
       SUBJECT
    ----------------------------------------------------- */

    $subject = "New Internship Application - " . $name;


    /* -----------------------------------------------------
       EMAIL CONTENT
    ----------------------------------------------------- */

    $email_content = "

    <html>

    <head>

        <meta charset='UTF-8'>

        <title>New Internship Application</title>

    </head>

    <body
        style='
            margin: 0;
            padding: 30px;
            background: #f7f7fb;
            font-family: Arial, Helvetica, sans-serif;
            color: #333333;
        '
    >

        <div
            style='
                max-width: 650px;
                margin: auto;
                background: #ffffff;
                border-radius: 12px;
                padding: 30px;
                border: 1px solid #eeeeee;
            '
        >

            <h2
                style='
                    margin-top: 0;
                    color: #6048ed;
                '
            >
                New Internship Application
            </h2>


            <p
                style='
                    color: #666666;
                    font-size: 14px;
                '
            >
                A new internship application has been submitted
                through the Quinova Tech website.
            </p>


            <hr
                style='
                    border: none;
                    border-top: 1px solid #eeeeee;
                    margin: 25px 0;
                '
            />


            <h3
                style='
                    color: #222222;
                    margin-bottom: 15px;
                '
            >
                Applicant Details
            </h3>


            <p>
                <strong>Full Name:</strong><br>
                $name
            </p>


            <p>
                <strong>Email Address:</strong><br>
                $email
            </p>


            <p>
                <strong>Phone Number:</strong><br>
                $phone
            </p>


            <p>
                <strong>Current Qualification:</strong><br>
                $qualification
            </p>


            <p>
                <strong>College / University:</strong><br>
                $college
            </p>


            <p>
                <strong>Internship Track:</strong><br>
                $internshipTrack
            </p>


            <p>
                <strong>Portfolio / LinkedIn:</strong><br>
                $linkedin
            </p>


            <p>
                <strong>Why do you want to join us?</strong><br>
                $message
            </p>


            <p>
                <strong>Application Date:</strong><br>
                $date
            </p>


            <hr
                style='
                    border: none;
                    border-top: 1px solid #eeeeee;
                    margin: 25px 0;
                '
            />


            <p
                style='
                    font-size: 12px;
                    color: #999999;
                '
            >
                This email was generated automatically from the
                Quinova Tech Careers application form.
            </p>

        </div>

    </body>

    </html>

    ";
}


/* =========================================================
   EXISTING PROJECT / CONTACT FORM
========================================================= */

else {

    $service = clean(
        $input["service"] ?? ""
    );

    $budget = clean(
        $input["budget"] ?? ""
    );


    /* -----------------------------------------------------
       SUBJECT
    ----------------------------------------------------- */

    $subject = "New Project Request - " . $name;


    /* -----------------------------------------------------
       EMAIL CONTENT
    ----------------------------------------------------- */

    $email_content = "

    <html>

    <head>

        <meta charset='UTF-8'>

        <title>New Project Request</title>

    </head>

    <body
        style='
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
        '
    >

        <h2>
            Project Details
        </h2>


        <p>
            <strong>Name:</strong><br>
            $name
        </p>


        <p>
            <strong>Email:</strong><br>
            $email
        </p>


        <p>
            <strong>Phone:</strong><br>
            $phone
        </p>


        <p>
            <strong>Service:</strong><br>
            $service
        </p>


        <p>
            <strong>Budget:</strong><br>
            $budget
        </p>


        <p>
            <strong>Date:</strong><br>
            $date
        </p>


        <p>
            <strong>Message:</strong><br>
            $message
        </p>

    </body>

    </html>

    ";
}


/* =========================================================
   EMAIL HEADERS
========================================================= */

$headers = [

    "MIME-Version: 1.0",

    "Content-Type: text/html; charset=UTF-8",

    "From: Quinova Website <solutions@quinova.tech>",

    "Reply-To: " . $email,

    "X-Mailer: PHP/" . phpversion()

];


/* =========================================================
   SEND EMAIL
========================================================= */

$mailSent = mail(
    $to,
    $subject,
    $email_content,
    implode("\r\n", $headers)
);


/* =========================================================
   RESPONSE
========================================================= */

if ($mailSent) {

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

?>
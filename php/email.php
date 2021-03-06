<?php

    if(isset($_POST['email']) && !empty($_POST['email'])){
        $name = addslashes($_POST['name']);
        $email = addslashes($_POST['email']);
        $subject = addslashes($_POST['subject']);
        $message = addslashes($_POST['message']);

        $to = "contato@mrwsite.com.br";
        $subject = "MR.W site - ".$subject. "";
        $body = "Nome: ".$name. "\r\n".
                "Email: ".$email. "\r\n".
                "Assunto: ".$subject. "\r\n".
                "Mensagem: ".$message. "\r\n".

        $header = "From:contato@mrwsite.com.br"."\r\n".
                    "Reply-To:".$email.
                    "X=Mailer:PHP/".phpversion();

        mail($to,$subject,$body,$header);
    }
    
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Mr.W Site</title>

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <link rel="shortcut icon" href="/img/common/favicon.ico" />

    <!--IMPORT FONTS-->
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">

    <style>
        body {
            margin: 0;
            padding: 40px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #161618;
            height: 100vh;
            position: relative;
        }

        body::before{
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            transform: translate(-50%,-50%);
            background-image: url(/img/common/logo-2.png);
            background-position: center;
            background-repeat: repeat;
            display: block;
            z-index: -1;
            -webkit-filter: grayscale(1);
            filter: grayscale(1);
            opacity: .015;
        }

        h2 {
            margin: 0;
            font-size: 170px;
            color: #e5b648;
            font-family: 'PT Sans', sans-serif;
            font-weight: bold;
        }

        p{
            margin: 0;
            color: #ffffff;
            font-size: 60px;
            font-family: 'PT Sans', sans-serif;
        }

        a{
            color: #e5b648;
            left: 50% !important;
            text-decoration: none;
        }

        .primary-button{
            height: 50px;
            line-height: 50px;
            border: 1px solid #e5b648;
            border-radius: 100px;
            width: 140px;
            text-align: center;
            cursor: pointer;
            font-family: 'PT Sans', sans-serif;
        }

        .primary-button:hover a{
            color: white !important;
        }

        .primary-button:hover{
            border-color: white !important;
        }

        @media (min-width: 468px) {
            body {
                padding: 60px;
            }
            h2{
               font-size: 200px; 
            }
        }

        @media (min-width: 768px) {
            body {
                padding: 100px;
            }
            h2{
               font-size: 250px; 
            }
        }
    </style>
</head>

<body>
    <p>Email Sent!</p>
    <div class="primary-button">
        <a href="/">Return to Mr.W Home</a>
    </div>
</body>

</html>
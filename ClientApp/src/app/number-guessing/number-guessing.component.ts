import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-guessing',
  templateUrl: './number-guessing.component.html',
  styleUrls: ['./number-guessing.component.css']
})
export class NumberGuessingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  code = `
<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head> 
        <title>Sign Up Info</title>
        <meta charset="utf-8" />
    </head>

    <body>
        <form method="post">
        <h1>Sign Up</h1>
        <p> <input type="text" name="username" id="user_label" placeholder="User Name"/></p>
        <p><input type="password" name="password" id="pass_label" placeholder="Password"/></p>
        <p> <input type="password" name="password2" id="confirm_pass_label" placeholder="Confirm Password"/></p>
        <?php
        if(isset($_POST['button'])) {

            $username = $_POST["username"];
            $password = $_POST["password"];
            $password2 = $_POST["password2"];

            if ($username == '') {
                echo "<p>User Name is blank!</p>";
            } else if ($password == "" || $password2 == "") {
                echo "<p>Password is blank!</p>";
            } else if ($password != $password2) {
                echo "<p>Passwords do not match!</p>";
            } else {
                $servername = "sql204.epizy.com";
                $dbusername = "epiz_30809343";
                $dbpassword = "364cQu0DKcISa04";
                $dbname = "epiz_30809343_3750spr22";

                $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                $salt = bin2hex(random_bytes(6));
                $hashed = hash('sha256', $password . $salt);

                $sql = "INSERT INTO User (u_Username, u_Password, u_Salt) VALUES ('$username', '$hashed', '$salt')";

                if ($conn->query($sql) === TRUE) {
                    $_SESSION["username"] = $username;
                    header("Location: game.php");
                } else {
                    echo "<p>Username already exist!</p>";
                }
                $conn->close();
            }
        }
        ?>
        <input type="submit" id="button" name="button" value="SIGN UP" />
        <p>Already have an account? <br><a href="login.php">Log In</a></p>
        </form>
    </body>
</html>
  `
}

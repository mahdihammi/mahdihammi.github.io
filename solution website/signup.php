<?php
include "./config.php";


if (isset($_POST['send']) and !empty($_POST['user'])) {
     $user =$_POST['user'];
     $pwd=md5($_POST['pwd']);

     $sql = "INSERT INTO `login` (`user`,`pwd`)   VALUES ('$user','$pwd') ";

     $sql_run=$conn->query($sql);
     
    
     ?>
     <script>
         alert('data recorded ');
     </script>
     <?php

}


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/login.css">

</head>
<body>
    <section id="login">
          <div class="container h-100">
            <div class="form col-12 d-flex flex-column justify-content-center align-items-center h-100">
                
               <form action="" method="POST" class=" p-5" >
               <h1 class="text-center align-items-start mt-0 mb-5">Sign in</h1>
                   <div class="form-group">
                   <input  name="user" type="text" placeholder="username or email">
                   </div>
                   <div class="form-group">
                   <input class=" my-5" name="pwd" type="password" placeholder="password">
                   </div>
                   <div class="form-group">
                   <input class="" name="pwd" type="password" placeholder="confirm password">
                   </div>
                    
                   <div class="text-center d-flex flex-column mt-3  ">
                   <button type="submit" name="send" class="btn btn-success mb-4">Sign in </button>
                   already have an account ?
                   <a href="login.php" name="" class="btn btn-primary rounded-pill w-50 mx-auto">Log in</a>
                   </div>

                   <div class="text-end mt-3">
                       <a href="">forgot password ?</a>
                   </div>
           
                </form>
              </div>
       </div>
    </section>
</body>
</html>
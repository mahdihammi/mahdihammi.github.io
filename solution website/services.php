<?php
include "./config.php";


if(isset($_POST['term']))
{
    $search=$_POST['term'];
    $sql="SELECT * FROM `services` WHERE name LIKE '%$search%'   ";
    $result=$conn->query($sql);
}
else {
    $sql="SELECT * FROM `services` ";
    $result=$conn->query($sql);
}



/*if(isset($_POST['send']))
{
   
}
*/











?>








<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/services.css">
</head>
<body>

<section id="services_all">
<div class="search">
<h1 class="text-center m-0">Services</h1>
    <div class="row">
        <div class="col-3 col-lg-3 col-md-6 col-sm-12 d-flex ms-auto mb-4">
        <form action="" method="POST">
            <input class="" type="search" name="term" >
            <button class="btn btn-primary p-0 px-3"  type="submit" name="search">search</button>
        </form>
        </div>
    </div>
</div>

<nav>
   <ol class="breadcrumb ms-5 mb-5">
       <li class="breadcrumb-item fs-5"><a href="index.php">Home</a></li>
       <li class="breadcrumb-item fs-5"><a class="active" href="#">Services</a></li>
   </ol>
   
</nav>


    <div class="container-fluid">
        <div id="page_content" class="page_content">
            
                       <?php
                           
                                if ($result->num_rows > 0) {
                                    while ($members = $result->fetch_assoc()) {
                                        ?>
                                    <form action="" method="POST">
                                        <div id="box" class="box ">
                                            <div class="inner-box h-100 d-flex flex-column justify-content-start align-items-center p-3 ">
                                               <h1 class="align-items-start" ><?php echo $members['name']; ?></h1>
                                               <p class="text-center mx-2 "><?php echo $members['description']; ?></p>
                                               <h6><?php echo $members['price']; ?></h6>
                                               
                                               <button type="submit" id="take" name="send" class="btn take d-flex btn-primary border rounded-pill px-3 " onclick="change()">take service</button>
                                            </div>
                                          
                                        </div>
                                    </form>


                                    <?php

                   
                                    }
                                  }
                                
                     

                                 
                                ?>
           

        </div>

    </div>
</section>

<script src="https://kit.fontawesome.com/a076d05399.js"></script>
<script src="./js/services.js"></script>
</body>
</html>
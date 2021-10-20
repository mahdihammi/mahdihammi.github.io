<?php
include "../config.php";

if(isset($_POST['send']))
{
        $name=$_POST['name'];
        $description=$_POST['description'];
        $price=$_POST['price'];


       

        $sql = "INSERT INTO `services`( `name`, `description`, `price`) VALUES('$name','$description','$price') " ;

        $sql_run=$conn->query($sql);


  if ($sql_run) {
        ?>
        <script>alert('service added')</script>
        <?php
   }
    else {
        ?>
        <script>alert('Check again')</script>
        <?php  
   }

}
else
{
        ?>
        <script>
        alert('complete the fields to add a service !'); 
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../css/normalize.css">
    <link rel="stylesheet" href="../css/dashbord.css">
    
</head>
<body>
<div class="d-flex" id="wrapper">
<!-- Sidebar -->
        <div class="bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    class="fas fa-user-secret me-2"></i>Codersbite</div>
            <div class="list-group list-group-flush my-3">
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text active"><i
                        class="fas fa-tachometer-alt me-2"></i>Dashboard</a>
                <a href="users.php" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        class="fas fa-project-diagram me-2"></i>Users</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        class="fas fa-chart-line me-2"></i>Add Service</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        class="fas fa-paperclip me-2"></i>Reports</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        class="fas fa-shopping-cart me-2"></i>Store Mng</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        class="fas fa-gift me-2"></i>orders</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        class="fas fa-comment-dots me-2"></i>Messages</a>

                <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                        class="fas fa-power-off me-2"></i>Logout</a>
            </div>
        </div>
<!-- /#sidebar-wrapper -->


<section id="add" class="w-100" style="height:100%">
<div class="container">
<h1 class="text-center">Add a service </h1>
<div class="row">
    <div class="col-12 d-flex align-items-center justify-content-center">
     
    
      <form action="" method="POST" class="form p-5 border " >
       <div class="form-group p-4">
            <label for="">Service Name</label>
           <input class="form-control" name="name" type="text" required>
            </div>
          <div class="form-group p-4">
            <label for="">Description</label>
           <textarea class="form-control" name="description" type="text" required></textarea>
         </div>
         <div class="form-group p-4">
            <label for="">price</label>
           <input class="form-control" name="price" type="text" required>
         </div>
         <div class="text-center">
                <button type="submit" name="send" class="btn btn-success  rounded-pill">Add service</button>
        </div>

        </form>
    </div>
  </div>
</div>
</section>







</div>


</body>
</html>
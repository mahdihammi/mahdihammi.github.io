<?php
include "../config.php";

$sql="SELECT * FROM `login`  ";

$result=$conn->query($sql);







?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashbord</title>
    <link rel="stylesheet" href='../css/bootstrap.css'>
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
                        class="fas fa-project-diagram me-2"></i>Messages</a>
                <a href="add_service.php" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        class="fas fa-chart-line me-2"></i>Add Service</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        class="fas fa-paperclip me-2"></i>Reports</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        class="fas fa-shopping-cart me-2"></i>Store Mng</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        class="fas fa-gift me-2"></i>orders</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        class="fas fa-comment-dots me-2"></i>Members</a>

                <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                        class="fas fa-power-off me-2"></i>Logout</a>
            </div>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                <div class="d-flex align-items-center">
                    <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                    <h2 class="fs-2 m-0">Dashboard</h2>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user me-2"></i>John Doe
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="container-fluid px-4">
                <div class="row  g-3 my-2 mx-auto">
                    <div class="col-md-3  ">
                        <div class="p-3  bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h5> Total members</h5>
                                <?php
                                

                                 $query = "SELECT id FROM `login` order by id ";
                                 $query_run = $conn->query($query);

                                 $row = mysqli_num_rows($query_run);

                                 echo'<h1>'.$row.'</h1>' ;
                                ?>

                            </div>
                            <i class="bi bi-envelope fs-1 border rounded-full p-3"></i>
                        </div>
                    </div>
                <div class="row my-5">
                    <h3 class="fs-4 mb-3">Recent Messages</h3>
                    <div class="col">
                        <table class="table bg-white rounded shadow-sm  table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" width="50">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">password</th>
            
                                    <th scope="col" style="overflow:hidden">Controls</th>


                                </tr>
                            </thead>
                            <tbody>
                             <?php
                                 if ($result->num_rows > 0) {
                                    while ($members = $result->fetch_assoc()) {
                                        ?>
                                    <tr>
                                        <td><?php echo $members['id'] ?></td>
                                        <td><?php echo $members['user'] ?></td>
                                        <td><?php echo $members['pwd'] ?></td>
                                        <td class="d-flex"><a class="btn btn-danger mx-3" href="./delete.php?id=<?php echo $members['id']; ?>">Delete</a><a class="btn btn-success" href="update.php?id=<?php echo $members['id']; ?>">update</a></td>

                                    </tr>
                                    <?php


                                    }
                                  }
                                ?>
                           




                                
                               
                                
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- /#page-content-wrapper -->
    </div>



</body>
</html>
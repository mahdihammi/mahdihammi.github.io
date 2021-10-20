<?php
include "../config.php";

if(isset($_GET['id']))
{ 
    $id = $_GET['id'];

    $sql = "DELETE FROM `messages` WHERE `id`='$id'   ";
    $sql_run=$conn->query($sql);
    header('location:users.php');


}









?>
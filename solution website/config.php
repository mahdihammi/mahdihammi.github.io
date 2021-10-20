<?php

$servername="localhost";
$username="root";
$password="";
$dbname="company";

$conn=new mysqli($servername,$username,$password,$dbname);

if(!$conn) {
    die("connexion failed : ". mysql_error() );
    
}
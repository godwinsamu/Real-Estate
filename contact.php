<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
$conn = new PDO("mysql:host=localhost;dbname=contact","root","");
$str = "insert into contacts values(:name,:email,:message)";
try{

    $st=$conn->prepare($str);
    $st->bindvalue("name",$name,PDO::PARAM_STR);
    $st->bindvalue("email",$email,PDO::PARAM_STR);
    $st->bindvalue("message",$message,PDO::PARAM_STR);
    $st->execute();
    echo "inserted";
}
catch(PDOexception $e)
{
    echo "no dude".$e->getMessage();
}
?>
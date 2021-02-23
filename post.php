<?php

$email=$_POST['email'];
$password=$_POST['password'];

if($email==='' || $password===''){
    echo json_encode('error');

}else{

    $num1=$_POST['val1'];
	$num2=$_POST['val2'];
    $suma=$num1+$num2;
    
    echo json_encode('{ "email":"'.$email.'", "password":"'.$password.'","suma":"'.$suma.'"}');
}



?>

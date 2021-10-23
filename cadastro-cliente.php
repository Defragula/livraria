<?php

$servidor = 'localhost';
$user     = 'root';
$password = '123456';
$banco    = 'livraria';

$conexao = mysqli_connect($servidor,$user,$password,$banco) or
die('Não foi possivel conectar: '.mysqli_error($conexao));

$sqlInserir = "INSERT INTO cliente VALUES (";
$sqlInserir .= "null,'{$_POST['nome']}',";
$sqlInserir .= "'')";

$resultado = mysqli_query($conexao,$sqlInserir);

if(!$resultado){
    die('Erro: '.mysqli_error($conexao));
}else{
    echo 'Seu cadastro foi feito com sucesso';
    //header('Location: index.html');
}


?>
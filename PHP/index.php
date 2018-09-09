<?php

//HOTE:localhost
//Nom base de donnee: formation_udemy
//login: root
//mdp:...
$bdd = new PDO('mysql:host=localhost;dbname=formation_udemy;charset=utf-8', 'root', '');


?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>PHP</title>
    </head>
    <body>
        <form action="" method="post">
            <label>NOM</label>
            <input type="text" name="name"/>
            <label>EMAIL</label>
            <input type="text" name="email"/>
            <input type="submit" value="Submit"/>
        </form>
    </body>
    
</html>



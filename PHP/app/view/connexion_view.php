<!DOCTYPE html>
<html>
    
    <head>
        <?php include_once "./view/includes/head.php"?>
        <title><?= ucfirst($page)?> - Blog Ecrivain</title>
    </head>
    
    <body>
    <?php include_once "./view/includes/header.php"?>
    <h1>Connexion</h1>
    <form id="connexionForm" method="post" action="">
        <label></label>
        <input type="text" name="pseudo" id="pseudo" placeholder="Pseudo" />
        <label></label>
        <input type=password name="pwd" id="password" placeholder="*****"/>
        <input type="submit" id="buttonSubmit" value="Submit"/>
    </form>

     <?php include_once "./view/includes/footer.php"?>
    </body>
    
</html>
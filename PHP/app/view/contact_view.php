<!DOCTYPE html>
<html>
    <head>
        <?php include_once "./view/includes/head.php"?>
        <title><?= ucfirst($page)?> - Blog Ecrivain</title>
    </head>
    <body>
        <?php include_once "./view/includes/header.php"?>
        
        <h1>Contact</h1>
        <form id="contactForm" method="post" action="">
            <input type="text" name="nom" placeholder="Votre nom"/>
            <input type="text" name="prenom" placeholder="Votre prenom"/>
            <input type="text" name="email" placeholder="Votre email"/>
            <input type="textarea" id="message"name="Votre message" placeholder="Votre message"/>
            <input type="submit" id="buttonSubmit" name="btnContact" value="Submit"/>
        </form>
        
        <?php include_once "./view/includes/footer.php"?>
        </body>
</html>
<?php 
include_once '_config/config.php';
// include_once '_functions/functions.php';
// include_once '_classes/Autoloader.php';
// Autoloader::register();
// include_once '_config/db.php';

if(isset($_GET['page']) AND !empty($_GET['page'])){
    $page = trim(strtolower($_GET['page']));
} else {
    $page = 'home';
}
// Array contenant toutes les pages 
$allPages = scandir('./controllers/');

if(in_array($page.'_controllers.php', $allPages)){
    include_once './models/'.$page.'_models.php';
    include_once './controllers/'.$page.'_controllers.php';
    include_once './view/'.$page.'_view.php';
    
} else {
    echo 'Erreur 404';
}
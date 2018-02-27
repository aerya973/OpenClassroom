<?php
//chargement des scripts
define('RBTEST_VERSION','1.0.0');

function rbtest_scripts(){
    wp_enqueue_style ('rbtest_bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css', array() , 'RBTEST_VERSION', 'all');
    wp_enqueue_style ('rbtest_custom', get_template_directory_uri() . '/style.css', array('rbtest_bootstrap') , 'RBTEST', 'all');

    
} //fin de fonction rbtest_custom

add_action('wp_enqueue_scripts', 'rbtest_scripts');
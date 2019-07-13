<?php

class Contact {
}

  function new_contact() {

    if(!empty($_POST) && isset($_POST['btnContact'])){
      if(isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email'])&& isset($_POST['message'])){
        if(!empty($_POST['nom']) && !empty($_POST['prenom']) && !empty($_POST['email']) && !empty($_POST['message']) ){
          $nom = str_secur($_POST['nom']);
          $prenom = str_secur($_POST['prenom']);
          $email = str_secur($_POST['email']);
          $message .= ' - email envoye par: ' . $firstname . ' : ' . $email;
    
          //SAVE IN DB
          write_db("INSERT INTO contact (prenom, nom, email) VALUES ('$prenom', '$nom', '$email')");
          
          //SEND EMAIL
          mail('maboitemail@monsite.fr', 'On me contacte sur mon site', $message);
        } else{
          $error = "Vous devez remplir tous les champs";
        }
      } else {
      $error = "Une erreurs s'est produite";
      }
    }
  };

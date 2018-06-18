/*= CORE ============================================*/

let listeMots = ["armoire","boucle","buisson","bureau","chaise","carton","couteau","fichier","garage","glace","journal","kiwi","lampe","liste","montagne","remise","sandale","taxi","vampire","volant"];

class Joueur {
    constructor(name, vies) {
        this.name = name;
        this.vies = 10;
    }
    
    bonjour() {
        const choix = confirm("Bonjour " + this.name + " Voulez vous jouer au jeu du pendu ?");
        if (choix) {
            return true;
        } else {
            return false;
        }
    }
}

class Partie {
    constructor(lettreDevine, lettreNonDevine, lettreRate){
        this.lettreDevine = lettreDevine;
        this.lettreNonDevine = lettreNonDevine;
        this.lettreRate = 0;
        this.motATrouver = this.motAleatoire();
        this.motRecompose = this.initialisation();
    }
    
    // retourne le mot choisi Aleatoirement
    motAleatoire(){
        let hasard = Math.floor(Math.random()*20);
        return (listeMots[hasard]);
    }
    
    demandeLettre(){
        let lettre = prompt("Choisissez une lettre : ").toLowerCase();
        const alphab = new RegExp(/^[a-z]+$/)
        //verifie si la lettre choisie est valide(seules les lettres sont acceptees)
        if (alphab.test(lettre)) {
            if (this.motATrouver.includes(lettre)) {
                console.log(lettre + " Ok "); 
                //si la lettre est valide, lancer la recherche dans le mot
                for(let i = 0 ; i < this.motATrouver.length ; i++){
                // Si la lettre est presente dans le mot afficher message de validatiom    
                    if(lettre === this.motATrouver[i]){
                        this.motRecompose = this.motRecompose.substring(0, i) + lettre + this.motRecompose.substring(i + 1);
                        console.log(this.motRecompose);
                    }
                }
            } else {
                joueur.vies = joueur.vies - 1;
                this.modifyHtmlVies();
                //console.log("Il reste " + joueur.vies + " vies")
            }
            
        } else {
            console.log("Le mot a deviner ne comporte que des lettres, veuillez reessayer");
        }
        
        return this.motRecompose; 
        //console.log(this.motATrouver);
        //console.log(motRecompose);
        //console.log(joueur.vies)
    }
    
    initialisation(){
        return "_".repeat(this.motATrouver.length);
    }
/*creation d'une div dans le contenu HTML representant les vies restantes !!PB affiche les erreurs une fois que le jeu est termine */
    modifyHtmlVies(){
        let life = document.createElement("div");
        life.id = "restLife";
        life.textContent = "Il vous reste " + joueur.vies + " vies";
        document.getElementById("bloc1").appendChild(life);
    }
}

/*= MAIN ==============================================*/

let joueur = new Joueur(prompt("Entrez votre nom: "));
let partie = new Partie;

console.log(partie.motRecompose);
console.log(partie.motATrouver);

joueur.bonjour();
while ((partie.motRecompose != partie.motATrouver)&&(joueur.vies > 0)){
    partie.demandeLettre();
}

if (joueur.vies <= 0){
    document.write("Vous avez perdu. ")
} else if ((partie.motRecompose === partie.motATrouver)&&(joueur.vies > 0)){
    document.write("Bravo vous avez trouve!")
}
class Diapo {
    constructor(slideIndex){
        this.slideIndex = 1;
        this.boutonGauche = document.getElementById("boutonGauche");
        this.boutonDroite = document.getElementById("boutonDroite");
        this.clickEvent();
        this.keyEvent();
        
    }
    
    clickEvent(){
        this.boutonGauche.addEventListener("click", (event) => {
            this.plusDivs(-1);
        }  );
        this.boutonDroite.addEventListener("click", (event) => {
            this.plusDivs(1);
        }  );
        
    }
    
    keyEvent(){
        document.onkeyup = () => {
            var selectDiapo = document.getElementById('diapo');
            //previous
            if (event.keyCode == 37) {
            this.plusDivs(-1);
            //Next
            } else if (event.keyCode == 39) {
           this.plusDivs(1);
            }
        }   
    }
    
    plusDivs(n) {
        this.showDivs(this.slideIndex += n);
    }

    showDivs(n) {
        let x = document.getElementsByClassName("slide");
        if (n > x.length) {
            this.slideIndex = 1;
        }    
        if (n < 1) {
            this.slideIndex = x.length;
        }
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        x[this.slideIndex-1].style.display = "block";  
    }
    
}

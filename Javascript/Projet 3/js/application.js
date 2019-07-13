class Application {
    constructor(){
        this.diaporama = new Diapo();
        this.diaporama.showDivs(1);
        this.map = new Map();
        this.map.initMap();
        this.reservation = new Reservation();
        if(sessionStorage.getItem('date') != null){
             this.reservation.countTimer();
        }
        this.map.addMarker();
    } 
}

var application = new Application();

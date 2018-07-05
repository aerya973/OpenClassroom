class Application {
    constructor(){
        this.diaporama = new Diapo();
        this.diaporama.showDivs(1);
        this.map = new Map();
        this.map.initMap();
        this.map.addMarker();
        //this.reservation = new Reservation();

    } 
}

var application = new Application();



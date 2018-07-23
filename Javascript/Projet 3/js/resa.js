class Reservation {
  constructor(marker){
    this.station = marker.station;
    this.clickBouton();
    this.signature = new Signature();
    this.tempsResa = 0.1;
    this.timer = null;
  }


  infoStation(marker){
 
    document.getElementById('nameStation').innerHTML = marker.station.name;
    document.getElementById('stationAdress').innerHTML = marker.station.address;
    document.getElementById('bikeStands').innerHTML = marker.station.available_bikes;
  }

  clickBouton(){
    let bouton = document.getElementById('boutton');
    bouton.addEventListener('click', function(){
      localStorage.setItem('station', application.reservation.station.name);
      let date = new Date();
      localStorage.setItem('date', date.getTime());
      this.timer = application.reservation.countTimer();
      this.timer;
    
    }, false); 
  }
  
  countTimer() {
    setInterval(function() {
      let dateResa = localStorage.getItem('date');
      let dateNow = new Date().getTime();
      let tempsEcoule = Number.parseFloat((dateNow - dateResa)/1000).toFixed(0);
      let tempsTotal = application.reservation.tempsResa * 60;
      let tempsRestant = tempsTotal - tempsEcoule;
      let minutes = Math.floor(tempsRestant/60);
      let secondes = tempsRestant%60;
      let timeZone = document.getElementById("decompte");
      timeZone.innerHTML = minutes + ":" + secondes;
      
      if (tempsEcoule > tempsTotal) {
         timeZone.innerHTML = "Reservation terminée";
         window.location.reload()
      }
    }, 1000);
  }
}

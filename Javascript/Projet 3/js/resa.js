class Reservation {
  constructor(){
    this.station = null;
    this.createButton();
    this.clickBouton();
    this.signature = new Signature();
    this.tempsResa = 20;
    this.timer = null;
  }


  infoStation(marker){
    this.station = marker.station;
    document.getElementById('nameStation').innerHTML = "<span>Nom de la station</br></span>" + marker.station.name;
    document.getElementById('stationAdress').innerHTML = "<span>Adresse</br></span>" + marker.station.address;
    document.getElementById('bikeStands').innerHTML = "<span>Places disponibles</span> " + marker.station.available_bikes;
  }

  createButton(){
      let divInfo = document.getElementById("infos");
      let btn = document.createElement("BUTTON");
      btn.id = "boutton";
      let text = document.createTextNode("Reserver");
      btn.appendChild(text);
      divInfo.appendChild(btn);
  }
    
  clickBouton(marker){
    let bouton = document.getElementById('boutton');
    bouton.addEventListener('click', function(){
      localStorage.setItem('station', application.reservation.station.name);
      let date = new Date();
      localStorage.setItem('date', date.getTime());
      this.timer = application.reservation.countTimer();
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
      let nameStation = JSON.stringify(application.reservation.station.name);
      let nameStationClear = nameStation.replace(/[^A-Za-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+/g, ' ');
      timeZone.innerHTML = "Vous avez réservé un vélo à la station :</br> "+ nameStationClear + "</br>" + "Il vous reste : " + minutes + ":" + secondes + "s";
      
      if (tempsEcoule > tempsTotal) {
         timeZone.innerHTML = "Reservation terminée";
         window.location.reload()
      }
    }, 1000);
  }
}

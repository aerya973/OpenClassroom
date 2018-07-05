class Reservation extends Map {
  constructor(marker){
    super();
    // super();
  }
  
  takeInfo(){
    return this.addMarker();
  }

  infoStation(){
    this.takeInfo();
    
    console.log(this.marker);
    let stationOk = document.getElementById('nameStation').innerHTML = this.marker.title;
    let addressOk = document.getElementById('stationAdress').innerHTML = this.marker.address;
    let availableOk = document.getElementById('bikeStands').innerHTML = this.marker.available;
    // console.log("ok");

  }
}


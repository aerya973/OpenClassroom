class Reservation {
  constructor(){
  }


  infoStation(marker){
    document.getElementById('nameStation').innerHTML = marker.station.name;
    document.getElementById('stationAdress').innerHTML = marker.station.address;
    document.getElementById('bikeStands').innerHTML = marker.station.available_bikes;
  }
}

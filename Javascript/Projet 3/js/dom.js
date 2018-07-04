/*
ESSAI CODE SEPARATION DON et class MAP

class Dom {
    constructor(){
        this.map = new Map();

   
    }
        
  addMarker(){
    // Loop data and create marker
    for (var value in this.data) {
      let markerLatlng = new this.google.maps.LatLng(
        this.data[value].position.lat,
        this.data[value].position.lng
      );
      
      let marker = new this.google.maps.Marker({
        position: markerLatlng,
        title: this.data[value].name,
        address: this.data[value].address,
        available: this.data[value].available_bike_stands,
        clickable:true
      }); 
      marker.setMap(this.map);
    }
  }
      
    createContent(){
        let selectId = document.getElementById('infos');
        let createDiv = selectId.createElement('div');
        let addName =  createDiv.innerHTML = this.marker.title;
        this.marker.addListener('click', function(){
            document.getElementById('nameStation').innerHTML = this.marker.title;
            document.getElementById('stationAdress').innerHTML = this.marker.address;
            document.getElementById('bikeStands').innerHTML = this.marker.available;
        }
        
    )}
    
}*/
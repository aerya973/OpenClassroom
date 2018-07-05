class Map {
  constructor(){
    this.map = null;
    this.google = window.google;
    this.data = this.getData();
    this.marker = null;
    // this.dataURL = 'https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=fdd1c26d4128f6e256aeca7dc6f3876ca42c1fe0';
  }
  
  initMap(){
    this.map = new this.google.maps.Map(document.getElementById('map'), {
      center: {lat: 45.750000, lng: 4.850000},
      zoom:12
    });
  }
    
    
  addMarker(){
    // Loop data and create marker
    for (var value in this.data) {
      let markerLatlng = new this.google.maps.LatLng(
        this.data[value].position.lat,
        this.data[value].position.lng
      );
      
      this.marker = new this.google.maps.Marker({
        position: markerLatlng,
        title: this.data[value].name,
        address: this.data[value].address,
        available: this.data[value].available_bike_stands,
        clickable:true
      });

      this.marker.setMap(this.map);
      
      this.marker.addListener('click', function(){
        let reservation = new Reservation(this.marker);
        reservation.infoStation();
      
      });
    }
  }
 
  getData(){
    let url = 'https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=fdd1c26d4128f6e256aeca7dc6f3876ca42c1fe0';
    const req = new XMLHttpRequest();
    
    req.open('GET', url, false); 
    req.send(null);
    
    if(req.status === 200) {
      var data = JSON.parse(req.responseText);
    } else {
      console.log("non");
    }
    return data;
  }
}
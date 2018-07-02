class Map {
  constructor(){
    this.map = null;
    this.google = window.google;
    this.data = this.getMarker();
  }
  
  initMap(){
    this.map = new this.google.maps.Map(document.getElementById('map'), {
      center: {lat: 45.750000, lng: 4.850000},
      zoom: 8
    });
  }
    
    
  addMarker(){
    // Loop data and create marker
    for (var value in this.data) {
      let markerLatlng = new this.google.maps.LatLng(
        this.data[value].position.lat,
        this.data[value].position.lng
      );
      
      var marker = new this.google.maps.Marker({
        position: markerLatlng,
        title: this.data[value].name
      });
      
      marker.setMap(this.map);
    }
  }
 
  getMarker(){
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
  
  // getInfo(){
  //   console.log(this.data);
  //   this.google.maps.event.addListener(this.addMarker() ,'click',function() {
  //     this.map.setZoom(9);
  //   });
  // }
}

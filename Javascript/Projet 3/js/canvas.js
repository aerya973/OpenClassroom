class Signature {
    constructor(){
        this.canvas = document.createElement("CANVAS");
        this.canvas.id = "signerIci";
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 200;
        this.canvas.height = 200;
        this.mouseX = event.pageX - event.offsetLeft;
        this.mouseY = event.pageY - event.offsetTop;
        this.createCanvas();
        this.mouseEvent();
    }
    
    createCanvas(){
        let selectZone = document.getElementById('signature');
        selectZone.appendChild(this.canvas);
    }

    
    mouseEvent(){
        this.canvas.addEventListener("mousedown", this.pointerDown, false);
        this.canvas.addEventListener("mouseup", this.pointerUp, false);
        this.canvas.addEventListener( 'mousemove', function(event) {
            // if(event.offsetX){
            //     this.mouseX = event.offsetX;
            //     this.mouseY = event.offsetY;
            // } else {
            //     this.mouseX = event.pageX - event.target.offsetLeft;
            //     this.mouseY = event.pageY - event.target.offsetTop;
            // }
            application.reservation.signature.paint();
        }, false );
    }
    
    paint() {
        application.reservation.signature.ctx.lineTo(application.reservation.signature.mouseX, application.reservation.signature.mouseY);
        application.reservation.signature.ctx.stroke();
    }
    
    pointerDown() {
        application.reservation.signature.ctx.beginPath();
        application.reservation.signature.ctx.moveTo(application.reservation.signature.mouseX , application.reservation.signature.mouseY);
        application.reservation.signature.mouseX = event.offsetX;
        application.reservation.signature.mouseY = event.offsetY;
        
    }
    
    pointerUp() {
        application.reservation.signature.ctx.closePath();
    }
}


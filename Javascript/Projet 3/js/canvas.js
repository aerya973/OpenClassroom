class Signature {
    constructor(){
        this.canvas = document.createElement("CANVAS");
        this.canvas.id = "signerIci";
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 200;
        this.canvas.height = 200;
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 3;
        this.createCanvas();
        this.mouseEvent();
        this.activ = false;
    }
    
    createCanvas(){
        let selectZone = document.getElementById('signature');
        selectZone.appendChild(this.canvas);
        let maximize = document.getElementById("infos");
        maximize.style.height = "500px";
    }

    
    mouseEvent(){
        this.canvas.addEventListener("mousedown", this.pointerDown, false);
        
        this.canvas.addEventListener('mousemove', function() {
            application.reservation.signature.paint();
        }, false );
        this.canvas.addEventListener("mouseup", this.pointerUp, false);
    }
    
    
    paint() {
        if (application.reservation.signature.activ){
            application.reservation.signature.ctx.lineTo(event.offsetX, event.offsetY);
            application.reservation.signature.ctx.stroke();
            [application.reservation.signature.mouseX, application.reservation.signature.mouseY] = [event.offsetX, event.offsetY];
        }
    }
    
    pointerDown() {
        application.reservation.signature.activ = true;
        application.reservation.signature.ctx.beginPath();
        application.reservation.signature.ctx.moveTo(application.reservation.signature.mouseX , application.reservation.signature.mouseY);
        application.reservation.signature.mouseX = event.offsetX;
        application.reservation.signature.mouseY = event.offsetY;
        
    }
    
    pointerUp() {
        application.reservation.signature.activ = false;
        application.reservation.signature.ctx.closePath();
    }
}


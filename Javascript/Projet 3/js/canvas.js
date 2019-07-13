class Signature {
    constructor(){
        this.canvas = document.createElement("CANVAS");
        this.canvas.id = "signerIci";
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 200;
        this.canvas.height = 200;
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 2;
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
        this.canvas.addEventListener("mousedown",this.pointerDown.bind(this), false);
        
        this.canvas.addEventListener('mousemove', (event) => {
            this.paint(event);
        }, false );
        this.canvas.addEventListener("mouseup", this.pointerUp.bind(this), false);
    }
    

    paint(event) {
        if (this.activ){
            if(this.ctx.isPointInStroke(this.mouseX,this.mouseY) == true){
                document.getElementById("boutton").disabled = false;
            }
            this.ctx.lineTo(event.offsetX, event.offsetY);
            this.ctx.stroke();
            [this.mouseX, this.mouseY] = [event.offsetX, event.offsetY];
        }
    }
    
    pointerDown(event) {
        this.activ = true;
        this.ctx.beginPath();
        this.ctx.moveTo(this.mouseX , this.mouseY);
        this.mouseX = event.offsetX;
        this.mouseY = event.offsetY;
        
    }
    
    pointerUp() {
        this.activ = false;
        this.ctx.closePath();
    }
}


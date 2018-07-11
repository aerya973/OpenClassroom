 class Signature {
     constructor(){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 300;
        this.canvas.height = 300;

        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 20;
        this.ctx.strokeStyle = '#ac0000';
        
        this.isDrawing = false;
        this.lastX = 0;
        this.lastY = 0;

     }
   
  draw(e) {

    if(this.isDrawing === true){ 

        this.ctx.beginPath();
        this.ctx.moveTo(this.lastX, this.lastY);
        this.ctx.lineTo(e.offsetX, e.offsetY);
        this.ctx.stroke();
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    }
  }

    mouseEvent(){
        this.canvas.addEventListener('mousedown', (e) => {
            this.isDrawing = true;
            [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
        });
        
        this.canvas.addEventListener('mousemove', () => this.isDrawing = false);
        this.canvas.addEventListener('mouseup', () => this.isDrawing = false);
        this.canvas.addEventListener('mouseout', () => this.isDrawing = false);
    }

 }
 
let signature = new Signature();
this.draw();
this.mouseEvent();

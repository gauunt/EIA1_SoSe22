namespace L11_InteraktionLuftfahrt{
    export class Lander extends Moveable {
         size: number;
 
     
         public constructor(_size: number, _position?: Vector) {
         console.log("Lander constructor");

         super(_position);

         if (_position)
         this.position = _position.copy();
         else
         this.position = new Vector (0,0);
         this.velocity = new Vector (0,0);
         this.velocity.random(50, 100);
 
         
         this.size = _size;
     }

    public move(_timeslice: number): void {
        super.move(0.01);
    }  

   
    public draw(): void {
        console.log("Lander draw");

        let canvas: HTMLCanvasElement = document.querySelector("canvas");
            let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        //färbt in random color (benutzt bei Paragliders und Körper Personen)
    //function randomColor() {
        //return '#' + Math.floor(Math.random()*0xffffff).toString(16);
    //}
        //schirm
        crc2.save();
        //crc2.scale(1, 1);
        crc2.translate(this.position.x, this.position.y);
        crc2.beginPath();
        crc2.ellipse(0, -70, 110, 15, 0, 0, 0.1, true);
        crc2.fillStyle = "pink";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        //seil links
        crc2.save();
        //crc2.scale(1, 1);
        crc2.beginPath();
        crc2.translate(this.position.x, this.position.y);
        crc2.moveTo(0, 20);
        crc2.lineTo(-60, -60);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.restore();

        //seil rechts
        crc2.save();
        //crc2.scale(1, 1);
        crc2.beginPath();
        crc2.translate(this.position.x, this.position.y);
        crc2.moveTo(70, -60);
        crc2.lineTo(0, 20);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.restore();

        //körper Person
        crc2.save();
        crc2.beginPath();
        crc2.translate(this.position.x, this.position.y);
        crc2.moveTo(0, 0);
        crc2.lineTo(-10, 30);
        crc2.lineTo(10, 30);
        crc2.closePath();
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.restore();

        //kopf person
        crc2.save();
        crc2.beginPath();
        crc2.translate(this.position.x, this.position.y);
        crc2.arc(0, 0, 6, 0, 2*Math.PI, true); 
        crc2.fillStyle = "#d1bc8a";
        crc2.closePath();
        crc2.fill();
        crc2.restore();

    }
}
}
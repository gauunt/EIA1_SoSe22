namespace L102_LuftfahrtPolymorphy {
    export class Ballon extends Moveable {
         size: number;
 
     
         constructor(_size: number, _position?: Vector) {
         console.log("Ballon constructor");

         super(_position);

         if (_position)
         this.position = _position.copy();
         else
         this.position = new Vector (0,0);
         this.velocity = new VectorBallon (0,0);
         this.velocity.random(50, 100);
 
         
         this.size = _size;
     }

     move(_timeslice: number): void {
        super.move(0.01);
    }  

   
    draw(): void {
        console.log("Ballon draw");

        let canvas: HTMLCanvasElement = document.querySelector("canvas");
            let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        //färbt in random color (benutzt bei Paragliders und Körper Personen)
    //function randomColor() {
        //return '#' + Math.floor(Math.random()*0xffffff).toString(16);
    //}
        //ballon
        crc2.save();
        //crc2.scale(1, 1);
        crc2.translate(this.position.x, this.position.y);
        crc2.beginPath();
        crc2.ellipse(0, 120, 50, 50, 0, 0, 0.1, true);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        //seil links
        crc2.save();
        //crc2.scale(1, 1);
        crc2.beginPath();
        crc2.translate(this.position.x, this.position.y);
        crc2.moveTo(-7, 200);
        crc2.lineTo(-7, 170);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.restore();

        //seil rechts
        crc2.save();
        //crc2.scale(1, 1);
        crc2.beginPath();
        crc2.translate(this.position.x, this.position.y);
        crc2.moveTo(7, 200);
        crc2.lineTo(7, 170);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.restore();

        
        //ballon korb
        crc2.save();
        //crc2.scale(1.5, 1);
        crc2.beginPath();
        //crc2.translate(randomX, randomY);
        crc2.translate(this.position.x, this.position.y);
        crc2.moveTo(15, 200);
        crc2.lineTo(-15, 200);
        crc2.lineTo(-15, 230);
        crc2.lineTo(15, 230);
        crc2.fillStyle = "brown";
        crc2.fill();
        //crc2.closePath();
        crc2.restore();

        //körper
        //crc2.save();
        //crc2.beginPath();
        //crc2.translate(this.position.x, this.position.y);
        //crc2.moveTo(0, 0);
        //crc2.lineTo(-10, 30);
        //crc2.lineTo(10, 30);
        //crc2.closePath();
        //crc2.fillStyle = "white";
        //crc2.fill();
        //crc2.restore();

    }
}
}
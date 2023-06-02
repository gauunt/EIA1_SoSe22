namespace L092_LuftfahrtClasses {
    export class Paraglider {
         position: Vector;
         velocity: Vector;
         size: number;
 
     
         constructor(_size: number) {
         console.log("Paragliders constructor");
         this.position = new Vector (0,0);
         this.velocity = new Vector (0,0);
         this.velocity.random(50, 100);
 
         
         this.size = _size;
     }

     move(_timeslice: number): void {
        console.log("Paragliders move");

        let canvas: HTMLCanvasElement = document.querySelector("canvas");
            let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
        offset.scale(_timeslice);
        this.position.add(offset);

        if (this.position.x < 0)
            this.position.x += crc2.canvas.width;
        if (this.position.y < 0)
            this.position.y += crc2.canvas.height;
        if (this.position.x > crc2.canvas.width)
            this.position.x -= crc2.canvas.width;
        if (this.position.y > crc2.canvas.height)
            this.position.y -= crc2.canvas.height;
    }  

   
    draw(): void {
        console.log("Paragliders draw");

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
        crc2.fillStyle = "blue";
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
        crc2.fillStyle = "white";
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
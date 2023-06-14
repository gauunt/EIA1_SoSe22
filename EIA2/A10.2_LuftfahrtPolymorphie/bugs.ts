namespace L102_LuftfahrtPolymorphy {
   
   
    export class Bug extends Moveable {
        size: number;

    
        constructor(_size: number, _position?: Vector) {
        console.log("Bugs constructor");

        super(_position);
        
        if (_position)
        this.position = _position.copy();
        else
        this.position = new Vector (0,0);

        this.velocity = new Vector (0,0);
        this.velocity.random(100, 200);
        this.size = _size;
    }



    draw(): void {
        console.log("Bugs draw");

        let canvas: HTMLCanvasElement = document.querySelector("canvas");
            let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        //flügel1
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.beginPath();
        crc2.ellipse(-17, 10, 7, 15, 2.2, 0, 0.1, true);
        crc2.fillStyle = "#bebebe";
        crc2.fill();
        crc2.strokeStyle = "grey";
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        //flügel2
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.beginPath();
        crc2.ellipse(-10, 10, 7, 15, 3, 0, 0.1, true);
        crc2.fillStyle = "#bebebe";
        crc2.fill();
        crc2.strokeStyle = "grey";
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

         //körper
         crc2.save();
         crc2.translate(this.position.x, this.position.y);
         crc2.beginPath();
         crc2.ellipse(-10, 18, 10, 20, 1.1, 0, 0.1, true);
         crc2.fillStyle = "black";
         crc2.fill();
         crc2.closePath();
         crc2.restore();
        }
    
        move(_timeslice: number): void {
            super.move(0.09);

    
    }
}
} 
    

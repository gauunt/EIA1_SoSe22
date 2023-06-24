var L11_InteraktionLuftfahrt;
(function (L11_InteraktionLuftfahrt) {
    class Bug extends L11_InteraktionLuftfahrt.Moveable {
        size;
        constructor(_size, _position) {
            console.log("Bugs constructor");
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_InteraktionLuftfahrt.Vector(0, 0);
            this.velocity = new L11_InteraktionLuftfahrt.Vector(0, 0);
            this.velocity.random(100, 200);
            this.size = _size;
        }
        draw() {
            console.log("Bugs draw");
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
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
        move(_timeslice) {
            super.move(0.01);
        }
    }
    L11_InteraktionLuftfahrt.Bug = Bug;
})(L11_InteraktionLuftfahrt || (L11_InteraktionLuftfahrt = {}));
//# sourceMappingURL=bugs.js.map
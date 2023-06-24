var L102_LuftfahrtPolymorphy;
(function (L102_LuftfahrtPolymorphy) {
    class Ballon extends L102_LuftfahrtPolymorphy.Moveable {
        size;
        constructor(_size, _position) {
            console.log("Ballon constructor");
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L102_LuftfahrtPolymorphy.Vector(0, 0);
            this.velocity = new L102_LuftfahrtPolymorphy.VectorBallon(0, 0);
            this.velocity.random(50, 100);
            this.size = _size;
        }
        move(_timeslice) {
            super.move(0.002);
        }
        draw() {
            console.log("Ballon draw");
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
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
    L102_LuftfahrtPolymorphy.Ballon = Ballon;
})(L102_LuftfahrtPolymorphy || (L102_LuftfahrtPolymorphy = {}));
//# sourceMappingURL=ballon.js.map
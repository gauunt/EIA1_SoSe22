var L102_LuftfahrtPolymorphy;
(function (L102_LuftfahrtPolymorphy) {
    class Läufer extends L102_LuftfahrtPolymorphy.Moveable {
        size;
        constructor(_size, _position) {
            console.log("Läufer constructor");
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L102_LuftfahrtPolymorphy.Vector(0, 0);
            this.velocity = new L102_LuftfahrtPolymorphy.VectorLäufer(0, 0);
            this.velocity.random(50, 100);
            this.size = _size;
        }
        move(_timeslice) {
            super.move(0.09);
        }
        draw() {
            console.log("Läufer draw");
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            //färbt in random color (benutzt bei Paragliders und Körper Personen)
            //function randomColor() {
            //return '#' + Math.floor(Math.random()*0xffffff).toString(16);
            //}
            //körper Person
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.moveTo(0, 600);
            crc2.lineTo(-10, 630);
            crc2.lineTo(10, 630);
            crc2.closePath();
            crc2.fillStyle = "purple";
            crc2.fill();
            crc2.restore();
            //kopf person
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.moveTo(0, 550);
            crc2.arc(0, 600, 6, 0, 2 * Math.PI, true);
            crc2.fillStyle = "#d1bc8a";
            crc2.closePath();
            crc2.fill();
            crc2.restore();
        }
    }
    L102_LuftfahrtPolymorphy.Läufer = Läufer;
})(L102_LuftfahrtPolymorphy || (L102_LuftfahrtPolymorphy = {}));
//# sourceMappingURL=l%C3%A4ufer.js.map
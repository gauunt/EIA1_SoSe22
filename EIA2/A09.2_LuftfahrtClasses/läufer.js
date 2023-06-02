var L092_LuftfahrtClasses;
(function (L092_LuftfahrtClasses) {
    class Läufer {
        position;
        velocity;
        size;
        constructor(_size) {
            console.log("Läufer constructor");
            this.position = new L092_LuftfahrtClasses.VectorLäufer(0, 0);
            this.velocity = new L092_LuftfahrtClasses.VectorLäufer(0, 0);
            this.velocity.random(50, 100);
            this.size = _size;
        }
        move(_timeslice) {
            console.log("Läufer move");
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            let offset = new L092_LuftfahrtClasses.VectorLäufer(this.velocity.x, this.velocity.y);
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
    L092_LuftfahrtClasses.Läufer = Läufer;
})(L092_LuftfahrtClasses || (L092_LuftfahrtClasses = {}));
//# sourceMappingURL=l%C3%A4ufer.js.map
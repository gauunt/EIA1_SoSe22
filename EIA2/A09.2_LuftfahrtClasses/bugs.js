var L092_LuftfahrtClasses;
(function (L092_LuftfahrtClasses) {
    class Bug {
        position;
        velocity;
        size;
        constructor(_size) {
            console.log("Bugs constructor");
            this.position = new L092_LuftfahrtClasses.Vector(0, 0);
            this.velocity = new L092_LuftfahrtClasses.Vector(0, 0);
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
            console.log("Bugs move");
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            let offset = new L092_LuftfahrtClasses.Vector(this.velocity.x, this.velocity.y);
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
    }
    L092_LuftfahrtClasses.Bug = Bug;
})(L092_LuftfahrtClasses || (L092_LuftfahrtClasses = {}));
//# sourceMappingURL=bugs.js.map
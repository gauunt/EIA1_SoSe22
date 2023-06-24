var L11_InteraktionLuftfahrt;
(function (L11_InteraktionLuftfahrt) {
    class Moveable {
        position;
        velocity;
        changevelocity(direction) {
            let velocitychange = 5;
            this.velocity.x += direction * velocitychange;
        }
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_InteraktionLuftfahrt.Vector(0, 0);
            this.velocity = new L11_InteraktionLuftfahrt.Vector(0, 0);
        }
        draw() {
            console.log("Movable move");
        }
        move(_timeslice) {
            // console.log("Bugs move");
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            let offset = this.velocity.copy();
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
    L11_InteraktionLuftfahrt.Moveable = Moveable;
})(L11_InteraktionLuftfahrt || (L11_InteraktionLuftfahrt = {}));
//# sourceMappingURL=movable.js.map
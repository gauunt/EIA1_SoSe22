var L102_LuftfahrtPolymorphy;
(function (L102_LuftfahrtPolymorphy) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L102_LuftfahrtPolymorphy.Vector(0, 0);
            this.velocity = new L102_LuftfahrtPolymorphy.Vector(0, 0);
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
    L102_LuftfahrtPolymorphy.Moveable = Moveable;
})(L102_LuftfahrtPolymorphy || (L102_LuftfahrtPolymorphy = {}));
//# sourceMappingURL=movable.js.map
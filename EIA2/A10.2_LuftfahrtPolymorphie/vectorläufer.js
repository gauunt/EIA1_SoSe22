var L102_LuftfahrtPolymorphy;
(function (L102_LuftfahrtPolymorphy) {
    class VectorLäufer {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            let randomNum = Math.random() * 1;
            let randomNum2 = Math.random() * 50;
            this.x = randomNum2;
            this.y = randomNum;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = 1;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            return new L102_LuftfahrtPolymorphy.Vector(this.x, this.y);
        }
    }
    L102_LuftfahrtPolymorphy.VectorLäufer = VectorLäufer;
})(L102_LuftfahrtPolymorphy || (L102_LuftfahrtPolymorphy = {}));
//# sourceMappingURL=vectorl%C3%A4ufer.js.map
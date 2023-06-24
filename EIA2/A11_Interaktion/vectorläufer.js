var L11_InteraktionLuftfahrt;
(function (L11_InteraktionLuftfahrt) {
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
            return new L11_InteraktionLuftfahrt.Vector(this.x, this.y);
        }
    }
    L11_InteraktionLuftfahrt.VectorLäufer = VectorLäufer;
})(L11_InteraktionLuftfahrt || (L11_InteraktionLuftfahrt = {}));
//# sourceMappingURL=vectorl%C3%A4ufer.js.map
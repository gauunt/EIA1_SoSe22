var L092_LuftfahrtClasses;
(function (L092_LuftfahrtClasses) {
    class VectorBallon {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            let randomNum = Math.random() * 1;
            let randomNum2 = Math.random() * 100;
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
    }
    L092_LuftfahrtClasses.VectorBallon = VectorBallon;
})(L092_LuftfahrtClasses || (L092_LuftfahrtClasses = {}));
//# sourceMappingURL=vectorballon.js.map
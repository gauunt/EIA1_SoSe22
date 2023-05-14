/*
Aufgabe:L08_GenerierativeKunst
Name: Marie Walter
Matrikel: 271138
Datum: 04.05.2023
Quellen: W3schools, letztes Semester
*/
var A082;
(function (A082) {
    let h;
    let s;
    let l;
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTrees({ x: 500, y: 600 });
        drawLandingfield({ x: 500, y: 500 });
        drawParaglide({ x: 190, y: 90 });
        drawParaglide({ x: 150, y: 250 });
        drawParaglide({ x: 520, y: 280 });
        drawParaglide({ x: 400, y: 100 });
        drawBugs();
    }
    function drawBugs() {
        let canvas = document.querySelector("canvas");
        for (let index = 0; index < 19; index++) {
            let randomX = Math.random() * (canvas.width - 1) + 1;
            let randomY = Math.random() * (canvas.height - 1) + 1;
            //wing1
            crc2.save();
            crc2.translate(randomX, randomY);
            crc2.beginPath();
            crc2.ellipse(-17, 10, 7, 15, 2.2, 0, 0.1, true);
            crc2.fillStyle = "grey";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            //wing2
            crc2.save();
            crc2.translate(randomX, randomY);
            crc2.beginPath();
            crc2.ellipse(-10, 10, 7, 15, 3, 0, 0.1, true);
            crc2.fillStyle = "grey";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            //body
            crc2.save();
            crc2.translate(randomX, randomY);
            crc2.beginPath();
            crc2.ellipse(-10, 18, 10, 20, 1.1, 0, 0.1, true);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
    function drawParaglide(_position) {
        h = Math.random() * 360;
        s = Math.random() * 100;
        l = Math.random() * 100;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 10);
        crc2.lineTo(20, 30);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.stroke();
        //seile
        crc2.beginPath();
        crc2.moveTo(0, 18);
        crc2.lineTo(20, -15);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.stroke();
        //schirm
        crc2.beginPath();
        crc2.ellipse(0, -18, 25, 8, 0, 0, 2 * Math.PI, true);
        crc2.closePath();
        crc2.fillStyle = "hsl(" + h + "," + s + "% , " + l + "%)";
        crc2.fill();
        //körper person
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-10, 30);
        crc2.lineTo(10, 30);
        crc2.closePath();
        crc2.fillStyle = "hsl(" + h + "," + s + "% , " + l + "%)";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(0, 0, 6, 0, 2 * Math.PI, true);
        crc2.fillStyle = "#d1bc8a";
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }
    ;
    function drawTrees(_position) {
        let canvas = document.querySelector("canvas");
        for (let index = 0; index < 7; index++) {
            let randomX = Math.random() * (canvas.width - 1) + 1;
            let randomY = Math.random() * ((canvas.height - 170) - 500) + 500;
            console.log("trees");
            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            crc2.translate(randomX, randomY);
            crc2.scale(2, 2);
            crc2.moveTo(20, 0);
            crc2.lineTo(-20, 0);
            crc2.lineTo(-15, -15);
            crc2.lineTo(-18, -15);
            crc2.lineTo(-10, -36);
            crc2.lineTo(-12, -36);
            crc2.lineTo(-5, -54);
            crc2.lineTo(-7, -54);
            crc2.lineTo(0, -73);
            crc2.lineTo(7, -54);
            crc2.lineTo(5, -54);
            crc2.lineTo(12, -36);
            crc2.lineTo(10, -36);
            crc2.lineTo(18, -15);
            crc2.lineTo(15, -15);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            crc2.translate(randomX, randomY);
            crc2.moveTo(5, 0);
            crc2.lineTo(-5, 0);
            crc2.lineTo(-5, 15);
            crc2.lineTo(5, 15);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
    function drawLandingfield(_position) {
        let canvas = document.querySelector("canvas");
        for (let index = 0; index < 7; index++) {
            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            crc2.translate(800, 600);
            crc2.moveTo(30, 0);
            crc2.lineTo(300, 0);
            crc2.lineTo(250, 200);
            crc2.lineTo(-30, 200);
            crc2.fillStyle = "grey";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(20, 20%, 80%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 80;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
})(A082 || (A082 = {}));
//# sourceMappingURL=A08.2_Versuch.js.map
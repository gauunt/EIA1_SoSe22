/*
Aufgabe:L08.2_Luftfahrt
Name: Marie Walter
Matrikel: 271138
Datum: 13.05.2023
Quellen: W3schools, letztes Semester
*/

namespace A082 {
    interface VectorBackground {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        let horizon: number = crc2.canvas.height * golden;
        let posMountains: VectorBackground = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 200, "#545454", "#d3d3d3");
        drawMountains(posMountains, 50, 150, "#545454", "lightgrey");
        drawTrees({ x: 500, y: 600 });
        drawLandingfield({x: 500, y: 500});
        drawParaglide({x: 500, y:500});
        drawKiosk({x:1400, y:780});
        drawWindsock({x:700, y:780});
        drawBugs();
    }

    //Fliegen
    function drawBugs(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        for (let index: number = 0; index < 15; index++) {
            let randomX: number = Math.random() * (canvas.width - 1) + 1;
            let randomY: number = Math.random() * (canvas.height - 1) + 1;

        console.log("bugs")

        //flügel1
        crc2.save();
        crc2.translate(randomX, randomY);
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
        crc2.translate(randomX, randomY);
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
         crc2.translate(randomX, randomY);
         crc2.beginPath();
         crc2.ellipse(-10, 18, 10, 20, 1.1, 0, 0.1, true);
         crc2.fillStyle = "black";
         crc2.fill();
         crc2.closePath();
         crc2.restore();
        }
    }

    //färbt in random color (benutzt bei Paragliders und Körper Personen)
    function randomColor() {
        return '#' + Math.floor(Math.random()*0xffffff).toString(16);
    }

    //paraglider
    function drawParaglide (_position: VectorBackground): void{
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        for (let index: number = 0; index < 10; index++) {
            let randomX: number = Math.random() * (canvas.width - 1) + 1;
            let randomY: number = Math.random() * ((400) - 1) + 1;

            console.log("paraglider")
            
            //schirm
            crc2.save();
            crc2.scale(1.1, 1);
            crc2.translate(randomX, randomY);
            crc2.beginPath();
            crc2.ellipse(-20, -70, 110, 15, 0, 0, 0.1, true);
            crc2.fillStyle = randomColor();
            crc2.fill();
            crc2.closePath();
            crc2.restore();

            //seil links
            crc2.save();
            crc2.scale(1, 1);
            crc2.beginPath();
            crc2.translate(randomX, randomY);
            crc2.moveTo(0, 20);
            crc2.lineTo(-60, -60);
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.restore();

            //seil rechts
            crc2.save();
            crc2.scale(1, 1);
            crc2.beginPath();
            crc2.translate(randomX, randomY);
            crc2.moveTo(70, -60);
            crc2.lineTo(0, 20);
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.restore();

            //körper Person
            crc2.save();
            crc2.beginPath();
            crc2.translate(randomX, randomY);
            crc2.moveTo(0, 0);
            crc2.lineTo(-10, 30);
            crc2.lineTo(10, 30);
            crc2.closePath();
            crc2.fillStyle = randomColor();
            crc2.fill();
            crc2.restore();

            //kopf person
            crc2.save();
            crc2.beginPath();
            crc2.translate(randomX, randomY);
            crc2.arc(0, 0, 6, 0, 2*Math.PI, true); 
            crc2.fillStyle = "#d1bc8a";
            crc2.closePath();
            crc2.fill();
            crc2.restore();

        }
    }

    //bäume
    function drawTrees(_position: VectorBackground): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        for (let index: number = 0; index < 5; index++) {
            let randomX: number = Math.random() * (canvas.width - 1) + 1;
            let randomY: number = Math.random() * ((canvas.height - 105) - 500) + 600;

            //baum1
            console.log("trees");
            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            //crc2.translate(randomX, randomY);
            crc2.translate(500, 700);
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

            //stamm1
            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            //crc2.translate(randomX, randomY);
            crc2.translate(500, 700);
            crc2.moveTo(5, 0);
            crc2.lineTo(-5, 0);
            crc2.lineTo(-5, 15);
            crc2.lineTo(5, 15);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();
            crc2.restore();


            //baum2
            console.log("trees");
            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            //crc2.translate(randomX, randomY);
            crc2.translate(400, 750);
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

            //stamm2
            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            //crc2.translate(randomX, randomY);
            crc2.translate(400, 750);
            crc2.moveTo(5, 0);
            crc2.lineTo(-5, 0);
            crc2.lineTo(-5, 15);
            crc2.lineTo(5, 15);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();
            crc2.restore();


            //baum3
            console.log("trees");
            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            //crc2.translate(randomX, randomY);
            crc2.translate(550, 670);
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

            //stamm3
            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            //crc2.translate(randomX, randomY);
            crc2.translate(550, 670);
            crc2.moveTo(5, 0);
            crc2.lineTo(-5, 0);
            crc2.lineTo(-5, 15);
            crc2.lineTo(5, 15);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();
            crc2.restore();

            //baum4
            console.log("trees");
            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            //crc2.translate(randomX, randomY);
            crc2.translate(450, 640);
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

            //stamm4
            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            //crc2.translate(randomX, randomY);
            crc2.translate(450, 640);
            crc2.moveTo(5, 0);
            crc2.lineTo(-5, 0);
            crc2.lineTo(-5, 15);
            crc2.lineTo(5, 15);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();
            crc2.restore();


            //baum5
            console.log("trees");
            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            //crc2.translate(randomX, randomY);
            crc2.translate(1020, 750);
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

            //stamm5
            crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            //crc2.translate(randomX, randomY);
            crc2.translate(1020, 750);
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

    //kiosk
    function drawKiosk (_position: VectorBackground): void{
        crc2.save();
        crc2.translate(_position.x, _position.y);

        //haus
        crc2.beginPath();
        crc2.moveTo(0, -90);
        crc2.lineTo(0, 0);
        crc2.lineTo(90, 0);
        crc2.lineTo(90, -70);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();

        //dach
        crc2.beginPath();
        crc2.moveTo(90, -70);
        crc2.lineTo(-10, -93);
        crc2.closePath();
        crc2.strokeStyle = "red"
        crc2.lineWidth = 8;
        crc2.stroke();

        crc2.restore();
    }

    //Windsack
    function drawWindsock(_position: VectorBackground) {

        //Stab
        crc2.beginPath();
        crc2.fillStyle = "#46230a";
        crc2.fillRect(_position.x, _position.y, 10, 80);
        crc2.closePath();
        crc2.restore();

        //Windsack
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(800, 800);
        crc2.lineTo(800, 780);
        crc2.lineTo(700, 740);
        crc2.fillStyle = "#cc0000";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }

    //Landeplatz
    function drawLandingfield(_position: VectorBackground): void{
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        for (let index: number = 0; index < 7; index++) {

         crc2.save();
            crc2.scale(1.5, 1);
            crc2.beginPath();
            crc2.translate(600, 600);
            crc2.moveTo(30, 10);
            crc2.lineTo(300, 10);
            crc2.lineTo(250, 210);
            crc2.lineTo(-30, 210);
            crc2.lineTo(30, 10);
            crc2.fillStyle = "#3d8c40";
            crc2.fill();
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
    }
}
      

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "green");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: VectorBackground): void {
        console.log("Sun", _position);

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(20, 20%, 80%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }


    //wolke
    function drawCloud(_position: VectorBackground, _size: VectorBackground): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 80;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }


    //Berge
    function drawMountains(_position: VectorBackground, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _position, _min, _max);
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

}
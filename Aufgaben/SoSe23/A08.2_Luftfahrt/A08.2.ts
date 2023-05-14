/*
Aufgabe:L08_GenerierativeKunst
Name: Marie Walter
Matrikel: 271138
Datum: 04.05.2023
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
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTrees({ x: 500, y: 600 });
        drawLandingfield({x: 500, y: 500});
        drawParaglide({x: 500, y:500});
        drawBugs();
    }

    //fliegen
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
        crc2.fillStyle = "grey";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        //flügel2
        crc2.save();
        crc2.translate(randomX, randomY);
        crc2.beginPath();
        crc2.ellipse(-10, 10, 7, 15, 3, 0, 0.1, true);
        crc2.fillStyle = "grey";
        crc2.fill();
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

    //paraglider
    function drawParaglide (_position: VectorBackground): void{
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        for (let index: number = 0; index < 10; index++) {
            let randomX: number = Math.random() * (canvas.width - 1) + 1;
            let randomY: number = Math.random() * ((300) - 1) + 1;

            console.log("paraglider")
            
            //schirm
            crc2.save();
            crc2.scale(1.1, 1);
            crc2.translate(randomX, randomY);
            crc2.beginPath();
            crc2.ellipse(20, 20, 75, 12, 0, 0, 0.1, true);
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();
            crc2.restore();

            //seil links
            crc2.save();
            //crc2.scale(1.2, 1);
            crc2.beginPath();
            crc2.translate(randomX, randomY);
            crc2.moveTo(0, 40);
            crc2.lineTo(50, 100);
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.restore();

            //seil rechts
            crc2.save();
            //crc2.scale(1.2, 1);
            crc2.beginPath();
            crc2.translate(randomX, randomY);
            crc2.moveTo(-100, 35);
            crc2.lineTo(-40, -30);
            crc2.closePath();
            crc2.strokeStyle = "blue";
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
            crc2.fillStyle = "green";
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
            crc2.translate(950, 700);
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
            crc2.translate(950, 700);
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
            crc2.fillStyle = "grey";
            crc2.fill();
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
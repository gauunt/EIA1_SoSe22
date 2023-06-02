class AlgorithmusBild {
    canvas;
    context;
    width;
    height;
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
    draw() {
        // Hintergrund zeichnen
        this.context.fillStyle = "#87CEEB"; // Himmelblau
        this.context.fillRect(0, 0, this.width, this.height);
        // Sonne zeichnen
        this.context.fillStyle = "#FFD700"; // Gelb
        this.context.beginPath();
        this.context.arc(100, 100, 50, 0, Math.PI * 2);
        this.context.closePath();
        this.context.fill();
        // Berge zeichnen
        this.context.fillStyle = "#808080"; // Grau
        this.context.beginPath();
        this.context.moveTo(0, this.height);
        this.context.lineTo(this.width * 0.4, this.height * 0.6);
        this.context.lineTo(this.width * 0.6, this.height);
        this.context.closePath();
        this.context.fill();
        // Bäume zeichnen
        this.context.fillStyle = "#008000"; // Grün
        this.context.fillRect(this.width * 0.1, this.height * 0.6, 50, 150);
        this.context.fillStyle = "#CD853F"; // Braun
        this.context.fillRect(this.width * 0.08, this.height * 0.75, 60, 10);
        // Landeplatz zeichnen
        this.context.fillStyle = "#A9A9A9"; // Grau
        this.context.fillRect(this.width * 0.4, this.height * 0.9, this.width * 0.2, 10);
        // Luftfahrer zeichnen
        const luftfahrerColors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"]; // Farben der Luftfahrer
        const luftfahrerPositions = [
            { x: this.width * 0.1, y: this.height * 0.5 },
            { x: this.width * 0.2, y: this.height * 0.4 },
            { x: this.width * 0.3, y: this.height * 0.5 },
            // weitere Positionen für Luftfahrer
        ]; // Positionen der Luftfahrer
        luftfahrerPositions.forEach((position, index) => {
            const color = luftfahrerColors[index % luftfahrerColors.length];
            this.drawLuftfahrer(position.x, position.y, color);
        });
        // Fluginsekten zeichnen
        const fluginsektenPositions = [
            { x: this.width * 0.1, y: this.height * 0.2 },
            { x: this.width * 0.2, y: this.height * 0.3 },
            { x: this.width * 0.3, y: this.height * 0.2 },
            // weitere Positionen für Fluginsekten
        ]; // Positionen der Fluginsekten
        fluginsektenPositions.forEach((position) => {
            this.drawFluginsekt(position.x, position.y);
        });
    }
    drawLuftfahrer(x, y, color) {
        // Zeichne einen Luftfahrer an der gegebenen Position
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.arc(x, y, 20, 0, Math.PI * 2);
        this.context.closePath();
        this.context.fill();
        // Zeichne weitere Teile des Luftfahrers
        // ...
        // Zeichne Situation des Luftfahrers
        // ...
    }
    drawFluginsekt(x, y) {
        // Zeichne ein Fluginsekt an der gegebenen Position
        this.context.fillStyle = "#000000"; // Schwarz
        this.context.beginPath();
        this.context.arc(x, y, 5, 0, Math.PI * 2);
        this.context.closePath();
        this.context.fill();
    }
}
// Initialisiere das Algorithmus-Bild
const algorithmusBild = new AlgorithmusBild();
// Zeichne das Bild
algorithmusBild.draw();
//# sourceMappingURL=test.js.map
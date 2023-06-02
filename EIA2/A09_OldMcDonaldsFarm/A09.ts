/*
Aufgabe:L09_OldMcDonaldsFarm
Name: Marie Walter
Matrikel: 271138
Datum: 20.05.2023
Quellen: W3schools, letztes Semester
*/

namespace A091 {

    window.addEventListener("load", handleLoad);

    let amountHay: number = 400;
    let amountApples: number = 20;
    let amountDogfood: number = 10;
    let amountCatfood: number = 15;
    let amountSeaweed: number = 30;

    class Animal {
        name: string;
        species: string;
        food: string;
        amount: number;
        sound: string;
        sounds: string;

        constructor(_name: string, _species: string, _food: string, _amount: number, _sound: string, _sounds: string) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.amount = _amount;
            this.sound = _sound;
            this.sounds = _sounds;
        }

        sing(): void {
            let output: HTMLElement = document.getElementById("output");
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "div";
        
            if (this.species == "duck") {
                newDiv.innerHTML = "<i>" + this.name + "</i>" + "<br>" + "<br>" + "OldMac Donald had a farm" + "<br>" + "Ee i ee i o" + "<br>" + "And on his farm he had some " + this.species + "s" + "<br>" +
                "With a " + this.sounds + " here" + "<br>" + "And a " + this.sounds + " there" + "<br>" + "Here a " + this.sound + " there a " + this.sound + "<br>"
                + "Everywhere a " + this.sounds + "<br>" + "OldMac Donald had a farm" + "<br>" + "Ee i ee i o" + "<br>" + "<br>";
                output.appendChild(newDiv);
            } else {
                newDiv.innerHTML = "<i>" + this.name + "</i>" + "<br>" + "<br>" + "OldMac Donald had a farm" + "<br>" + "Ee i ee i o" + "<br>" + "And on his farm he had some " + this.species + "s" + "<br>" +
                "With a " + this.sounds + " here" + "<br>" + "And a " + this.sounds + " there" + "<br>" + "Here a " + this.sound + " there a " + this.sound + "<br>"
                + "Everywhere a " + this.sounds + "<br>" + "<br>";
                output.appendChild(newDiv);     

            }
        }

        eat(): void {
            if (this.species == "cow") {
                console.log("eat");
                amountHay = amountHay - this.amount;
                let output: HTMLElement = document.getElementById("output");
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "eat1";
                newDiv.innerHTML = "remaining hay: " + amountHay.toString();
                output.appendChild(newDiv);
            }
            if (this.species == "horse") {
                amountApples = amountApples - this.amount;
                let output: HTMLElement = document.getElementById("output");
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "eat2";
                newDiv.innerHTML = "remaining apples: " + amountApples.toString();
                output.appendChild(newDiv);
            }
            if (this.species == "dog") {
                amountDogfood = amountDogfood - this.amount;
                let output: HTMLElement = document.getElementById("output");
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "eat3";
                newDiv.innerHTML = "remaining dogfood: " + amountDogfood.toString();
                output.appendChild(newDiv);
            }
            if (this.species == "cat") {
                amountCatfood = amountCatfood - this.amount;
                let output: HTMLElement = document.getElementById("output");
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "eat4";
                newDiv.innerHTML = "remaining catfood: " + amountCatfood.toString();
                output.appendChild(newDiv);
            }
            if (this.species == "duck") {
                amountSeaweed = amountSeaweed - this.amount;
                let output: HTMLElement = document.getElementById("output");
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "eat5";
                newDiv.innerHTML = "remaining seaweed: " + amountSeaweed.toString();
                output.appendChild(newDiv);

            }
        }
    }


    function handleLoad(): void {
        let animal1: Animal = new Animal("Marita", "cow", "hay", 20, "moo", "moo-moo");
        let animal2: Animal = new Animal("Bernhard", "horse", "apples", 3, "wieher", "wieh-wieh");
        let animal3: Animal = new Animal("Barbara", "dog", "dogfood", 3, "woof", "woof-woof");
        let animal4: Animal = new Animal("Bibi", "cat", "catfood", 3, "miau", "miau-miau");
        let animal5: Animal = new Animal("Karla", "duck", "seaweed", 2, "quack", "quack-quack");
        let output: HTMLElement = document.getElementById("day");
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "dayDiv";
        newDiv.innerHTML = "Day 1";
        output.appendChild(newDiv);
        foodStats();
        animal1.sing();
        animal1.eat();
        animal2.sing();
        animal2.eat();
        animal3.sing();
        animal3.eat();
        animal4.sing();
        animal4.eat();
        animal5.sing();
        animal5.eat();
    }

    function foodStats(): void {
        let parent: HTMLElement = document.getElementById("foodStats");
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.innerHTML = "hay: " + amountHay.toString() + "<br>" + "apples: " + amountApples.toString() + "<br>" + "dogfood: " + amountDogfood.toString() + "<br>" + "catfood: " + amountCatfood.toString() + "<br>" + "seaweed: " + amountSeaweed.toString(); 
        newDiv.id = "newStat";
        parent.appendChild(newDiv);
    }
}
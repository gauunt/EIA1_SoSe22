interface people {
    name: string;
    age: number;
    food: string;
    placeOfBirth: string;
}

var people: people[] = [
 {
    name: "Basti",
    age: 25,
    food: "Pizza",
    placeOfBirth: "Schramberg"
},

{
    name: "Lisa Marie",
    age: 20,
    food: "Lasagne",
    placeOfBirth: "Stuttgart"
},
{
    name: "Marie Sophie",
    age: 21,
    food: "Chilli sin Carne",
    placeOfBirth: "Stuttgart"
}];

for (let index: number = 0; index < people.length; index++) {
    console.log(people[index].name);
}

var numbers: number[] = [1, 4, 5, 8, 9, 11];
let x: number = 0;
for (let index: number = 0; index < numbers.length; index++) {
    x = x + numbers[index];
}
console.log(x);
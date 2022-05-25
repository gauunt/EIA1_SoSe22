var names = ["Ben", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo"];
console.log("Gesamtzahl" + names.length);
document.querySelector("span").innerHTML = names.length + "";
for (var index = 0; index < names.length; index++) {
    console.log(index);
    console.log(names[index]);
    document.querySelector("#liste").innerHTML += names[index] +
    ;
}
//# sourceMappingURL=script.js.map
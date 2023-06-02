/*
Aufgabe:L04_Aufgabenliste_Formular
Name: Marie Walter
Matrikel: 271138
Datum: 15.04.2023
Quellen: Abgabe letztes Semester
*/
var todolistA04;
(function (todolistA04) {
    todolistA04.savedInputs = [
        {
            savedTask: "Toilettenpapier kaufen",
            savedDate: "15.04.2023",
            savedTime: "17:20",
            savedWho: "Lillith",
            savedComment: "ordentlich!",
            savedPurchase: false
        },
        {
            savedTask: "Bad Putzen",
            savedDate: "28.04.2032",
            savedTime: "12:00",
            savedWho: "Donatello",
            savedComment: "3 lagig",
            savedPurchase: true
        },
        {
            savedTask: "Regal aufbauen",
            savedDate: "01.05.2023",
            savedTime: "20:15",
            savedWho: "Fred",
            savedComment: "Statuen kommen am 2.5",
            savedPurchase: false
        }
    ];
    todolistA04.savedTask = "";
})(todolistA04 || (todolistA04 = {}));
//# sourceMappingURL=A04_Verb_Data.js.map
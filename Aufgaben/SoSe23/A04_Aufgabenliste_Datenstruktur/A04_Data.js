/*
Aufgabe:L04_Aufgabenliste_Formular
Name: Marie Walter
Matrikel: 271138
Datum: 13.04.2023
Quellen: Abgabe letztes Semester
*/
var todolistA04;
(function (todolistA04) {
    todolistA04.savedInputs = [
        {
            savedItem: "Toilettenpapier kaufen",
            savedDate: "15.04.2023",
            savedTime: "17:20",
            savedWho: "Lillith",
            savedComment: "ordentlich!",
            savedPurchase: false
        },
        {
            savedItem: "Bad Putzen",
            savedDate: "28.04.2032",
            savedTime: "12:00",
            savedWho: "Donatello",
            savedComment: "3 lagig",
            savedPurchase: true
        },
        {
            savedItem: "Regal aufbauen",
            savedDate: "01.05.2023",
            savedTime: "20:15",
            savedWho: "Fred",
            savedComment: "Statuen kommen am 2.5",
            savedPurchase: false
        }
    ];
    todolistA04.savedItem = "";
})(todolistA04 || (todolistA04 = {}));
//# sourceMappingURL=A04_Data.js.map
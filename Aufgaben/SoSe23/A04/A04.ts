/*
Aufgabe: L04
Name: Marie Walter
Matrikel: 271138
Datum: 05.11.2022
Quellen: Bastian Aberle
*/

namespace shoppinglistA04 {

    
    export interface Input {
        savedItem: string;
        savedAmount: number;
        savedComment: string;
        savedDate: string;
        savedPurchase: boolean;
    }



    export let savedInputs: Input[] = [

        {
            savedItem: "Müsli",
            savedAmount: 2,
            savedComment: "Packungen",
            savedDate: "09.10.2022",
            savedPurchase: false
          
        },
        {
            savedItem: "MioMio Mate",
            savedAmount: 2,
            savedComment: "Flaschen",
            savedDate: "10.10.2022",
            savedPurchase: false
        },
        {
            savedItem: "Äpfel",
            savedAmount: 10,
            savedComment: "bio",
            savedDate: "07.10.2022",
            savedPurchase: true
        }
    ];

    export let savedItem: string = "";

}
// Explore Type  Aliases

// type MyName = "Authoi" | "Jawad Jabbar Khan";

// let myName: MyName = "Jawad Jabbar Khan";

// type arr = MyName[];

// const arr: arr = ["Authoi"];

// type Players = [string, string, number, boolean, string]

// let players : Players = ["messi", "Ronaldo", 345, true, "Hello"];

// type Add = (num1: number, num2: number, num3?: number) => number;

// const add: Add = (num1, num2, num3 = 0 ) => {
//     return num1 + num2 + num3;
// }

// type Address = {
//     presentAddress : string;
//     permanentAddress : string;
// };

// type Favourite = {
//     type: "Food" | "Player" | 'Singer' | "Actor" ;
//     value: string;
// }

// type Auth = {
//     isLoggedIn: boolean
// }

// type Person = {
//     name: string;
//     age: number;
//     phone: string | string[];
//     email: string;
//     address: Address
//     favourites: Favourite[];
// } & Auth;

// const person : Person = {
//     name: "John",
//     email: "john@example.com",
//     age: 33,
//     phone: ["123"],
//     address: {
//         permanentAddress: 'example',
//         presentAddress: 'example'
//     },
//     favourites: [
//         {type: 'Food', value: 'Grilled Chicken'},
//         {type: 'Player', value: 'Edson Arantes do Nascimento(Pele)'}
//     ],
//     isLoggedIn: false
// }

// Array.isArray(person.phone) && person.phone.map((val) => val.toLowerCase())
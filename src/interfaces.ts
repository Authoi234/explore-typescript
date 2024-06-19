// Explore interfaces and
// differreces Between Type Alias and Interfaces

// interface Person {
//     name: string,
//     email: string
// }

// let person : Person = { 
//     name : 'john',
//     email: 'john@example.com'
// }

// interface Add {
//     (num1: number, num2: number, num3?: number) : number
// }

// const add: Add = (num1, num2, num3 = 0 ) => {
//     return num1 + num2 + num3;
// }

// interface Address {
//     presentAddress : string;
//     permanentAddress : string;
// };

// interface Favourite {
//     type: "Food" | "Player" | 'Singer' | "Actor" ;
//     value: string;
// }

// interface Auth {
//     isLoggedIn: boolean;

// }

// interface Person extends Auth{
//     name: string;
//     age?: number;
//     phone: string | string[];
//     email: string;
//     address: Address
//     favourites?: Favourite[];
// };

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
//     isLoggedIn: true,
// }

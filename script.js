// Day -1
// let a = "Hello";
// let b = 10;
// let c = null;
// let d;
// let e = true;
// let f = Symbol(a);

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));
// console.log(typeof(f));

// //Day -2
// let a= 10
// let b = 20
// //Arithmetic Operators
// console.log(a+b);
// console.log(b-a);
// console.log(b/a);
// console.log(b%a);
// console.log(a*b);

// //Comparison Operators
// console.log(a==b);
// console.log(a===b);
// console.log(a<=b);
// console.log(a>=b);
// console.log(a!=b);
// console.log(a!==b);
// console.log(a>b);
// console.log(a<b);

// //Logical Operators
// let p = true;
// let q = false;

// console.log(p&&q);
// console.log(p||q);
// console.log(!p);
// console.log(!q);

// //Day 3
// let number = 10;
// if(number>0){
//     console.log("The number is positive");
// }else if(number<0){
//     console.log("The number is negative");
// }else{
//     console.log("The number is 0");
// }

// Task Details
// Temperature and Weather Type:
// 
// Input the temperature (in Celsius) and the weather type.
// Based on the temperature and weather type, recommend an outfit.
// Outfit Recommendations:
// 
// Sunny:
// Temperature >= 25°C: Wear shorts and a t-shirt.
// 15°C <= Temperature < 25°C: Wear a light jacket and jeans.
// Temperature < 15°C: Wear a warm jacket and pants.
// Rainy:
// Temperature >= 20°C: Wear a raincoat and shorts.
// 10°C <= Temperature < 20°C: Wear a raincoat and jeans.
// Temperature < 10°C: Wear a raincoat and warm clothing.
// Snowy:
// Temperature >= 0°C: Wear a warm coat, hat, and gloves.
// // Temperature < 0°C: Wear a heavy winter coat, hat, gloves, and boots
// let temperature = 8; 
// let weatherType = "snowy"; 

// if (weatherType === "sunny") {
//     if (temperature >= 25) {
//         console.log("Wear shorts and a t-shirt.");
//     } else if (temperature >= 15) {
//         console.log("Wear a light jacket and jeans.");
//     } else {
//         console.log("Wear a warm jacket and pants.");
//     }
// } else if (weatherType === "rainy") {
//     if (temperature >= 20) {
//         console.log("Wear a raincoat and shorts.");
//     } else if (temperature >= 10) {
//         console.log("Wear a raincoat and jeans.");
//     } else {
//         console.log("Wear a raincoat and warm clothing.");
//     }
// } else if (weatherType === "snowy") {
//     if (temperature >= 0) {
//         console.log("Wear a warm coat, hat, and gloves.");
//     } else {
//         console.log("Wear a heavy winter coat, hat, gloves, and boots.");
//     }
// } else {
//     console.log("Unknown weather type.");
// }

// //Day 4
// let day = "Monday"; // Change this value to test different days

// switch (day) {
//     case "Saturday":
//     case "Sunday":
//         console.log(day + " is a weekend.");
//         break;
//     case "Monday":
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//     case "Friday":
//         console.log(day + " is a weekday.");
//         break;
//     default:
//         console.log("Invalid day.");
//         break;
// }

let day = "Monday"; // Change this value to test different days
let timeOfDay = "afternoon"; // Change this value to test different times

switch (day) {
    case "Saturday":
    case "Sunday":
        console.log(day + " is a weekend.");
        break;
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log(day + " is a weekday.");
        break;
    default:
        console.log("Invalid day.");
        break;
}

switch (timeOfDay) {
    case "morning":
        console.log("Good morning!");
        break;
    case "afternoon":
        console.log("Good afternoon!");
        break;
    case "evening":
        console.log("Good evening!");
        break;
    default:
        console.log("Invalid time of day.");
        break;
}

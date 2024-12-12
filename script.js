let birthYear = parseInt(prompt("Enter your birthyear"));
let currentYear = new Date().getFullYear();

if(isNaN(birthYear) || birthYear <= 0){
    console.log("Invalid..")
}else{
let age = currentYear - birthYear;
console.log("Your age is: " + age);



if(age % 3 === 0 && age % 5 === 0){
    console.log("Can be divided by both 3 and 5.");
}else{
    console.log("Cannot be divided by 3 and 5.");
}


let num = parseInt(prompt("Enter a number:"));
if(isNaN(num)){
    console.log("Invalid");
}else{
let squareOfNum = num * num;

console.log("The square of number is: " + squareOfNum);
}
}
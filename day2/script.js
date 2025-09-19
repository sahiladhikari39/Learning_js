// let a = 10;
// let b = 5;

// let sum = a + b;
// let sub = a - b;
// let div = a / b;
// let num = a * b;
// let mode = a % b;

// console.log(sum);
// console.log(sub);
// console.log(num);
// console.log(div);
// console.log(mode);



// //logical operators
// let num1 = 6;
// let num2 = 5;

// let res = num1 > num2;
// let res2 = num1 === 6;

// console.log("result 1 = ", res);
// console.log("Result 2 = ", res2); //data type ni check gryo yesma rather than value mtra



// //if condition
// let age = 18;

// if(age >= 18){
//     console.log("You're eligible to vote.");
// }
// else{
//     console.log("You cannot vote")
// }

// //excercise 1
// let value = prompt("Enter a number: ");
// value % 5 ==0 ? console.log(value, " is a multiple of 5") : console.log(value, "is not a multiple of 5")




// let marks = prompt("Enter your marks: ")
// if (marks >= 90 && marks <= 100){
//     console.log("You got grade A+ ")
// }else if (marks >= 80 && marks <= 89){
//     console.log("You got grade A ")
// }else if (marks >= 70 && marks <= 79){
//     console.log("You got grade B+ ")
// }else if (marks >= 60 && marks <= 69){
//     console.log("You got grade B ")
// }else if (marks >= 0 && marks <= 59){
//     console.log("You're Fail ")
// }else{
//     console.log("This is invalid marks")
// }


// for(let i=0; i<5; i++){
//     console.log("Sahil don")
// }



// let string = "Sahil Adhikari"; 
// for(let str of string){
//     console.log("This iteration prints: ", str);
// }

// // print all even numbers from 0 to 100
// for (let num = 0; num<=100; num+=2){
//     console.log(num);
// }



// let number = 20;
// gameOn = true;
// while(gameOn){
//     guess = prompt("Enter your guess: ");
//     if (guess == number){
//         console.log("Correct you won!");
//         gameOn = false;
//     }
//     else if(guess < number){
//         console.log("Guess higher....");
//     }
//     else{
//         console.log("Guess lower....");
//     }
// }

// let str = "Sahil Adhikari";
// console.log(str[0]);

// let object = {
//     Fname : "Sahil",
//     age : 21,
// };
// //template literals
// let statement = `${object.Fname} is ${object.age} years old. `;
// console.log(statement);




//practice question 1
let fullname = prompt("Enter Your Full Name: ");
let newName = fullname.toLowerCase();
let count = fullname.length;
let statement = `@${newName}${count}`;
console.log(statement);
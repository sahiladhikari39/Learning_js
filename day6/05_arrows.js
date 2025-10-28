// function hello (){
    
// } yo normal function bhayo 

//arrow function
// const addTwo = (num1, num2) =>{
//     var sum = num1 + num2;
//     console.log(sum);
// }
// addTwo(2, 3);


const addTwo = (num1, num2) =>{
    return num1 + num2;
}
console.log(addTwo(2, 5));

//implicit return
const add = (num1, num2) => (num1 + num2);
console.log(add(10, 20));
//or
// const add = (num1, num2) => num1 + num2;
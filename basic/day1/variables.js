// //1. print hello world
// console.log("Hello world")




// //2. let and const
// let a = 10;
// const b = 20; //const ta j garey ni change hudaena 

// console.log("The value of a is: " + a) //yo value change grna milxa anywhere

// a = a+20;
// console.log("The new value of a is: " + a)




// //3. Scope Types: 
// //global - accessed from jata bata panii, ani overwrite grna milxa jata panii 
// var num1 = 10;
// {
//     var num1 = 20;
// }
// console.log(num1);//20
// //function - accessed only from inside the function
// //block - accessed only in curly braces
// let num2 = 10;
// {
//     let num2 = 20;
//     console.log(num2);//20
// }
// console.log(num2);//10




// //4. Temporal dead zone
// console.log(cat);
// //.     dot deko jati temporal dead zone
// //.     where you cannot access cat
// let cat = "Meowth"; 
// //yesma js lae tha xa ki paxi cat initialize bhako xa bhnyrr but it cannot use it at first nae its like you are asked malae bike ko chabi dey when you are going to have bike after a year in future




// //5. data types
// //primitive data types - string, null, bool, number, undefined, symbol, bigint
// //reference data types - array, objects, function 



const product = {
    name : "Parker Jotter Pen",
    price : 270,
    onDeal : true,
    offer : '5%',
    rating : 7002,
};

console.log(product.name);

const profile = {
    name : 'Sahil Adhikari',
    posts : 195,
    followers : "596k",
    following : 4,
    bio : "Student in Kathmandu Bernhardt College",
};
console.log(profile.name);

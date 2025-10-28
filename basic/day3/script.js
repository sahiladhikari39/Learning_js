// // Arrays
// let aname = ["Luffy", "Zoro", "Sanji", "Brook", "Franky", "Usopp", "Chopper"];
// let count = aname.length;
// for (let i=0; i<count; i++ ){
//     console.log(aname[i]);
// }




// // Making 10% off on every value in the array
// let arr = [250, 645, 300, 900, 50];

// // for (let num in arr){
// //     num -= 0.10 * num;

// // }
// for (let i=0; i< arr.length; i++){
//     arr[i] -= 0.10 * arr[i];
// }
// console.log(arr)




//practice question
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//to remove the first company from the list
companies.shift();
console.log(companies);

//remove uber and add ola in its place
companies.splice(1, 1, "Ola");
console.log(companies);

//add amazon at the end
companies.push("Amazon");
console.log(companies);
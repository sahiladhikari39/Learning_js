// // const championsLeague = new object() //singleton object

// const superLeague = {} //non-singleton object

// superLeague.name = "Nepal Super League";
// superLeague.id = "12321";
// console.log(superLeague);



// //combining two objects
// const obj1 = {
//     1 : 'a',
//     2 : 'b'
// }

// const obj2 = {
//     3 : 'c',
//     4 : 'd'
// }

// const obj3 = Object.assign(obj1, obj2);
// const obj4 = Object.assign({}, obj1, obj2);

// console.log(obj3);
// console.log(obj4);




//most used method for combining two objects
const obj1 = {
    name : "Messi",
    club : "Miami",
}

const obj2 = {
    name : "Squarez",
    club : "Miami"
}

const footballers = {...obj1, ...obj2} //... bhneko spread ho hae
// console.log(footballers);



//object destructuring
const team ={
    teamName : "The vikings",
    teamCode : "1001",
    teamLeader : "Ragnar"
}

console.log(team.teamLeader);

//yo chahi destructuring gareko 
const {teamLeader} = team;
console.log(teamLeader); //output = Ragnar


const {teamLeader : lead} = team;
console.log(lead); //output = Ragnar


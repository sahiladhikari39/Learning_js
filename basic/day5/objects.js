//singleton
//---which is -> Objects.create wala method


//objects literals
const jsUser = {
    name: "Sahil",//key, value pair
    age: 21,
    location: "New Naikap",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Friday"],
}
console.log(jsUser.name);
console.log(jsUser['location']);


const mysym = Symbol("Goat");
const profile = {
    name: "Messi",
    age: 38,
    location: "Miami",
    [mysym]: "Goat",
}

console.log("---------------------------------------------------------------------");
console.log(profile);

profile.location = "Barcelona";
console.log(profile);

// Location not changed because the object was freezed
Object.freeze(profile);
profile.location= "Miami";
console.log(profile);


// Passing functions in objects
const flight= {
    name: "Nepal Airlines",
}

flight.flightMessage= function(){
    console.log("Greetings from the captain!");
}
console.log(flight.flightMessage());

flight.flightMessage2 = function(){
    console.log(`This is ${this.name} welcome aboard!`);
}
console.log(flight.flightMessage2());
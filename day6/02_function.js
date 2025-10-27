//---------------learning about rest operator----------------------------

function cartPrice(...num){ 
    //jati euta value aayenii limited bhayena yesto rest use garec
    return num;
}

// console.log(cartPrice(100));

// console.log(cartPrice(100, 200, 300, 400));



//------------------learning about objects in function-----------------------
const user = {
    username : "Sahil",
    age : 21,
}

function handleObject(anyobject){
    console.log(`${anyobject.username} is ${anyobject.age} years old.`);
}

handleObject(user);
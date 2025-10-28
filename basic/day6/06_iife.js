(function one(){ //named IIFE
    console.log("DataBase 1 Connected!");
})();


(two = () =>{  //named IIFE
    console.log("DataBase 2 Connected!");
})();

((user)=>{  //simple IIFE
    console.log(`Welcome ${user}`)
})("Sahil");
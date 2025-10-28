const user = {
    username : "Sahil",
    age : 21,

    welcomeMessage: function(){
        console.log(`Welcome to the site ${this.username}`);
        console.log(this) //yo this ley object bhitra ko current context refer grxa
    }
}

user.welcomeMessage();
// user.username = "Prashamsha";
// user.welcomeMessage();

// console.log(this) //yo this ley global scope ko current context refer grxa
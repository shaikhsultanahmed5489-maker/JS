const user = {
    username : "sultan",
    loginCount : 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got user details from databases");
        console.log(this);
        
    }
}

console.log(user.username);



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User("sultan", 12, true)

console.log(userOne);

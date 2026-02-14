// let myName = "sultan     "

// console.log(myName.truelength);


let myHeros = ["Thor","spiderman"];

let heroPower = {
    Thor :"hammer",
    spiderman: "sling",

    getSpiderPower : function() {
        console.log(`spidy power is ${this.spiderman}`);
        
    }
};

Object.prototype.sultan = function() {
    console.log("sultan is present in all objs");   
}


Array.prototype.heysultan = function() {
    console.log(`sultan says hello`);
    
}


// heroPower.sultan()
myHeros.sultan()
myHeros.heysultan()
// heroPower.heysultan()

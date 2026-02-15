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
// myHeros.sultan()
// myHeros.heysultan()
// heroPower.heysultan()


//inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignmnet',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode               "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
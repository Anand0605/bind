// function createUser(username,score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`)
// }

// const chai = new createUser("chai",25)
// const tea = createUser("tea",250)

// chai.printMe


// prototype path ki power

let myHero = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log('spidy power is ${this.spiderman}')
    }
}
Object.prototype.anand = function(){
    console.log('anand is presented in all object');
}

Array.prototype.heyAnand = function(){
    console.log(`Anand say hii`)
}
heroPower.anand()
myHero.anand()
// heroPower.heyAnand()
myHero.heyAnand()

//  prototype inheritance
const User = {
    name:"chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chaiAurcode        "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`true length is:${this.trim().length}`)
}
anotherUsername.trueLength()

// 
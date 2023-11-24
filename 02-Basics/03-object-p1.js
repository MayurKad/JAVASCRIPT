// singleton
// when canster created that time it create the singleton
// object literals

// using symbol method
// all way use the symbol function before the object function (**imp**)

const mySym = Symbol("key1")

const myobj = {
    name: "baki",
    age: "19y",
    email: "bakihanma@hanma.com",
    location: "mumbai",
    [mySym]: "bakikey1",
    "full name": "baki hanma",
    isloggin: false,
    Lastloggin: ["monday", "tusday"]
}


console.log(myobj);
console.log(myobj.age);
console.log(myobj["full name"]);
console.log(myobj[mySym]);

// overload the value

myobj.age = "25"

// lock the values

// Object.freeze(myobj)  // when we want to change the any thing that time we need the stop freeze funtion
myobj.age = "26"
console.log(myobj);

// Adding the functons in objects

myobj.greeting = function(){
    console.log("hello frd");
}

// string interpolation

myobj.greeting2 = function(){
    console.log(`hello frd, ${this["full name"]}`); // `` this is called backtick
}
console.log(myobj.greeting2());


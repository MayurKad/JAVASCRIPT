const name = "Baki"
const Yourage = 30

console.log(name + Yourage + "male");

// It call string interpoletion
console.log(`Hello i am ${name} and my age is ${Yourage} and i am male`);

// Prototype

const gameName = new String('Class of Clan')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.length);

console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

// In a substring we can't give negetive value

const NewString = gameName.substring(0, 5)
console.log(NewString);

// In a slice we can give a negetive value 

const anotherString = gameName.slice(-13, 5)
console.log(anotherString);

const NewStringOne = "    Baki    "
console.log(NewStringOne);
console.log(NewStringOne.trim());

const url = "Https//baki.com/baki%20hanma"
console.log(url.replace('%20', '-'));

// Includes function is to find the given value is have in user value

console.log(url.includes('hanma'));
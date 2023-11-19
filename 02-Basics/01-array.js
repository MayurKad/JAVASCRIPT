// Array
const Myarry = [1,2,3,4,5]
const Heros = ["iron man", "batman", "superman"]
const Myarry2 = new Array(1, 2, 3, 4)

console.log(Myarry[1]);

// Array methods

Myarry.push(6)
Myarry.push(0)
Myarry.push(7)
Myarry.pop()

Myarry.unshift(3)
Myarry.shift()

console.log(Myarry);
console.log(Myarry.includes(9));
console.log(Myarry.indexOf(7));

const Newarry = Myarry.join()

console.log(Newarry);
console.log(Myarry);

// slice and splice

console.log("A", Myarry);
const myn1 = Myarry.slice(1, 3)
console.log(myn1);

console.log("B", Myarry);
const myn2 = Myarry.splice(1,3)
console.log(myn2);

console.log("C", Myarry);


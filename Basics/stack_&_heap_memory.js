// Heap (primitive), Stack (non primitive)

// Stack (prinitive (call by value))
// Stack is coping the value

let carName = "Dodge"

let anotherCar = carName
anotherCar = "Maclerian P1"

console.log(carName);
console.log(anotherCar);

// Heap (non primitive (call by reference))
// Heap is taking or geting a refenrence value

let userOne = {
    email: "baki@gmail.com",
    upi: "upi@yle",
}

let userTwo = userOne

userTwo.email = "jack@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
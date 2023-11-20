const MHero = ["iron man", "thor", "loki", "captain america"]
const Dc = ["superman", "flash", "batman"]

MHero.push(Dc)
console.log(typeof(console.log(MHero))); 

const NewH = MHero.concat(Dc) // it work like comebind the array
console.log(NewH);

const all_newh = [...Dc, ...MHero] // This is a spread opretar
console.log(all_newh);

const another_Arrya = [1, 2, 3, 4, 5, [6, 7, 8,[4, 5, 6]]]

const real_another_arr = another_Arrya.flat(Infinity)
console.log(real_another_arr);

console.log(Array.isArray("Baki")); // this is boolean output
console.log(Array.from("Baki")); // This is converting string to array
console.log(Array.from({name: "baki"})); // This is not convert the object into array ot give the empty sell

// when multipal object comebind in array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
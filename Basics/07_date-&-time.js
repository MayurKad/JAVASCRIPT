// Dates

let Mydate = new Date()
console.log(Mydate.toDateString());
console.log(Mydate.toISOString());
console.log(Mydate.toJSON());
console.log(Mydate.toLocaleDateString());
console.log(Mydate.toLocaleTimeString());
console.log(typeof Mydate);

let MynewDate = new Date(2021, 5, 28)
console.log(MynewDate.toLocaleTimeString());

let myTime = Date.now()

console.log(myTime);
console.log(MynewDate.getTime);
console.log(Math.floor(Date.now()/1000));

Newdate.toLocaleDateString('default',{
    weekday:"long",
})
# Lecture6-Javascript-Basics-ES6-
// Javascript
var x=15; 
{
    const x=5;
    console.log(x);
    x=6;
    console.log(x);
}
console.log(x);

// arrow functions

var x=function(x,y){
    return x+y;
};
const x=(x,y)=>{
    return x+y;
};
console.log(x(5,6));

// Spread operator ...

const q1=["Jan","Feb","Mar"]
const q2=["Apr","May","Jun"]
const q3=["Jul","Aug","Sep"]
const q4=["Oct","Nov","Dec"]
const year=[...q1, ...q2, ...q3, ...q4];
console.log(year);

const name="CipherSchools";
let text="";
for (let ch of name){
    text +=ch+" ";
}
console.log(text);

const fruits = new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200],
]);
console.log(fruits);
console.log(fruits.get("oranges"));

const myNumbers=[25,12,58,77,-1];
let maxValue=Math.max(...myNumbers);
console.log(maxValue)

//for of loop
let sum=0;
for(let num of myNumbers){
    sum=sum+num;
}
console.log(sum);

const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("a");
console.log(letters);

class Car{
    constructor(name, mfgYear) {
        this.name=name;
        this.mfgYear=mfgYear;
    }
}
const myCar1= new Car("Mercedes",2022);
const myCar2= new Car("Porsche",2020);
console.log(myCar1,myCar2);

// Javascript promise

const myFunction= () => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is inside Promise");
        resolve();
    }, 3000);
    });
};

myFunction()
.then(() => {
    console.log("Resolved");
})
.catch(() => {
    console.error("Rejected");
});

// Javascript Symbols (A primitive datatype of js)

const person={
    fistName: "Indra",
    lastName: "Reddy",
    age: 26,
    eyeColor: "Blue",
};
let id = Symbol("id");
person[id]=12213523;
console.log(person);

// Default parametr values

const addTwoNum=(a,b=10)=>a+b;
console.log(addTwoNum(21));

// multiple numbers case

const addNum=(...args)=>{
console.log(args);
let sum=0;
for(let arg of args){
    sum+=arg;
}
return sum;
};
console.log(addNum(12,13,14,15,16,10));
// Command Used : cd foldername
// node filename

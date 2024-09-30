# Lecture10-Object-Oriented-Javascript-Cipherschools

//-->Object Literal

let person ={
    firstName:"Venkatesh",
    lastName: "Chakrahari",

    getFullName: function () {
        console.log(person.firstName,person.lastName);
        return `The name of the person is ${person.firstName} ${person.lastName}`;
    },
    phoneNumber: {
    mobile:"123456",
    landline:"12345",
    },
}
console.log(person.getFullName());
console.log(person.phoneNumber.landline);


//-->Object Constructor

function person(firstName, lastName){
    this.firstName=firstName;
    this.firstName=firstName;
let person1=new person("Misty","Chakrahari");
let person2=new person("Sandy","Chakrahari");
console.log(person1.firstName);
console.log(`${person2.firstName,person2.lastName}`);
}

//-->Object.Create method

const coder={
    printIntroduction: function(){
        console.log(`My name is ${this.name}.Am i studying?:${this.isStudying}`);
    }
}
const me=Object.create(coder);
    me.name="Venkateshwara Raju Chakrahari"
    me.isStudying=true
    me.printIntroduction()

//-->Class Defining

class Vehicle {
    constructor(name,maker,power){
        this.name=name;
        this.maker=maker;
        this.power=power;
    }
    getDetails(){
        return `The name of the vehicle is ${this.name}`;
    }
}

let v1=new Vehicle("creta","tata","1200cc");
let v2=new Vehicle("swift","suzuki","1000cc");
console.log(v1.name)
console.log(v2.maker)
console.log(v2.getDetails())



function Vehicle(name,maker,power){
    this.name=name;
    this.maker=maker;
    this.power=power;
    Vehicle.prototype.getDetails= function(){
        return `The details of the vehicle are : ${this.name} by ${this.maker} and has ${this.power} power`;
    }
}
let V3=new Vehicle("Freedom 125","Bajaj","125cc");
let V4=new Vehicle("Pulsar 220cc","Bajaj","220cc");
console.log(V3.power)
console.log(V4.power)
console.log(V3.getDetails())
console.log(V4.getDetails())

//Object constructor method

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    addAddress(address){
        this.address=address;
    }

    getDetails(){
        console.log(`Name is: ${this.name}, and address is: ${this.address}`);
    }
}
let p1=new person("drake","22");
p1.addAddress("New York");
p1.getDetails();




class person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    
    let getDetails_NoAccess=function(){
        return `First name is ${this.firstName} and last name is ${this.lastName}`;

    };

    this.getDetails_Access=function(){
        return `First name is ${this.firstName} and last name is ${this.lastName}`;

    };
    // By changing the way we declare a function inside a class we can change it's access
}
}
let p1=new person("drake","Christ");
console.log(p1.firstName)
console.log(p1.getDetails_NoAccess())
console.log(p1.getDetails_Access())


// OOP in javascript using extends

class person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    Details=function(){
        return `First name is: ${this.firstName} Last name is: ${this.lastName}`;
    };

};
let p1=new person("Venkateshwara Raju","Chakrahari");
console.log(p1.Details());


class Student extends person{
    constructor(firstName,lastName,rollNumber){
        super(firstName,lastName);
        this.rollNumber=rollNumber;
    }
    Details=function(){
        return `First name is: ${this.firstName} Last name is: ${this.lastName} Roll Number is: ${this.rollNumber}`;
    };
}
let s1=new Student("Thrishal","Mamidi",20);
console.log(s1.Details());

// Polymorphism: Same function with different signatures called many times. Core concept of OOL.
// can be achieved by function iverloading and overriding.
// JavaScript is also a polymorphic language.(can be used in web dev and in other environments also)





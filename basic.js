//Object constructor
function Person(name, age){
    this.name = name;
    this.age = age;
    this.yearOfBirth = bornYear;
}

//Object function
function bornYear(){

    let years = new Date().getFullYear();
    return years - this.age;
}

let person1 = new Person(prompt("Enter your name: "), prompt("Enter your age:"));
document.writeln("Hello, " + person1.name + "!");

//Call the method by the property name you specified  in the constructor instead of the function name itself
document.writeln("You were born in " + person1.yearOfBirth());
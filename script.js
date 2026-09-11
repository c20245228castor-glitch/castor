console.log("Hello mundo")
const Myname = "Diolito";
console.log("name: " + Myname);
let age = 20;
let number = "09109436835";
console.log("Age: " + age)
console.log("Number: " + number);

const address = "Brgy. San Isidro E.B. Magalona";
console.log("Address: " + address);

function greet(name) {

    return `good morning, ${name}`;


}
console.log(greet("rene"))

function mdas(a, b) {
    let mul = a * b;
    let div = a / b;
    let sum = a + b;
    let sub = a - b;
    return (`values: ${a} and ${b}. \n product: ${mul}, \n qoutient: ${div}, \n sum: ${sum},\n difference: ${sub}`);
}
console.log(mdas(5, 3));

const heading = document.querySelector("h1");
console.log(heading);

const contactHeading = document.querySelector("#contanct h2");
console.log(contactHeading);

const projectHeading = document.querySelector("#services h2");
console.log(projectHeading);



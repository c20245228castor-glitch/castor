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

const heading = document.querySelector("h1")
console.log(heading);


const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);


const servicesHeading = document.querySelector("#services h2");
console.log(servicesHeading);

const projectHeading = document.querySelector("#projects h2");
console.log(projectHeading);




//Text Context
heading.textContent = "My portfolio";
contactHeading.textContent = "Let's Connect!";
projectHeading.textContent = "My Projects";

heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
contactHeading.style.color = "purple";
projectHeading.style.color = "purple";
servicesHeading.style.color = "purple";



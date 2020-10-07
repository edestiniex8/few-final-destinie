console.log("JS Loaded!");

const name = "Marc";

console.log(name);

let bodyElement = document.body;

document
  .getElementById("button")
  .addEventListener("click", function (event) {
    event.preventDefault();
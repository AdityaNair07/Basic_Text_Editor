let optionBtns = document.querySelectorAll(".options-btn");
let advanceBtns = document.querySelectorAll(".advance-options .options-btn");

let fontFamily = document.getElementById("font-family");
let fontSize = document.getElementById("font-size");
let fontHeader = document.getElementById("font-header");

let textInput = document.getElementById("text-input");

let link = document.getElementById("create-link");

let alignBtns = document.querySelectorAll(".alignment-options .options-btn");

let fontColor = document.getElementById("font-color");
let bgColor = document.getElementById("bg-color");

fontColor.addEventListener("change", () => {
  textInput.style.color = fontColor.value;
});
bgColor.addEventListener("change", () => {
  textInput.innerText.style.backgroundColor = bgColor.value;
});

optionBtns.forEach((element) => {
  element.addEventListener("click", () => console.log("Clicked btn" + element));
});

fontHeader.addEventListener("change", () => {
  textInput.innerHTML = `<${fontHeader.value}>${textInput.textContent}</${fontHeader.value}>`;
});

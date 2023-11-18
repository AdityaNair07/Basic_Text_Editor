// selecting all buttons with option-btn class
let optionBtns = document.querySelectorAll(".options-btn");

// selecting all buttons with advance-btn class
let advanceBtns = document.querySelectorAll(".advance-btn");

// selecting the font formatting elements by their id
let fontName = document.getElementById("fontName");
let fontSize = document.getElementById("fontSize");
let fontHeader = document.getElementById("font-header");

// selecting buttons with align class
let formatBtn = document.querySelectorAll(".format");

// selecting buttons with align class
let alignBtn = document.querySelectorAll(".align");

// selecting buttons with spacing class
let spacingBtn = document.querySelectorAll(".spacing");

// selecting link buttons by id
let link = document.getElementById("createLink");
let unlink = document.getElementById("unlink");

// selecting the text input area using id
let textInput = document.getElementById("text-input");

// created an initializer function
const initializer = () => {
  // calling highlighter function to highlight the selected button
  highlighter(formatBtn, false);
  highlighter(alignBtn, true);
  highlighter(spacingBtn, true);
};

// highlighter function
const highlighter = (className, needRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      if (needRemoval) {
        let active = false;

        // if the button is active
        if (button.classList.contains("active")) {
          active = true;
        }
        highlightRemover(className);
        if (!active) {
          button.classList.add("active");
        }
      } else {
        button.classList.toggle("active");
      }
    });
  });
};

// calling the initializer function on page load
window.onload = initializer();

const highlightRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

// created an array of font names to render
let fontList = [
  "Arial",
  "Arial Black",
  "Arial Narrow",
  "Arial Rounded MT Bold",
  "Bookman Old Style",
  "Bradley Hand ITC",
  "Century",
  "Century Gothic",
  "Comic Sans MS",
  "Courier",
  "Courier New",
  "Georgia",
  "Gentium",
  "Impact",
  "King",
  "Lucida Console",
  "Lalit",
  "Modena",
  "Monotype Corsiva",
  "Papyrus",
  "Tahoma",
  "TeX",
  "Times",
  "Times New Roman",
  "Trebuchet MS",
  "Verdana",
  "Verona",
  "cursive",
  "monospace",
  "serif",
  "sans-serif",
  "fantasy",
];

// mapping every element in the array to add option element in select
fontList.map((value) => {
  let option = document.createElement("option");
  option.value = value;
  option.innerHTML = value;
  fontName.appendChild(option);
});

// mapping every element in the array to add option element in select
for (let i = 3; i <= 8; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  fontSize.appendChild(option);
}

// default font size
fontSize.value = 3;

// defined a function that takes commond and value to execute
const modifyText = (command, defaultUi, value) => {
  // using execCommand function to execute command passed
  document.execCommand(command, defaultUi, value);
};

// mapping every element in the array
optionBtns.forEach((button) => {
  // adding event listener to the element
  button.addEventListener("click", () => {
    // calling the function to execute command
    modifyText(button.id, false, null);
  });
});

// mapping every element in the array
advanceBtns.forEach((button) => {
  // adding event listener to the element
  button.addEventListener("change", () => {
    // calling the function to execute command
    modifyText(button.id, false, button.value);
  });
});

// link button
link.addEventListener("click", () => {
  const url = prompt("Enter URL");
  // if url has http
  if (/https/i.test(url)) modifyText(link.id, false, url);
  // else add https to the start
  else {
    url = "https" + url;
    modifyText(link.id, false, url);
  }
});

// unlink button
unlink.addEventListener("click", () => {
  modifyText(unlink.id, false, url);
});

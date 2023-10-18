//CONSTANTS
const gridWindow = document.querySelector("#gridWindow");

let nums = promptUser();

//when using height width in css, set to 100 / nums
let numsCalc = 100 / nums;
//creates the grid
makeSquareDiv(nums);

//updates squareDiv properties for mouseover, sets height/width to ensure correct spacing
const squarePtr = document.querySelectorAll(".squareDiv");

//Function: creates a user-defined number of "square" divs that will become boxes
function makeSquareDiv(nums) {
  for (let i = 0; i < nums ** 2; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.setAttribute("class", "squareDiv");
    squareDiv.style.height = `${numsCalc}%`;
    squareDiv.style.flexBasis = `${numsCalc}%`;
    squareDiv.addEventListener("mouseover", () => {
      squareDiv.style.backgroundColor = "black";
    });
    gridWindow.appendChild(squareDiv);
  }
}

//get user input
function promptUser() {
  let value = Math.floor(prompt("Enter a number between 16 and 100"));
  if (isNaN(value)) {
    alert("Unknown entry");
    promptUser();
  } else {
    return value;
  }
}

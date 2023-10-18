//CONSTANTS
const gridWindow = document.querySelector("#gridWindow");
const resetBtn = document.querySelector(".resetButton");
const inputValue = document.querySelector("input");

let nums = inputValue.value;
//when using height width in css, set to 100 / nums
let numsCalc = 100 / nums;

//creates the grid
resetSketch();

//updates squareDiv properties for mouseover, sets height/width to ensure correct spacing
const squarePtr = document.querySelectorAll(".squareDiv");

//sets an active listener to the reset button
resetBtn.addEventListener("click", () => {
  resetSketch();
});

//Function: creates a user-defined number of "square" divs that will become boxes
function makeSquareDiv(nums, numsCalc) {
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

function resetSketch() {
  let nums = inputValue.value;
  let numsCalc = 100 / nums;
  //remove all grids
  let squareDivPtr = document.querySelectorAll(".squareDiv");
  squareDivPtr.forEach((item) => {
    item.remove();
  });
  //rebuild with new input value
  makeSquareDiv(nums, numsCalc);
}

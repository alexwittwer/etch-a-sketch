//CONSTANTS
const gridWindow = document.querySelector("#gridWindow");

//Function 1x1:           Makes n divs, append
//Requirements:           none

//probably best to call this function with a button rather than input
function makeSquareDiv(nums) {
  for (let i = 0; i < nums ** 2; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.setAttribute("class", "squareDiv");
    gridWindow.appendChild(squareDiv);
  }
}

function promptUser() {
  let value = Math.floor(prompt("Enter a number between 16 and 100"));
  if (isNaN(value)) {
    alert("Unknown entry");
    promptUser();
  } else {
    return value;
  }
}
let nums = promptUser();
//when using height width in css, set to 100 / nums
let numsCalc = 100 / nums;

makeSquareDiv(nums);

const squarePtr = document.querySelectorAll(".squareDiv");
squarePtr.forEach((item) => {
  item.style.height = `${numsCalc}%`;
  item.style.flexBasis = `${numsCalc}%`;
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "black";
  });
});

//Function set stye:
function setSquareStyle() {}
//End function

//Function Grid Clone:    Duplicates 1x1 function into a square
//                        eg 16x16 grid with hover elements
//Requirements:           Should populate the grid with N * N elements
//                        and we will let flexbox handle the rest
//                        This way, we stay in O(n) time

//End function

//Function reset:         Resets all hover elements to white space
//Requirements:           Should not require a page reload.

//End function

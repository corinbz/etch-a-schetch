let container = document.getElementById("container");
let textInput = document.getElementById("gridSize");
let submitButton = document.getElementById("submit");
let currentColor = "";

function drawBoard(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  let squares = document.querySelectorAll(".square");
  squares.forEach((div) => div.remove());
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.classList.add("square");
    container.appendChild(cell);
    cell.addEventListener("mouseover", () => drawColor(cell), { once: true });
    // cell.addEventListener("click", () => console.log(darkenRgb(currentColor)));
  }
}

function darkenRgb(rgbcode) {
  rgbNumbers = rgbcode.split("(")[1].split(")")[0];
  rgbNumbers = rgbNumbers.split(",");
  rgbNumbers = rgbNumbers.map(function (color) {
    return Number(color) + Math.round((255 - color) * 0.1);
  });
  return rgbNumbers;
}
// function rgbToHex(rgb) {
//   let hex = rgb.split("(")[1].split(")")[0];
//   hex = hex.split(",");
//   let b = hex.map(function (x) {
//     x = parseInt(x).toString(16);
//     return x.length == 1 ? "0" + x : x;
//   });
//   b = "0x" + b.join("");
//   return b;
// }

// function newShade(hexColor, magnitude) {
//   console.log(hexColor);
//   hexColor = hexColor.replace(`#`, ``);
//   if (hexColor.length === 6) {
//     const decimalColor = parseInt(hexColor, 16);
//     let r = (decimalColor >> 16) + magnitude;
//     r > 255 && (r = 255);
//     r < 0 && (r = 0);
//     let g = (decimalColor & 0x0000ff) + magnitude;
//     g > 255 && (g = 255);
//     g < 0 && (g = 0);
//     let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
//     b > 255 && (b = 255);
//     b < 0 && (b = 0);
//     return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
//   } else {
//     return hexColor;
//   }
// }
// let counter = 0;
// function to make color a cell
function drawColor(square) {
  // counter += 1;
  // console.log(counter);
  square.style.backgroundColor = `hsl(${Math.random() * 360},100%, 50%)`;
  currentColor = square.style.backgroundColor;
}
drawBoard(30, 30);

submitButton.addEventListener("click", () =>
  drawBoard(textInput.value, textInput.value)
);

console.log(darkenRgb("rgb(90,58,118)"));

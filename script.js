let container = document.querySelector(".container");
let gridSize;
let button = document.querySelector("button");

button.addEventListener("click", () => {
  let userInput = Number(prompt("Enter the number of squares per side:"));

  if (Number.isInteger(userInput) && userInput > 0 && userInput <= 100) {
    gridSize = userInput;
    boxSizing();
  } else {
    alert("Enter numbers only");
  }
});

function boxSizing(){
container.innerHTML = "";
let boxSize = 960 / gridSize;
    for(let i = 0; i<gridSize * gridSize; i++){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let div = document.createElement("div")
        div.style.height= `${boxSize}px`
        div.style.width= `${boxSize}px`
        div.classList.add("box")
        div.addEventListener("mouseenter", ()=>{
            div.style.background = `rgb(${red}, ${green}, ${blue})`
            red= Math.max(0, Math.floor(red- (0.1 * red)));
            blue = Math.max(0, Math.floor(blue - (0.1 * blue)));
            green = Math.max(0, Math.floor(green - (0.1* green)));
        })

        container.appendChild(div)
    }
}

gridSize = 16
boxSizing()
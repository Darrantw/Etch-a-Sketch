const container = document.getElementById('container');
const button = document.getElementById('button');
let divs = document.getElementsByClassName('grid-items');


 



button.addEventListener('click', function () {
  makeGrid()
})


function makeGrid(i){
// code to append divs to container
removeAllChildNodes(container);
let numberOfDivs = prompt ("how many divs(1-100) squared?")
while (numberOfDivs > 100) {
   numberOfDivs = prompt ("Nothing higher than 100. Pick again?")
} 
let squareSize = (100 / numberOfDivs) ;
for (let i = 0; i < (numberOfDivs*numberOfDivs); i++) {
    let grid = document.createElement('div');
    grid.className = 'grid-items';
    grid.style.width = squareSize;
    grid.style.height = squareSize;
    container.style.gridTemplateRows = "1fr ".repeat(numberOfDivs);
    container.style.gridTemplateColumns = "1fr ".repeat(numberOfDivs);
    document.getElementById('container').appendChild(grid);
    }
  //code to add id to each div
  let divs = document.getElementsByClassName('grid-items');
  for (let i = 0; i < divs.length; i++) {
      divs[i].id = "div" + (i + 1);
    }
  }

  //function for changing divs to pink on mouseover
  container.onmouseover = function(event) {
    let target = event.target;
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    target.style.background = "#" + randomColor;
    console.log(target)
  };

  //function for changing divs to purple once mouse leaves them
  container.onmouseout = function(event) {
    let target = event.target;
    randomColor();
    target.style.background = "#" + randomColor;
  }
  
//function for emptying container of divs.
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

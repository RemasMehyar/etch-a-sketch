const sizeButton=document.getElementById("sizeButton")
const clearButton=document.getElementById("clearButton");
var container = document.getElementById("c1");
var size = document.getElementById("size").value;
container.style.gridTemplateColumns=`repeat(${size},1fr)`;
container.style.gridTemplateRows=`repeat(${size},1fr)`;

makeSize(8);

function rainbowColor(container)
{
    this.style.backgroundColor= Math.floor(Math.random()*16777215).toString(16);
}
function makeSize(sizeT){
    let square=sizeT*sizeT;
    for(let i=0;i<square;i++)
    {
    var div = document.createElement('div'); 
    container.insertAdjacentElement("beforeend",div);
    div.addEventListener("click",rainbowColor,false);
    clearButton.addEventListener("click",clear,false);
    sizeButton.addEventListener("click",reloadGrid,false)
    }
    console.log("yes")
}

function reloadGrid() {
    clear();
    var size = document.getElementById("size").value;

    container.style.gridTemplateColumns=`repeat(${size},1fr)`;
    container.style.gridTemplateRows=`repeat(${size},1fr)`;
    makeSize(size);
  };
function clear()
{
    var size = document.getElementById("size").value;
    container.innerHTML = ''
    makeSize(size);
}
//Export to image function)find extension that allows pixels withotu compression
// select single color 
//on hover toggle
//good background image(wihtout affecting grid).

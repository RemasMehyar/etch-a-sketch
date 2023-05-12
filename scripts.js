const sizeButton=document.getElementById("sizeButton")
const clearButton=document.getElementById("clearButton");
clearButton.addEventListener("click",clear(),false);
var container = document.getElementById("c1");
var size = document.getElementById("size").value;
container.style.gridTemplateColumns=`repeat(${size},1fr)`;
container.style.gridTemplateRows=`repeat(${size},1fr)`;
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
    }
    console.log("yes")
}
makeSize(8);
function clear()
{
    console.log("alooo");
    var container = document.getElementById("c1");
    let square = container.querySelectorAll('div');
    square.forEach((div)=> div.remove());
}
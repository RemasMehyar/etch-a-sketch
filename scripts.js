const button=document.getElementById("btn5")
var a = document.getElementById("c1");
button.addEventListener("click",apply);
function alo(a)
{
    console.log(a.currentTarget.innerHTML);
    this.style.backgroundColor= Math.floor(Math.random()*16777215).toString(16);
}
function apply(){
   a.innerHTML = "";
    var size = document.getElementById("size").value;
    console.log('alo')
    for(let i=0;i<size;i++)
    {
    var div = document.createElement('div'); 
    div.classList.add("gird-board");
    
    div.addEventListener("mouseover",alo,false);
    a.appendChild(div);
    }
    
}

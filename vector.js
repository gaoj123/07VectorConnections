var clearButton=document.getElementById("clear")
var slate=document.getElementById("screen");
var nowX=0;
var nowY=0;

var started=false;

var circle=function(e){
    mouseX=e.offsetX;
    mouseY=e.offsetY;
    nowX=mouseX
    nowY=mouseY
    started=true;
    var c=document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx",mouseX);
    c.setAttribute("cy",mouseY);
    c.setAttribute("r",10);
    slate.appendChild(c)
};

var draw=function(e){
    if (started){
	mouseX=e.offsetX;
	mouseY=e.offsetY;
	var l=document.createElementNS("http://www.w3.org/2000/svg", "line");
	l.setAttribute("x1",nowX);
	l.setAttribute("y1",nowY);
	l.setAttribute("x2",mouseX);
	l.setAttribute("y2",mouseY);
	l.setAttribute("stroke","black");
	slate.appendChild(l)
	circle(e);
    }
    else{
	circle(e);
    }
};

var clear=function(e){
    while(slate.hasChildNodes()){
	slate.removeChild(slate.childNodes[0]);
    }
    nowX=0;
    nowY=0;
    started=false;
}

slate.addEventListener("click",draw);
clearButton.addEventListener("click",clear);

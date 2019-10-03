
var item= document.getElementById("out2");
item.innerHTML = 0
var item2= document.getElementById("num");
item2.innerHTML = 0;
var color =document.getElementById("out1");
var color1 =document.getElementById("out3");
color.innerHTML = "";
colors=["Red","indigo","Black","white","DarkOrange","yellow","blue","grey","SandyBrown","SkyBlue","LawnGreen","DeepPink","Wheat","SeaGreen","RosyBrown","SaddleBrown","LightSkyBlue","Silver"]
for(var i =0; i<18; i++){
    var element = document.createElement("span");
    element.setAttribute("class","round")
    element.style.backgroundColor = colors[i];
    element.setAttribute("onclick", "colorChicked(this)");
    var parent = document.getElementById("circle");
    parent.appendChild(element);

}
function colorChicked(obj){
    var selc = obj.style.backgroundColor;
    var string = selc.charAt(0).toUpperCase();

    for (var x=1; x<selc.length;x++){
        string += selc.charAt(x);
        }
    color.innerHTML = string;
    color1.innerHTML = string;
}

var n=0
function addFunction(){
  if(color.innerHTML != ""){
    n++;
    item2.innerHTML = n;
  }
}
function subFunction(){
  if (n>0){
    n--;}
  item2.innerHTML = n;
}
function agrFunction(){
    item.innerHTML = n
    if (n>0){
      for (x=0; x<n; x++){
        var element = document.createElement("span");
        element.setAttribute("class","round")
        element.style.backgroundColor = color.innerHTML;
        var parent = document.getElementById("produts");
        parent.appendChild(element);
      }

      var element=document.getElementById("btns");
      element.innerHTML="check out";
      element.dataset.traget="";
      element.dataset.toggle="nnoe";
      n=0
    }
}

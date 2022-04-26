

var logos = document.getElementsByClassName("logo");
document.onmousemove = function ()
{
    var x = event.clientX * 180  / window.innerWidth + "50%";
    var y = event.clientY * 75 / window.innerHeight + "%";
    
    for(var i=0;i<2;i++) {
    logos[i].style.left = x;
    logos[i].style.top = y;
    logos[i].style.transform = "translate(-"+x+", -"+y+")";}

}

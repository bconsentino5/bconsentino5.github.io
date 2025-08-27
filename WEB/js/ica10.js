let num_clicked = 0;
document.getElementById("paragraph").addEventListener("mouseenter", function(e){
    document.getElementById("paragraph").style.color = "blue";
});
document.getElementById("paragraph").addEventListener("mouseleave", function(e){
    document.getElementById("paragraph").style.color = "black";
});
document.getElementById("button").addEventListener("click", function(e){
    num_clicked += 1;
    if ((num_clicked %2) == 0) {
        document.getElementById("type").innerHTML = "even";
        document.getElementById("button").style.color = "red";
    }
    else {
        document.getElementById("type").innerHTML = "odd";
        document.getElementById("button").style.color = "purple";
    };
    document.getElementById("num").innerHTML = num_clicked;
    
});

let my_var = 5;
var my_other_var = "hello world"; // not as commonly used
const this_constant = "constant"; // not changable

console.log(my_other_var);

my_other_var += "!";
alert(my_other_var);

// how to interact with the DOM
console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click", function(e){
    alert('clicked the h1');
    document.getElementById("paragraph").innerHTML = "this is the new text";
    document.getElementById("paragraph").style.color = "blue";
    document.getElementById("image").src = "/img/logo.png";
});
// dblclick, mouseenter, mouseleave, mousemove
console.log(document.getElementById("my_head").innerHTML);
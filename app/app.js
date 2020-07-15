var  object = [];

var password = document.getElementById("password").value;
var email = document.getElementById("email").classList.add("red");

function validateForm() {
    if (password != "" ) {
        console.log("verde");
    }else{
        console.log("rojo");
    }
}
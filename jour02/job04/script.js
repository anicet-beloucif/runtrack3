document.addEventListener("DOMContentLoaded", (e) => {

var textarea = document.querySelector("#keylogger");

document.addEventListener("keydown", (e) => {     
if (textarea.focus) { 
    var double = e.key;
    textarea.value = textarea.value + double;
}
else {}

    })

})
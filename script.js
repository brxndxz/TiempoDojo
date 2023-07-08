function aviso(){
    alert("Loading weather report...")
}

var cookie = document.querySelector("#cookies-div");

function acceptCookies(){
    cookie.remove();
}

var temperaturas = document.querySelectorAll(".current");

function cambiar(e) {
    if (e.value == "fahrenheit") {
        for (var i=0; i<temperaturas.length; i++) {
            temperaturas[i].innerText = Math.round((parseInt(temperaturas[i].innerText) * 9)/5 + 32);
            
        }
    } else if (e.value == "celsius") {
        for (var i=0; i<temperaturas.length; i++) {
            temperaturas[i].innerText = Math.round(((parseInt(temperaturas[i].innerText) - 32) * 5)/9);
        }
    }
}
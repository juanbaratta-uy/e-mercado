document.addEventListener('DOMContentLoaded', function (){
    let usuario = localStorage.getItem('user');
    if (usuario=="" || usuario==null){
     location.href="login.html";
    }

    document.getElementById("displayUsuario").innerHTML = localStorage.getItem("user");
    });
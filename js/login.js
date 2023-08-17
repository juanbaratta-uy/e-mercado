document.addEventListener("DOMContentLoaded", comprobar);
    
    function comprobar (){
        let usuario = document.getElementById("username").value;
        let clave = document.getElementById("password").value;
        if ((usuario !== "") && (clave !== "")) {
            window.location.href = "index.html";
        }
    };
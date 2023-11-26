document.addEventListener("DOMContentLoaded", comprobar);
    
    function comprobar (){
        let email = document.getElementById("email").value;
        let clave = document.getElementById("password").value;
        let usuario = ['', '', '', ''];
        usuario.push(email);
        usuario.push('');
        usuario.push('');

        if ((email !== "") && (clave !== "")) {
            window.location.href = "index.html";
            localStorage.setItem('user',JSON.stringify(usuario));
        }
    }
        

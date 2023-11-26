document.addEventListener("DOMContentLoaded", comprobar);
    
    function comprobar (){
        let email = document.getElementById("email").value;
        let clave = document.getElementById("password").value;
        let usuario = ['', '', '', ''];
        usuario.push(email);
        usuario.push('');
        usuario.push('');

        if ((email !== "") && (clave !== "")) {
            const user = {email: email, password: clave};

            fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                localStorage.setItem("token", data.token);
                localStorage.setItem('user',JSON.stringify(usuario));
                if(data.token){
                    window.location.href = "index.html";
                }
            })
            .catch(error => {
                console.error("Error al iniciar sesión:", error);
            });

            
        }
    }
        

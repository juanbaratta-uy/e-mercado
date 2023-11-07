document.addEventListener("DOMContentLoaded", function(){
    const btnTema = document.getElementById('toggleDark');
    const body = document.querySelector('body');
    let tema = localStorage.getItem("Theme");

    if (tema === 'bi-moon'){
        body.style.background = 'black';
        body.style.color = 'white';
        btnTema.classList = ('bi-brightness-high-fill');
    }else{
        body.style.background = 'white';
        body.style.color = 'black';
        btnTema.classList = ('bi-moon');
    }

    btnTema.addEventListener('click', function(){
        this.classList.toggle(tema);
        if(tema === 'bi-brightness-high-fill'){
            this.classList.toggle('bi-moon');
            body.style.background = 'black';
            body.style.color = 'white';
            body.style.transition = '2s';
            localStorage.setItem('Theme', 'bi-moon')
            tema = 'bi-moon';
        }else if(tema === 'bi-moon'){
            this.classList.toggle('bi-brightness-high-fill');
            body.style.background = 'white';
            body.style.color = 'black';
            body.style.transition = '2s';
            localStorage.setItem('Theme', 'bi-brightness-high-fill')
            tema = 'bi-brightness-high-fill';
        }
    });

    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

document.addEventListener('DOMContentLoaded', function (){
    let usuario = localStorage.getItem('user');
    if (usuario=="" || usuario==null){
     location.href="login.html";
    }

    document.getElementById("displayUsuario").innerHTML = localStorage.getItem("user");
    });

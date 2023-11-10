document.addEventListener("DOMContentLoaded", function(){
    const btnTema = document.getElementById('toggleDark');
    const body = document.querySelector('body');
    const tarjetaAutos = document.getElementById('autos');
    const tarjetaJuguetes = document.getElementById('juguetes');
    const tarjetaMuebles = document.getElementById('muebles');
    let tema = localStorage.getItem("Theme");

    if (tema === 'bi-moon'){
        body.style.background = '#202124';
        body.style.color = 'white';
        tarjetaAutos.style.background = '#202124';
        tarjetaJuguetes.style.background = '#202124';
        tarjetaMuebles.style.background = '#202124';
        btnTema.classList = ('bi-brightness-high-fill');
    }else{
        body.style.background = 'white';
        body.style.color = 'black';
        tarjetaAutos.style.background = 'white';
        tarjetaJuguetes.style.background = 'white';
        tarjetaMuebles.style.background = 'white';
        btnTema.classList = ('bi-moon');
    }

    btnTema.addEventListener('click', function(){
        this.classList.toggle(tema);
        if(tema === 'bi-brightness-high-fill'){
            this.classList.toggle('bi-moon');
            body.style.background = '#202124';
            body.style.color = 'white';
            body.style.transition = '2s';
            tarjetaAutos.style.background = '#202124';
            tarjetaJuguetes.style.background = '#202124';
            tarjetaMuebles.style.background = '#202124';
            tarjetaAutos.style.transition = '2s';
            tarjetaJuguetes.style.transition = '2s';
            tarjetaMuebles.style.transition = '2s';
            localStorage.setItem('Theme', 'bi-moon');
            
            tema = 'bi-moon';
        }else if(tema === 'bi-moon'){
            this.classList.toggle('bi-brightness-high-fill');
            body.style.background = 'white';
            body.style.color = 'black';
            body.style.transition = '2s';
            tarjetaAutos.style.background = 'white';
            tarjetaJuguetes.style.background = 'white';
            tarjetaMuebles.style.background = 'white';
            tarjetaAutos.style.transition = '2s';
            tarjetaJuguetes.style.transition = '2s';
            tarjetaMuebles.style.transition = '2s';
            localStorage.setItem('Theme', 'bi-brightness-high-fill');
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
    let usuario = JSON.parse(localStorage.getItem('user'));
    if (usuario[4]=="" || usuario[4]==null){
     location.href="login.html";
    }

    document.getElementById("displayUsuario").innerHTML = usuario[4];
    });

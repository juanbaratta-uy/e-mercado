document.addEventListener("DOMContentLoaded", function(){
    const btnTema = document.getElementById('toggleDark');
    const body = document.querySelector('body');
    const tarjetaAutos = document.getElementById('autos');
    const tarjetaJuguetes = document.getElementById('juguetes');
    const tarjetaMuebles = document.getElementById('muebles');
    const btnMas = document.getElementById('botonMas');
    let album = document.getElementById('album');
    let jumbotron = document.getElementById('jumbotron');
    let tema = localStorage.getItem("Theme");

    if (tema === 'bi-moon'){
        jumbotron.style.filter = 'invert(0.9)';
        album.style.trasition = '2s';
        album.style.background = '#1f1e1d'
        body.style.background = '#202124';
        btnMas.style.trasition = '2s';
        btnMas.style.background = '#202124';
        btnMas.style.color = 'white'
        btnMas.style.border = '1px solid #202124';
        body.style.color = 'white';
        tarjetaAutos.style.background = '#202124';
        tarjetaJuguetes.style.background = '#202124';
        tarjetaMuebles.style.background = '#202124';
        btnTema.classList = ('bi-brightness-high-fill');
    }else{
        jumbotron.style.filter = 'invert(0)';
        album.style.trasition = '2s';
        album.style.background = '#f8f9fa';
        btnMas.style.trasition = '2s';
        btnMas.style.background = '#f8f9fa';
        btnMas.style.color = 'black';
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
            jumbotron.style.transition = '2s';
            jumbotron.style.filter = 'invert(0.9)';
            album.style.transition = '2s';
            album.style.background = '#1f1e1d'
            btnMas.style.transition = '2s';
            btnMas.style.background = '#202124';
            btnMas.style.color = 'white'
            btnMas.style.border = '1px solid #202124';
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
            jumbotron.style.transition = '2s';
            jumbotron.style.filter = 'invert(0)';
            album.style.transition = '2s';
            album.style.background = '#f8f9fa';
            btnMas.style.transition = '2s';
            btnMas.style.background = '#f8f9fa';
            btnMas.style.color = 'black';
            btnMas.style.border = 'none';
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

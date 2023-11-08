document.addEventListener('DOMContentLoaded', function (){
    let usuario = localStorage.getItem('user');
    const btnTema = document.getElementById('toggleDark');
    const body = document.querySelector('body');
    let tema = localStorage.getItem("Theme");

    if (usuario=="" || usuario==null){
     location.href="login.html";
    }

    if (tema === 'bi-moon'){
        body.style.background = 'black';
        body.style.color = 'white';
        btnTema.classList = ('bi-brightness-high-fill');
    }else{
        body.style.background = 'white';
        body.style.color = 'black';
        btnTema.classList = ('bi-moon');
    }

    document.getElementById("displayUsuario").innerHTML = localStorage.getItem("user");

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
    });

    (function () {
        'use strict'
        let forms = document.querySelectorAll('.needs-validation')
    
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (form.checkValidity()) {
              } else {
                event.preventDefault();
                event.stopPropagation();
              }
      
              form.classList.add('was-validated');
            }, false);
          });
      })()
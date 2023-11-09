let usuario = JSON.parse(localStorage.getItem('user'));
let userFirstName = document.getElementById('userFirstName');
let userSecondName = document.getElementById('userSecondName');
let userFirstSurname = document.getElementById('userFirstSurname');
let userSecondSurname = document.getElementById('userSecondSurname');
let userEmail = document.getElementById('userEmail');
let userNumber = document.getElementById('userNumber');
let user = [];

document.addEventListener('DOMContentLoaded', function (){
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

    document.getElementById("displayUsuario").innerHTML = usuario[4];

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

     preCarga(usuario);
    });

    function preCarga(user){
      userFirstName.value = user[0];
      userSecondName.value = user[1];
      userFirstSurname.value = user[2];
      userSecondSurname.value = user[3];
      userEmail.value = user[4];
      userNumber.value = user[5]
      
    }


    

      function guardarDatos(){
        (function () {
          'use strict'
          let forms = document.querySelectorAll('.needs-validation')
      
          Array.prototype.slice.call(forms)
            .forEach(function (form) {
              form.addEventListener('submit', function (event) {
                if (form.checkValidity()) {
                  user.push(userFirstName.value);
                  user.push(userSecondName.value);
                  user.push(userFirstSurname.value);
                  user.push(userSecondSurname.value);
                  user.push(userEmail.value);
                  user.push(userNumber.value);
                  localStorage.setItem('user', JSON.stringify(user));
                } else {
                  event.preventDefault();
                  event.stopPropagation();
                }
        
                form.classList.add('was-validated');
              }, false);
            });
        })()
      }
let usuario = JSON.parse(localStorage.getItem('user'));
let userFirstName = document.getElementById('userFirstName');
let userSecondName = document.getElementById('userSecondName');
let userFirstSurname = document.getElementById('userFirstSurname');
let userSecondSurname = document.getElementById('userSecondSurname');
let userEmail = document.getElementById('userEmail');
let userNumber = document.getElementById('userNumber');
let userImage = document.getElementById('userImage');
let user = [];
let imageData;

document.addEventListener('DOMContentLoaded', function (){
    const btnTema = document.getElementById('toggleDark');
    const body = document.querySelector('body');
    let tema = localStorage.getItem("Theme");

    if (usuario=="" || usuario==null){
     location.href="login.html";
    }

    if (tema === 'bi-moon'){
        body.style.background = '#202124';
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
            body.style.background = '#202124';
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
      if(!(usuario[6] === null || usuario[6] === undefined)){
        userImage.src = `data:image/png;base64,${usuario[6]}`
      }

      userFirstName.value = user[0];
      userSecondName.value = user[1];
      userFirstSurname.value = user[2];
      userSecondSurname.value = user[3];
      userEmail.value = user[4];
      userNumber.value = user[5]  
    }

      function guardarDatos(){
        convertirABase64();
              (function () {
                'use strict'
                let forms = document.querySelectorAll('.needs-validation')
            
                Array.prototype.slice.call(forms)
                  .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                      if (form.checkValidity()) {
                        user = [];
                        user.push(userFirstName.value);
                        user.push(userSecondName.value);
                        user.push(userFirstSurname.value);
                        user.push(userSecondSurname.value);
                        user.push(userEmail.value);
                        user.push(userNumber.value);
                        user.push(imageData);
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

      function convertirABase64() {
        const inputFile = document.getElementById('userImageFile');
        const archivo = inputFile.files[0];
    
        if (archivo) {
            const lector = new FileReader();
            lector.onload = function (e) {
                const base64 = e.target.result.split(',')[1];
                imageData = base64;
            };
    
            lector.readAsDataURL(archivo); 
        }
    }
    
    function verificarAcceso(){
      const token = localStorage.getItem('token');
              fetch('/cart', {
                  method: 'GET',
                  headers: {
                      'Authorization': `${token}`
                  },
                  })
                  .then(response => {
                      if(response.ok){
                          response.json()
                      }else{
                          throw new Error();
                      }
                  })
                  .then(data => {
                      console.log(data)
                      window.location = "cart.html"
                  })
                  .catch(error => {
                      console.error('Error:', error)
                      alert('El token ya no es valido. por favor vuelva a iniciar sesion')
                  })
  }
  
    
let DATA_URL = 'https://japceibal.github.io/emercado-api/user_cart/25801.json';
let cantidades = document.getElementsByClassName('cantidades');
let precios = document.getElementsByClassName('precios');
let resultados = document.getElementsByClassName('resultados');
let dataArray = JSON.parse(localStorage.getItem('Carrito'));
let tabla = document.getElementById('tabla-articulos');

document.addEventListener('DOMContentLoaded', function (){
    const btnTema = document.getElementById('toggleDark');
    const body = document.querySelector('body');
    const footer = document.getElementById('footer');
    let tema = localStorage.getItem("Theme");
    let usuario = JSON.parse(localStorage.getItem('user'));
    if (usuario[4]=="" || usuario[4]==null){
     location.href="login.html";
    }
    document.getElementById("displayUsuario").innerHTML = usuario[4];
    showData(dataArray);
    recalcular();

    if (tema === 'bi-moon'){
        body.style.background = '#202124';
        body.style.color = 'white';
        footer.style.transition = '2s';
        footer.style.background = '#212529';
        tabla.style.color = 'white';
        btnTema.classList = ('bi-brightness-high-fill');
    }else{
        body.style.background = 'white';
        body.style.color = 'black';
        footer.style.transition = '2s';
        footer.style.background = 'white';
        tabla.style.color = 'black';
        btnTema.classList = ('bi-moon');
    }

    btnTema.addEventListener('click', function(){
        this.classList.toggle(tema);
        if(tema === 'bi-brightness-high-fill'){
            this.classList.toggle('bi-moon');
            body.style.background = '#202124';
            body.style.color = 'white';
            body.style.transition = '2s';
            footer.style.background = '#212529';
            tabla.style.color = 'white';
            tabla.style.transition = '2s';
            localStorage.setItem('Theme', 'bi-moon')
            tema = 'bi-moon';
        }else if(tema === 'bi-moon'){
            this.classList.toggle('bi-brightness-high-fill');
            body.style.background = 'white';
            body.style.color = 'black';
            body.style.transition = '2s';
            footer.style.background = 'white';
            tabla.style.color = 'black';
            tabla.style.transition = '2s';
            localStorage.setItem('Theme', 'bi-brightness-high-fill')
            tema = 'bi-brightness-high-fill';
        }
    });

});


function recalcular(){
    let total = 0;
    for (let i = 0; i < precios.length; i++) {
    let cantidad = cantidades[i].value;
    let precio = parseFloat(precios[i].innerHTML);
    let subtotal = cantidad * precio;
    resultados[i].innerHTML = subtotal.toFixed(2); 
    total += subtotal; 
}
let envio = mostrarSeleccion(total)
let final = envio + total;
document.getElementById('subtotal').innerHTML = `USD ${total}`;
document.getElementById('envio').innerHTML = `USD ${envio.toFixed(0)}`;
document.getElementById('total').innerHTML = `USD ${final.toFixed(0)}`;
};

function showData(dataArray){
    for (const item of dataArray) {
    tabla.innerHTML += `<tr>
    <td><img src='${item.images[0]}' width='75px'></td>
    <td><span id="${item.name}">${item.name}</span></td>
    <td>${item.currency} <span class='precios'>${item.cost}</span></td>
    <td width='75px'><input type='number' placeholder='1' min='1' value='1' class='form-control cantidades' onchange='recalcular()'></td>
    <td><span class='resultados'></span></td>
    <td><span class="fa fa-trash" style="color: #e61d0f;" onclick="borrar(${dataArray.indexOf(item)})"></span></td>
    </tr>`; 
    }
    
}

function mostrarSeleccion(total) {
    let seleccionenvio = document.getElementsByName("envio");
    let envio = 0;
   
    for (let i = 0; i < seleccionenvio.length; i++) {
        if (seleccionenvio[i].checked) {            
              envio = total * seleccionenvio[i].value;
        }
    }
    return envio;
}

function metodoDePago(){
    let metodo = document.getElementsByName("pago");
    let inputTarjeta = document.getElementsByClassName("inputTarjeta");
    let inputTransferencia = document.getElementById('inputTransferencia');
    let valor;

    for (let i = 0; i < metodo.length; i++) {
        if (metodo[i].checked) {            
              valor = metodo[i].value
        }
    }

    if(valor === 'tarjeta'){
        for(let i = 0; i < inputTarjeta.length; i++){
            inputTarjeta[i].removeAttribute("disabled", "");
            
        }
        inputTransferencia.setAttribute("disabled", "enable");
    }
    else{
        inputTransferencia.removeAttribute("disabled", "");
        for(let i = 0; i < inputTarjeta.length; i++){
            inputTarjeta[i].setAttribute("disabled", "enable");
        }
    }

}

function borrar(item){
    let tabla = document.getElementById('tabla-articulos');
    dataArray.splice(item,1);

    tabla.innerHTML = `<tr>
    <th></th>
    <th>Nombre</th>
    <th>Costo</th>
    <th>Cantidad</th>
    <th>Subtotal</th>
    <th></th>
  </tr>`
  
    showData(dataArray);
    recalcular();
}


(function () {
    'use strict'
    let forms = document.querySelectorAll('.needs-validation')
    let alert = document.getElementById("successAlert");

    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity()) {
                alert.style.display = "block";
          } else {
            event.preventDefault();
            event.stopPropagation();
          }
  
          form.classList.add('was-validated');
        }, false);
      });
  })()
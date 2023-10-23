let DATA_URL = 'https://japceibal.github.io/emercado-api/user_cart/25801.json';
let cantidades = document.getElementsByClassName('cantidades');
let precios = document.getElementsByClassName('precios');
let resultados = document.getElementsByClassName('resultados');

document.addEventListener('DOMContentLoaded', function (){
    let dataArray = JSON.parse(localStorage.getItem('Carrito'));
    let usuario = localStorage.getItem('user');
    if (usuario=="" || usuario==null){
     location.href="login.html";
    }
    document.getElementById("displayUsuario").innerHTML = localStorage.getItem("user");
    showData(dataArray);
    recalcular();
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

function showData(data){
    let tabla = document.getElementById('tabla-articulos');
    for (const item of data) {
    tabla.innerHTML += `<tr>
    <td><img src='${item.images[0]}' width='75px'></td>
    <td><span>${item.name}</span></td>
    <td>${item.currency} <span class='precios'>${item.cost}</span></td>
    <td><input type='number' placeholder='1' min='0' value='1' class='cantidades' onchange='recalcular()'></td>
    <td><span class='resultados'></span></td>
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
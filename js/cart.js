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

    fetch(DATA_URL)
    .then(response => response.json())
    .then(data => { 
        let productoPrecargado = data.articles
        mostrarPrecargado(productoPrecargado[0]);
    })

    document.getElementById("displayUsuario").innerHTML = localStorage.getItem("user");

    showData(dataArray);
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
};

function showData(data){
    let tabla = document.getElementById('tabla-articulos');
    for (const item of data) {
    tabla.innerHTML += `<tr>
    <td><img src='${item.images[0]}' width='75px'></td>
    <td><span>${item.name}</span></td>
    <td>${item.currency} <span class='precios'>${item.cost}</span></td>
    <td><input type='number' placeholder='1' min='0' class='cantidades' onchange='recalcular()'></td>
    <td><span class='resultados'></span></td>
    </tr>`; 
    }
}

function mostrarPrecargado(data){
    let tabla = document.getElementById('tabla-articulos');
    tabla.innerHTML += `<tr>
        <td><img src='${data.image}' width='75px'></td>
        <td><span>${data.name}</span></td>
        <td>${data.currency} <span class='precios'>${data.unitCost}</span></td>
         <td><input type='number' placeholder='1' class='cantidades' onchange='recalcular()'></td>
        <td><span class='resultados'></span></td>
        </tr>`;
}
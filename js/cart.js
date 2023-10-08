let DATA_URL = 'https://japceibal.github.io/emercado-api/user_cart/25801.json'

document.addEventListener('DOMContentLoaded', function (){
    let usuario = localStorage.getItem('user');
    if (usuario=="" || usuario==null){
     location.href="login.html";
    }

    document.getElementById("displayUsuario").innerHTML = localStorage.getItem("user");
    
    fetch(DATA_URL)
    .then(response => response.json())
    .then(data => { 
        let dataArray = data.articles
        showData(dataArray[0]);
    })

});

function showData(data){
    let tabla = document.getElementById('tabla-articulos');

    tabla.innerHTML += `<tr>
    <td><img src='${data.image}' width='75px'></td>
    <td>${data.name}</td>
    <td>${data.currency} ${data.unitCost}</td>
    <td><input type='number' placeholder='1'></td>
    <td></td>
    </tr>`; 

}


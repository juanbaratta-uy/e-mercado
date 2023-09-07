let DATA_URL = "https://japceibal.github.io/emercado-api/products/"+localStorage.getItem("ProID")+".json"

document.addEventListener('DOMContentLoaded', function (){
    let usuario = localStorage.getItem('user');
    let proID = localStorage.getItem('ProID');
    if (usuario=="" || usuario==null){
     location.href="login.html";
    }

        fetch(DATA_URL)
        .then(response => response.json())
        .then(data => { 
            showData(data);
        })

        function showData(data) {
            document.getElementById('nombre').innerHTML = data.name;
            document.getElementById('precio').innerHTML = data.currency + " "+ data.cost;
            document.getElementById('descripcion').innerHTML = data.description;
            document.getElementById('categoria').innerHTML = data.category;
            document.getElementById('vendidos').innerHTML = data.soldCount;
            document.getElementById('img1').src = data.images[0];
            document.getElementById('img2').src = data.images[1];
            document.getElementById('img3').src = data.images[2];
            document.getElementById('img4').src = data.images[3];
            }

    document.getElementById("displayUsuario").innerHTML = localStorage.getItem("user");
    });
let DATA_URL = "https://japceibal.github.io/emercado-api/products/"+localStorage.getItem("ProID")+".json";
let DATA_COMMENTS = "https://japceibal.github.io/emercado-api/products_comments/"+localStorage.getItem("ProID")+".json";
let PRODUCTS = "https://japceibal.github.io/emercado-api/cats_products/"+localStorage.getItem("catID")+".json";

function showData(data) {
    document.getElementById('nombre').innerHTML = data.name;
    document.getElementById('precio').innerHTML = data.currency + " " + data.cost;
    document.getElementById('descripcion').innerHTML = data.description;
    document.getElementById('categoria').innerHTML = data.category;
    document.getElementById('vendidos').innerHTML = data.soldCount;
    document.getElementById('img1').src = data.images[0];
    document.getElementById('img2').src = data.images[1];
    document.getElementById('img3').src = data.images[2];
    document.getElementById('img4').src = data.images[3];
    }

document.addEventListener('DOMContentLoaded', function (){
    let cajaComentarios = document.getElementById('cajaComentarios');
    let usuario = localStorage.getItem('user');
    const toggle = document.getElementById('toggleDark');
    const body = document.querySelector('body');

    if (usuario=="" || usuario==null){
     location.href="login.html";
    }

        fetch(DATA_URL)
        .then(response => response.json())
        .then(data => { 
            showData(data);
        })

        fetch(DATA_COMMENTS)
        .then(response => response.json())
        .then(data => {
            showComentarios(data);
            localStorage.setItem("misComentarios", JSON.stringify(data));
        })

        fetch(PRODUCTS)
        .then(response => response.json())
        .then(productsArray => {
            showRelatedProducts(productsArray);
        })

     document.getElementById("displayUsuario").innerHTML = localStorage.getItem("user");

     toggle.addEventListener('click', function(){
        this.classList.toggle('bi-moon');
        if(this.classList.toggle('bi-brightness-high-fill')){
            body.style.background = 'white';
            body.style.color = 'black';
            body.style.transition = '2s';
        }else{
            body.style.background = 'black';
            body.style.color = 'white';
            body.style.transition = '2s';
        }
    });
    });

    function showRelatedProducts(dataArray){
        let proID = localStorage.getItem('ProID').trim();
        let filteredProducts = dataArray.products.filter(product => product.id !== parseInt(proID));
        document.getElementById('imgRelacionado1').src = filteredProducts[0].image;
        document.getElementById('imgRelacionado2').src = filteredProducts[1].image;
        document.getElementById('nombreRelacionado1').innerHTML = filteredProducts[0].name;
        document.getElementById('nombreRelacionado2').innerHTML = filteredProducts[1].name;
        
    }


    function showComentarios(dataArray){
        cajaComentarios.innerHTML = "";
        
        for (const item of dataArray){
            cajaComentarios.innerHTML += `
            <div class="list-group-item list-group-item-action cursor-active">
                   <div class="row">
                       <div class="col">
                           <div class="d-flex w-100 justify-content-between">
                               <p class="mb-1"><b>${item.user}</b> - ${item.dateTime} - ${mostrarEstrellas(item.score)}</p>
                            </div>    
                          <p class="mb-1">${item.description}</p>
                      </div>
                   </div>
               </div>`;
        }

        function mostrarEstrellas(numeroEstrellas){
            let estrellas = ""
            for(let i = 1; i <= 5; i++){
                if(i <= numeroEstrellas){
                    estrellas += `<span class="fa fa-star checked"></span>`
                }
                else estrellas += `<span class="fa fa-star"></span>`
            }
            return estrellas
        }

    //     
      }
function diaDeHoy() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var tiempo = today.getHours()+":"+today.getMinutes() + ":" + today.getSeconds();

    return (yyyy + '-' + mm + '-' + dd + " " + tiempo);
}

function comentar() {
    let misComentarios = JSON.parse(localStorage.getItem("misComentarios"));
    miDescription = document.getElementById("commentDescription").value;
    miScore = document.getElementById("commentScore").value;

    comentarioNuevo = {
        user: localStorage.getItem("user"),
        dateTime: diaDeHoy(),
        description: miDescription,
        score: miScore
    };

    misComentarios.push(comentarioNuevo);
    localStorage.setItem("misComentarios", JSON.stringify (misComentarios));

    showComentarios(misComentarios);

    document.getElementById("commentDescription").value = "";
    document.getElementById("commentScore").value = "";
}

function comentarioValido() {
    miScore = document.getElementById("commentScore").value;
    if (miScore === "") {
        alert("Elija una puntuación válida");
    } else {
        comentar();
    }
}




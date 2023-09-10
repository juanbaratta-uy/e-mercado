let DATA_URL = "https://japceibal.github.io/emercado-api/products/"+localStorage.getItem("ProID")+".json"
let DATA_COMMENTS = "https://japceibal.github.io/emercado-api/products_comments/"+localStorage.getItem("ProID")+".json"

document.addEventListener('DOMContentLoaded', function (){
    let cajaComentarios = document.getElementById('cajaComentarios');
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

        fetch(DATA_COMMENTS)
        .then(response => response.json())
        .then(data => {
            showComentarios(data);
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


    function showComentarios(dataArray){
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

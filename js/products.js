let DATA_URL = "https://japceibal.github.io/emercado-api/cats_products/"+localStorage.getItem("catID")+".json"

document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("container");
    let dataArray = [];
    let usuario = localStorage.getItem('user');
    if (usuario=="" || usuario==null){
     location.href="login.html";
    }

    fetch(DATA_URL)
    .then(response => response.json())
    .then(data => { 
        dataArray = data.products;
        showData(dataArray);
        document.getElementById("nombreCategoria").innerHTML += data.catName;
    })
    document.getElementById("sortAsc").addEventListener("click", function(){
        ordenarAsc(dataArray)
     });
     document.getElementById("sortDesc").addEventListener("click", function(){
        ordenarDesc(dataArray)
     });
     document.getElementById("sortBySold").addEventListener("click", function(){
        ordenarBySold(dataArray)
     });

     function ordenarAsc(array){
        let result = [];
            result = array.sort(function(a, b) {
                if ( a.cost > b.cost ){ return -1;}
                if ( a.cost < b.cost ){ return 1;}
                return 0;
            });
            showData(result);
        }

        function ordenarDesc(array){
            let result = [];
                result = array.sort(function(a, b) {
                    if ( a.cost < b.cost ){ return -1;}
                    if ( a.cost > b.cost ){ return 1;}
                    return 0;
                });
                showData(result);
            }

            function ordenarBySold(array){
                let result = [];
                result = array.sort(function(a, b){
                    if ( a.soldCount > b.soldCount ){ return -1;}
                    if ( a.soldCount < b.soldCount ){ return 1;}
                    return 0;
                });
                showData(result);
            }

     function showData(dataArray) {
        container.innerHTML = "";
        for (const item of dataArray) {
          container.innerHTML += `<div class="list-group-item list-group-item-action cursor-active">
          <div class="row">
              <div class="col-3">
                  <img src="${item.image}" alt="${item.description}" class="img-thumbnail">
              </div>
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">${item.name} - USD ${item.cost}</h4>
                      <small class="text-muted">${item.soldCount} vendidos</small>
                  </div>    
                  <p class="mb-1">${item.description}</p>
              </div>
          </div>
      </div>`;
        }
      }

      document.getElementById("displayUsuario").innerHTML = localStorage.getItem("user");

      document.getElementById("rangeFilterCount").addEventListener("click", function(){
        let precioMaximo = document.getElementById('rangeFilterCountMax').value;
        let precioMinimo = document.getElementById('rangeFilterCountMin').value;
        function dentroDelRango(elemento) {
            if((precioMinimo == null || precioMinimo == "") && (precioMaximo == null || precioMaximo == "")){
               return true;
            }
            else if(precioMinimo == null || precioMinimo == ""){
                return elemento.cost <= precioMaximo;
            }
            else if(precioMaximo == null || precioMaximo == ""){
                return elemento.cost >= precioMinimo;
            }
            else return elemento.cost <= precioMaximo && elemento.cost >= precioMinimo;
          }
          showData(dataArray.filter(dentroDelRango));
     });

     document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showData(dataArray);
    });
    document.getElementById('nombre').addEventListener('input', function(){
        let nombre = document.getElementById('nombre').value.toLowerCase();
        let datos = [];

        for (const item of dataArray) {
            if(item.name.toLowerCase().match(nombre)){
                datos.push(item);
                showData(datos);
            }

        }
    });
});

// get search bar element
// const searchInput = document.getElementById("searchInput");

// // store name elements in array-like object
// const namesFromDOM = document.getElementsByClassName("name");

// // listen for user events
// searchInput.addEventListener("keyup", (event) => {
//     const { value } = event.target;

//     // get user search input converted to lowercase
//     const searchQuery = value.toLowerCase();

//     for (const nameElement of namesFromDOM) {
//         // store name text and convert to lowercase
//         let name = nameElement.textContent.toLowerCase();

//         // compare current name to search input
//         if (name.includes(searchQuery)) {
//             // found name matching search, display it
//             nameElement.style.display = "block";
//         } else {
//             // no match, don't display name
//             nameElement.style.display = "none";
//         }
//     }
// });




const DATA_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json"; 
 
document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("container");
    let dataArray = [];

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

     function ordenarAsc(array){
        let result = [];
            result = array.sort(function(a, b) {
                if ( a.cost < b.cost ){ return -1;}
                if ( a.cost > b.cost ){ return 1;}
                return 0;
            });
            showData(result);
        }

        function ordenarDesc(array){
            let result = [];
                result = array.sort(function(a, b) {
                    if ( a.cost > b.cost ){ return -1;}
                    if ( a.cost < b.cost ){ return 1;}
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
})





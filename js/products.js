
const DATA_URL = "https://japceibal.github.io/emercado-api/cats_products/"+localStorage.getItem("catID")+".json"; 

const container = document.getElementById("container"); 

document.addEventListener("DOMContentLoaded", function() {
    fetch(DATA_URL)
    .then(response => response.json())
    .then(data => { 
        showData(data.products);
        document.getElementById("nombreCategoria").innerHTML += data.catName;
    })
})

function showData(dataArray) {

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
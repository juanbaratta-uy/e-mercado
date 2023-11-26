let DATA_URL = "https://japceibal.github.io/emercado-api/cats_products/"+localStorage.getItem("catID")+".json"

function setProductsId(id) {
    localStorage.setItem("ProID", id);
    window.location = "product-info.html"
}

document.addEventListener("DOMContentLoaded", function() {
    const btnTema = document.getElementById('toggleDark');
    const body = document.querySelector('body');
    let tema = localStorage.getItem("Theme");
    let container = document.getElementById("container");
    let cajaComentarios = document.getElementById('cajaComentarios');
    let dataArray = [];
    let usuario = JSON.parse(localStorage.getItem('user'));
    if (usuario[4]=="" || usuario[4]==null){
     location.href="login.html";
    }

    btnTema.addEventListener('click', function(){
        this.classList.toggle(tema);
        const container = document.getElementsByClassName('list-group-item');
        if(tema === 'bi-brightness-high-fill'){
            this.classList.toggle('bi-moon');
            body.style.background = '#202124';
            body.style.color = 'white';
            body.style.transition = '2s';

            for (let i = 0; i < container.length; i++) {
                let element = container[i];
                element.style.background = '#2b2c30';
                element.style.color = 'white';
                element.style.transition = '2s';
                
            }

            localStorage.setItem('Theme', 'bi-moon')
            tema = 'bi-moon';
        }else if(tema === 'bi-moon'){
            this.classList.toggle('bi-brightness-high-fill');
            body.style.background = 'white';
            body.style.color = 'black';
            body.style.transition = '2s';

            for (let i = 0; i < container.length; i++) {
                let element = container[i];
                element.style.color = 'black'
                element.style.background = 'white'
                element.style.transition = '2s';
            }

            localStorage.setItem('Theme', 'bi-brightness-high-fill')
            tema = 'bi-brightness-high-fill';
        }
    });

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
          container.innerHTML += `
          <div class="list-group-item list-group-item-action cursor-active" onclick="setProductsId(${item.id})">
          <div class="row">
              <div class="col-3">
                  <img src="${item.image}" alt="${item.description}" class="img-thumbnail">
              </div>
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">${item.name} - ${item.currency} ${item.cost}</h4>
                      <small class="text-muted">${item.soldCount} vendidos</small>
                  </div>    
                  <p class="mb-1">${item.description}</p>
              </div>
          </div>
      </div>`;
        }
        comprobarTema()
      }

      document.getElementById("displayUsuario").innerHTML = usuario[4];

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

function comprobarTema(){
    const container = document.getElementsByClassName('list-group-item');
    const body = document.querySelector('body');
    let tema = localStorage.getItem("Theme");
    if (tema === 'bi-moon') {
        body.style.background = '#202124';
        body.style.color = 'white';

        for (let i = 0; i < container.length; i++) {
            let element = container[i];
            element.style.background = '#2b2c30';
            element.style.color = 'white';
            
        }

    } else {
        body.style.background = 'white';
        body.style.color = 'black';

        for (let i = 0; i < container.length; i++) {
            let element = container[i];
            element.style.color = 'black'
            element.style.background = 'white'
        }

    }
}


function verificarAcceso(){
    const token = localStorage.getItem('token');
            fetch('/cart', {
                method: 'GET',
                headers: {
                    'Authorization': `${token}`
                },
                })
                .then(response => {
                    if(response.ok){
                        response.json()
                    }else{
                        throw new Error();
                    }
                })
                .then(data => {
                    console.log(data)
                    window.location = "cart.html"
                })
                .catch(error => {
                    console.error('Error:', error)
                    alert('El token ya no es valido. por favor vuelva a iniciar sesion')
                })
}

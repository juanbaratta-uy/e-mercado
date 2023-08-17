
const DATA_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json"; 

const container = document.getElementById("container"); 


function showData(dataArray) {

  for (const item of dataArray) {
    container.innerHTML += `<div><p> ${item.name} ${item.cost} ${item.description} ${item.soldCount}  </p>
    <img src="${item.image}"></div>`;
  }
}
fetch(DATA_URL)
.then(response => response.json())
.then(data => showData(data.products))

// fetch("https://japceibal.github.io/emercado-api/cats_products/101.json")
//   .then(res => res.json())
//   .then(data => {
//     data.forEach(item => {
//       const card = itemCardTemplate.content.cloneNode(true).children[0]
//       console.log(item)
//     })
//     users = data.map(item => {
//       const card = itemCardTemplate.content.cloneNode(true).children[0]
//       const header = card.querySelector("h5")
//       const imgage = card.querySelector("img")
//       const body = card.querySelector("p")

//       imgage.setAttribute('img', item.image)
//       header.textContent = item.name
//       body.textContent = item.cost, item.description
//       itemCardContainer.append(card)
//       return { name: item.name, precio: item.cost, img: item.img, element: card }
      
//     })
//   })
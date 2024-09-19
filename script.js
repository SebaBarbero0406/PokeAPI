let url = "https://pokeapi.co/api/v2/pokemon/"

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    crearCard(data.results)
  });

let container = document.getElementById("container")

function crearCard(data) {

  let cardsHTML = ""

  for (let i = 0; i < data.length; i++) {
    let pokemonName = data[i].name;
    let capitalizedPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

    cardsHTML += `
    <div class="card">
      <p class="nombre_card">${capitalizedPokemonName}</p>
      <a href="${data[i].url}">${data[i].url}</a>
    </div>
    `
  }
  container.innerHTML = cardsHTML
}

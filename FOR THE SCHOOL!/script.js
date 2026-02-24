let games = JSON.parse(localStorage.getItem("lpmath_games")) || [];

function saveGames() {
  localStorage.setItem("lpmath_games", JSON.stringify(games));
}

function renderGames() {
  const list = document.getElementById("gameList");
  list.innerHTML = "";

  games.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerText = game.name;
    card.onclick = () => openGame(game.url);
    list.appendChild(card);
  });
}

function addGame() {
  const name = document.getElementById("gameName").value;
  const url = document.getElementById("gameURL").value;

  if (!name || !url) return alert("Enter both fields");

  games.push({ name, url });
  saveGames();
  renderGames();

  document.getElementById("gameName").value = "";
  document.getElementById("gameURL").value = "";
}

function openGame(url) {
  document.getElementById("viewer").classList.remove("hidden");
  document.getElementById("gameFrame").src = url;
}

function closeGame() {
  document.getElementById("viewer").classList.add("hidden");
  document.getElementById("gameFrame").src = "";
}

renderGames();
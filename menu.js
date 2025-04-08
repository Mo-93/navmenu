// JSON data voor het menu
const menuData = [
  { title: "home", url: "/" },
  { title: "producten", url: "/producten/" },
  { title: "Over ons", url: "/overons/" },
  { title: "contact", url: "/contact/" }
];

// Functie om het menu te maken en in de <nav> te plaatsen
function createMenu(data) {
  const ul = document.createElement("ul");

  data.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.title;
    li.appendChild(a);
    ul.appendChild(li);
  });

  document.getElementById("main-menu").appendChild(ul);
}

// Event listener voor hamburger menu knop
function setupHamburgerMenu() {
  const toggleButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-menu");

  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// Alles uitvoeren zodra de pagina geladen is
document.addEventListener("DOMContentLoaded", () => {
  createMenu(menuData);
  setupHamburgerMenu();
});

  
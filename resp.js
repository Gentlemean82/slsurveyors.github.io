burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".nav-list");
rightnav = document.querySelector(".rightnav");

burger.addEventListener("click", () => {
  rightnav.classList.toggle("v-class-resp");
  navlist.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
});

function openpage() {
  var x = document.getElementById("search").value;
  if (x === "contact") window.location.href = "#contact";
  if (x === "contact us") window.location.href = "#contact";
  if (x === "Contact Us") window.location.href = "#contact";
  if (x === "Contact") window.location.href = "#contact";
  if (x === "home") window.location.href = "#final";
}

function search() {
  var searchString = document.getElementById("search").value;
  // alert("searched: " + searchString);
}

/////////////////// VIEW TOGGLE ///////////////////////////


var listLink = document.getElementById("list-view");
var addLink = document.getElementById("add-view");

listLink.addEventListener("click", function(event) {
  event.preventDefault();
  addLink.classList.add("hidden");
  addLink.classList.remove("visible");
  listLink.classList.add("visible");
  listLink.classList.remove("hidden");
});

addLink.addEventListener("click", function(event) {
  event.preventDefault();
  listLink.classList.add("hidden");
  listLink.classList.remove("visible");
  addLink.classList.add("visible");
  addLink.classList.remove("hidden");
});
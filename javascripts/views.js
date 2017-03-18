/////////////////// VIEW TOGGLE ///////////////////////////

var listLink = document.getElementById("link-list");
var addLink = document.getElementById("link-add");

var listDiv = document.getElementById("list-view");
var addDiv = document.getElementById("add-view");

listLink.addEventListener("click", function(event) {
  // event.preventDefault();
  addDiv.classList.add("hidden");
  addDiv.classList.remove("visible");
  listDiv.classList.add("visible");
  listDiv.classList.remove("hidden");
  addLink.classList.remove("active");
  listLink.classList.add("active");
});

addLink.addEventListener("click", function(event) {
  // event.preventDefault();
  listDiv.classList.add("hidden");
  listDiv.classList.remove("visible");
  addDiv.classList.add("visible");
  addDiv.classList.remove("hidden");
  listLink.classList.remove("active");
  addLink.classList.add("active");
});
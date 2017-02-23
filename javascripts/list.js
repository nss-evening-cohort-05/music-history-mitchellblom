var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");

listLink.addEventListener("click", function(event) {
  event.preventDefault();
  homeView.classList.add("hidden");
  addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");
});
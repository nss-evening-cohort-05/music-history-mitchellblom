var listLink = $("#link-list");
var addLink = $("#link-add");

var listDiv = $("#list-view");
var addDiv = $("#add-view");

listLink.click(function(e) {
    addDiv.addClass("hidden");
    addDiv.removeClass("visible");
    listDiv.addClass("visible");
    listDiv.removeClass("hidden");
    addLink.removeClass("active");
    listLink.addClass("active");
});

$("#link-add").click(function(e) {
    listDiv.addClass("hidden");
    listDiv.removeClass("visible");
    addDiv.addClass("visible");
    addDiv.removeClass("hidden");
    listLink.removeClass("active");
    addLink.addClass("active");
});

$.get("/view/navigation_bar.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});


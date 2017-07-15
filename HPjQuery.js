
$(function() {
//Dropdown Toggle
  $(".dropdown-item").on("click", function() {
    $("nav-link dropdown-toggle #StoreType").html((this).text());
  });


});

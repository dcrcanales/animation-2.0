$(document).ready(function() {
  var menu_1 = "Cover";
  var menu_2 = "Home";
  var menu_3 = "Features";
  var menu_4 = "Contact";

  $("#item-1").html(menu_1);
  $("#item-2").html(menu_2);
  $("#item-3").html(menu_3);
  $("#item-4").html(menu_4);

  var hiddenBox = $("#text-1");
  $("#learn-more").on("click", function(event) {
    hiddenBox.show();
    featuresBox.hide();
    contactBox.hide();
  });

  var featuresBox = $("#feature-container");
  $("#item-3").on("click", function(event) {
    featuresBox.show();
    hiddenBox.hide();
    contactBox.hide();
  });

  var contactBox = $("#contact-container");
  $("#item-4").on("click", function(event) {
    contactBox.show();
    hiddenBox.hide();
    featuresBox.hide();
  });
});

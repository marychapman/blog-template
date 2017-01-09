
$("#show").click(function() {
  $("p, .hidden").fadeOut("slow");

  $(this).addClass("selected");
  $(this).removeClass("notSelected");

  $("#hide").addClass("notSelected");
  $("#hide").removeClass("selected");
});

$("#hide").click(function() {
  $("p, .hidden").fadeIn("slow");

  $(this).addClass("selected");
  $(this).removeClass("notSelected");

  $("#show").addClass("notSelected");
  $("#show").removeClass("selected");
});

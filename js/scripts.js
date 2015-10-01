jQuery(document).ready(function() {

  // jQuery("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // jQuery("ul").click(function() {
  //   alert("This is a unordered list");
  // });
  //
  // jQuery("img").hover(function() {
  //   alert("This is a paragraph");
  // });
  //
  // jQuery(".intro").dblclick(function() {
  //   alert("This is a paragraph");
  // });
  //
  // jQuery("p").click(function() {
  //   alert("This is a paragraph");
  // });

  $(".clickable1").click(function() {
    $(".initially-hidden").toggle();
    $(".initially-showing").toggle();

  })


 $(".clickable2").click(function() {
  //  $(".initially-showing-to-fade").fadeOut();
   $("ul").prepend("<li>Walruses are cool</li>");
   $("li").css("background", "green");
   $("ul").children("li").even().css("background", "red");
});

// $(".clickable3").click(function() {
//   $(".initially-hidden-to-fade").fadeOut();
//   $(".initially-showing-to-fade").fadeIn();
// })


});

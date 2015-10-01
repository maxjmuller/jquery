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

  $(".clickable").click(function() {
    $(".initially-hidden").toggle();
    $(".initially-showing").toggle();
  })




});

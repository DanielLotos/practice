// Call accordion
$( "li.user__item--categories" ).click(function() {
  $( "div.hamburger" ).toggleClass( "is-active" ); // animation hamburger
  $( "ul.categories" ).slideToggle("fast"); // active accordion
});

// Function detect resize window
$(function() {
  $(window).resize(delAttClass);
});

// Cleaning extra attributs and classes
function delAttClass() {
  let widthVal = document.body.clientWidth + 15;
  if (widthVal >= 1023) {
    document.getElementsByClassName("categories")[0].removeAttribute("style");
    document.getElementsByClassName("hamburger")[0].classList.remove("is-active");
  }
};

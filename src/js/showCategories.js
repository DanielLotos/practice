// Call accordion
$( "li.user__item--categories" ).click(function() {
  $( "div.hamburger" ).toggleClass( "is-active" ); // animation hamburger
  $( "ul.user-categories" ).slideToggle("fast"); // active accordion
});

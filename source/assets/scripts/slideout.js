var Slideout = (function() {
  function Slideout(element, toggler, state) {
    this.element = element;
    this.toggler = toggler;
    this.state = state != null ? state : false;
  }

  return Slideout;

})();

var $slideout = new Slideout("#sidebar", "#slideout-toggle, ul.main-menu > li");

$($slideout.toggler).on("click", function(e) {
  if ($slideout.state) {
    $($slideout.element).removeClass("slideout");
    $slideout.state = false;
  } else {
    $($slideout.element).addClass("slideout");
    $slideout.state = true;
  }
});
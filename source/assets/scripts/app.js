//= require jquery/dist/jquery
//= require bootstrap-sass/assets/javascripts/bootstrap-sprockets
//= require masonry/dist/masonry.pkgd
//= require imagesloaded/imagesloaded
//= require nprogress/nprogress
//= require_tree .

// Show the progress bar 
NProgress.start();

// Increase randomly
var interval = setInterval(function() { NProgress.inc(); }, 1000);        

// Trigger finish when page fully loaded
$(window).load(function () {
    clearInterval(interval);
    NProgress.done();
});

// Trigger bar when exiting the page
$(window).unload(function () {
    NProgress.start();
});

var $container = $('.project-container');
$container.imagesLoaded( function() {
  $container.masonry({
      itemSelector: '.project'
  });
});
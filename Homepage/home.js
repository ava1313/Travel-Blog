
  // Initialize Owl Carousel
//owl carousel 
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      autoplay : 5000,
      loop: true,
      margin: 10,
      nav: false, 
      dots: true, 
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 3
          }
      }
  });
});


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
document.querySelectorAll('.instagram-post').forEach((post, index) => {
    post.addEventListener('mouseover', () => {
        post.style.transform = 'scale(1.1)';
        post.style.zIndex = 10; // Bring to the foreground
    });

    post.addEventListener('mouseout', () => {
        post.style.transform = 'scale(1)';
        post.style.zIndex = index + 1; // Reset to original layer
    });
});


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
const posts = document.querySelectorAll('.instagram-post');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
    const firstPost = posts[0];
    firstPost.parentElement.appendChild(firstPost);
    updatePosts();
});

rightArrow.addEventListener('click', () => {
    const lastPost = posts[posts.length - 1];
    lastPost.parentElement.insertBefore(lastPost, posts[0]);
    updatePosts();
});

function updatePosts() {
    posts.forEach((post, index) => {
        switch (index) {
            case 0:
                post.style.transform = 'scale(0.8) rotate(10deg)';
                post.style.zIndex = '1';
                break;
            case 1:
                post.style.transform = 'scale(0.9) rotate(-10deg)';
                post.style.zIndex = '2';
                break;
            case 2:
                post.style.transform = 'scale(1)';
                post.style.zIndex = '3';
                break;
        }
    });
}

updatePosts();

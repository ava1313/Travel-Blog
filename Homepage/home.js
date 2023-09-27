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
  
// Layered Posts Logic
const postsContainer = document.querySelector('.layered-posts');
const posts = Array.from(postsContainer.querySelectorAll('.post'));

let currentIndex = 0;

function updatePosts() {
    posts.forEach((post, index) => {
        let position = (index - currentIndex + 3) % 3; // Adjust for negative values
        switch (position) {
            case 0:
                post.style.transform = 'scale(0.8) rotate(20deg)';
                post.style.zIndex = '1';
                break;
            case 1:
                post.style.transform = 'scale(0.9) rotate(-20deg)';
                post.style.zIndex = '2';
                break;
            case 2:
                post.style.transform = 'scale(1)';
                post.style.zIndex = '3';
                break;
        }
    });
}

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 3;
    updatePosts();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + 3) % 3; // Adjust for negative values
    updatePosts();
});

updatePosts();

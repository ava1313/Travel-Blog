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




document.addEventListener("DOMContentLoaded", function() {

    // Initialize the map
    var map = L.map('travel-map', {
        maxBounds: [[-90, -180], [90, 180]], // Set bounds to prevent panning beyond the visible world
        maxBoundsViscosity: 1.0 // Makes the bounds fully solid, preventing the user from dragging outside the bounds
    }).setView([20, 0], 2); // Adjust the zoom level to 2 to see the entire globe

    // Add a satellite tile layer (Esri)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    }).addTo(map);

    // Add markers for places you've been
    var places = [
        {
            lat: 40.730610, 
            lng: -73.935242, 
            title: 'New York',
            images: ['image1.jpg', 'image2.jpg'],
            articles: [
                {title: 'Article 1 about NY', link: 'link_to_article1.html'},
                {title: 'Article 2 about NY', link: 'link_to_article2.html'}
            ]
        },
        {
            lat: 48.8566, 
            lng: 2.3522, 
            title: 'Paris',
            images: ['path_to_paris_image1.jpg', 'path_to_paris_image2.jpg'],
            articles: [
                {title: 'Article 1 about Paris', link: 'link_to_paris_article1.html'},
                {title: 'Article 2 about Paris', link: 'link_to_paris_article2.html'}
            ]
        }
        // Add more places as needed
    ];
    

    places.forEach(function(place) {
        L.marker([place.lat, place.lng]).addTo(map)
        .bindPopup(place.title)
        .openPopup();
    });

});
places.forEach(function(place) {
    var popupContent = '<div class="popup-content">';

    // Add images
    place.images.forEach(function(image) {
        popupContent += '<img src="' + image + '" alt="' + place.title + '" class="popup-image">';
    });

    // Add article links
    popupContent += '<ul class="popup-articles">';
    place.articles.forEach(function(article) {
        popupContent += '<li><a href="' + article.link + '">' + article.title + '</a></li>';
    });
    popupContent += '</ul>';

    popupContent += '</div>';

    // Create marker with popup
    L.marker([place.lat, place.lng])
    .bindPopup(popupContent, { closeButton: false }) // Disable the default close button
    .on('mouseover', function (e) {
        this.openPopup();
    })
    .on('mouseout', function (e) {
        this.closePopup();
    })
    .addTo(map);
});

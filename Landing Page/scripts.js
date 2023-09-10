$(document).ready(function() {
    let lastScrollTop = 0;
    let superTopPosition = 0;
    let topPosition = 0;
    let midgroundPosition = 0;
    let foregroundPosition = 0;
    let travelBlogPosition = -300;

    function updateTravelBlogPosition() {
        let scrollTop = $(window).scrollTop();
        let scrollHeight = $(document).height();
        let windowHeight = $(window).height();
        let maxScroll = scrollHeight - windowHeight;
        let windowWidth = $(window).width();
        let centerPosition = ((windowWidth - $('#travel-blog-text').width()) / 2) ;  // Subtract 50 pixels to move it to the left

        if (scrollTop > maxScroll - 500) {
            $('#travel-blog-text').css('opacity', 1);
            let slideInFactor = (scrollTop - (maxScroll - 500)) / 500;
            travelBlogPosition = -300 + (slideInFactor * (centerPosition + 330));
            $('#travel-blog-text').css('left', travelBlogPosition + 'px');
            
            if (travelBlogPosition >= 0) {
                $('#continue-button').fadeIn(1000);  // Fades in over 1 second
                $('#monument1').fadeIn(1000);  // Fades in over 1 second
               
              } else {
                $('#continue-button').fadeOut(500);  // Fades out over 1 second
                $('#monument1').fadeOut(500);  // Fades out over 1 second
            
              
              }
        }
    }
  // Set initial position for "Travel Blog" text
  let windowWidth = $(window).width(); // Get the window width
  let initialPosition = -300 + (0 * windowWidth * 0.61); // Initial position
  $('#travel-blog-text').css('left', initialPosition + 'px');
    $(window).scroll(function() {
        let scrollTop = $(this).scrollTop();
        superTopPosition += (scrollTop > lastScrollTop) ? 5 : -5;
        $('.super-top-layer').css('background-position-x', superTopPosition + 'px');

        topPosition += (scrollTop > lastScrollTop) ? -0.5 : 0.5;
        $('.top-layer').css('background-position-x', topPosition + 'px');

        midgroundPosition += (scrollTop > lastScrollTop) ? 1.5 : -1.5;
        $('.midground-layer').css('background-position-x', midgroundPosition + 'px');

        foregroundPosition += (scrollTop > lastScrollTop) ? -1 : 1;
        $('.foreground-layer').css('background-position-x', foregroundPosition + 'px');

        updateTravelBlogPosition();

        lastScrollTop = scrollTop;
    });

    $(window).resize(function() {
        updateTravelBlogPosition();
    });

    document.getElementById("continue-button").addEventListener("click", function() {
        console.log("Button clicked");
        window.location.href = '../Homepage/home.html';
    });
});

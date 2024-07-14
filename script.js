$(document).ready(function() {
    // Project Content Click Event
    $('.project-content').on('click', function() {
        // Remove 'selected' class from all project content
        $('.project-content').removeClass('selected');
        // Add 'selected' class to the clicked project content
        $(this).addClass('selected');
        // Get the image source from data attribute and update the project image
        var src = $(this).data('image');
        console.log(src);
        $('#projectImage').attr('src', src);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const formGroups = document.querySelectorAll('.formGroup');

    formGroups.forEach(formGroup => {
        const input = formGroup.querySelector('input');
        const label = formGroup.querySelector('label');

        // Add 'filled' class on input focus
        input.addEventListener('focus', function () {
            label.classList.add('filled');
        });

        // Toggle 'filled' class based on input value on blur
        input.addEventListener('blur', function () {
            const inputValue = this.value.trim();
            if (inputValue !== '') {
                label.classList.add('filled');
            } else {
                label.classList.remove('filled');
            }
        });
    });
});

$(document).ready(function () {
    // Close Form Button Click Event
    $('#closeFormBtn').on('click', function () {
        $('#contactForm').removeClass('show');
        $('body').removeClass('no-scroll');
        $('main').removeClass('blur');
    });

    // Contact Us Button Click Event
    $('#contactUsBtn').on('click', function () {
        $('#contactForm').addClass('show');
        $('body').addClass('no-scroll');
        $('main').addClass('blur');
    });

    // Function to clear the form with a delay
    $('#submitBtn').on('click', function () {
        setTimeout(() => {
            $("#getform").trigger("reset");
        }, 700);
    });

});

$(document).ready(function () {
    const carouselContainer = $('.carousel-container');
    const dots = $('.dot');
    let currentIndex = 0;
    const items = carouselContainer.children('.carousel');
    const totalItems = items.length;

    // Clone items to make infinite scroll effect
    items.clone().appendTo(carouselContainer);
    items.clone().appendTo(carouselContainer);

    // Function to go to a specific slide
    function goToSlide(index) {
        carouselContainer.css('transform', 'translateX(' + (-110 * index) + '%)');
        dots.removeClass('red-circle');
        dots.eq(index % totalItems).addClass('red-circle');
    }

    // Function to go to the next slide
    function nextSlide() {
        currentIndex++;
        if (currentIndex >= totalItems) {
            currentIndex = 0;
            goToSlide(currentIndex);
        } else {
            goToSlide(currentIndex);
        }
    }

    // Change slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Dot Click Event to go to a specific slide
    dots.on('click', function () {
        currentIndex = $(this).index();
        goToSlide(currentIndex);
    });
});
$(document).ready(function() {
    $('.project-content').on('click', function() {
        $('.project-content').removeClass('selected');
        $(this).addClass('selected');
        var src = $(this).data('image');
        console.log(src)
        $('#projectImage').attr('src', src);
    });
});

const formGroups = document.querySelectorAll('.formGroup');

    formGroups.forEach(formGroup => {
        const input = formGroup.querySelector('input');
        const label = formGroup.querySelector('label');

        input.addEventListener('focus', function () {
            label.classList.add('filled');
        });

        input.addEventListener('blur', function () {
            const inputValue = this.value.trim();

            if (inputValue !== '') {
                label.classList.add('filled');
            } else {
                label.classList.remove('filled');
            }
        });

    });

$(document).ready(function () {
    $('#closeFormBtn').on('click', function () {
        $('#contactForm').removeClass('show');
        $('body').removeClass('no-scroll');
        $('main').removeClass('blur');
    });

    $('#contactUsBtn').on('click',function () {
        $('#contactForm').addClass('show');
        $('body').addClass('no-scroll');
        $('main').addClass('blur');
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

    function goToSlide(index) {
        carouselContainer.css('transform', 'translateX(' + (-70 * index) + '%)');
        dots.removeClass('red-circle');
        dots.eq(index % totalItems).addClass('red-circle');
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= totalItems) {
            currentIndex = 0;
            goToSlide(currentIndex);
        } else {
            goToSlide(currentIndex);
        }
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    dots.on('click', function () {
        currentIndex = $(this).index();
        goToSlide(currentIndex);
    });


});

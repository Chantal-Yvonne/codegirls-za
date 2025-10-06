// ========== SIMPLE JQUERY-BASED JAVASCRIPT ==========

$(document).ready(function() {
    
    // ========== MOBILE MENU ==========
    $('.hamburger').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $('#mobileMenu').toggleClass('active');
    });

    // Close mobile menu when clicking outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.navbar').length) {
            $('.hamburger').removeClass('active');
            $('#mobileMenu').removeClass('active');
        }
    });

    // Close mobile menu when clicking links
    $('.mobile-menu a').click(function() {
        $('.hamburger').removeClass('active');
        $('#mobileMenu').removeClass('active');
    });

    // ========== DROPDOWN MENU ==========
    $('.dropdown > a').click(function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });

    // ========== SMOOTH SCROLL ==========
    $('a[href^="#"]').click(function(e) {
        var target = $(this).attr('href');
        if (target !== '#' && $(target).length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(target).offset().top - 80
            }, 800);
        }
    });

    // ========== HEADER SCROLL EFFECT ==========
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.header').css('box-shadow', '0 4px 12px rgba(0, 0, 0, 0.15)');
        } else {
            $('.header').css('box-shadow', '0 1px 3px rgba(0, 0, 0, 0.08)');
        }
    });

    // ========== SCROLL ANIMATIONS (LIKE CHARITEAM) ==========
    function animateOnScroll() {
        $('.about-cg-boxes, .course, .testimonial-item, .leader-img, .team-member').each(function() {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < viewportBottom - 100) {
                $(this).addClass('animate-in');
            }
        });
    }

    // Run on scroll
    $(window).scroll(function() {
        animateOnScroll();
    });

    // Run on page load
    animateOnScroll();

    // ========== TESTIMONIALS CAROUSEL AND STUDENT PROJECTS (OWL CAROUSEL) ==========
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 }
        }
    });

 $('.student-projects-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 0,          // no delay between slides
  speed: 7000,               // how long one scroll takes (ms)
  cssEase: 'linear',         // makes it continuous
  pauseOnHover: false,
   variableWidth: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } }
  ]
});


    // ========== FAQ ACCORDION ==========
    $('.accordion-header').click(function() {
        // Close other sections
        $('.accordion-content').not($(this).next()).slideUp(400);
        $('.accordion-header').not($(this)).removeClass('active');
        
        // Toggle clicked section
        $(this).next('.accordion-content').slideToggle(400);
        $(this).toggleClass('active');
    });

    // ========== FORM VALIDATION (JQUERY VALIDATE) ==========
    $("#contactForm").validate({
        rules: {
            fullname: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10
            },
            'info-options': {
                required: true
            }
        },
        messages: {
            fullname: {
                required: "Please enter your name",
                minlength: "Name must be at least 3 characters"
            },
            email: {
                required: "Please enter your email",
                email: "Enter a valid email address"
            },
            phone: {
                required: "Please enter your phone number",
                minlength: "Phone number must be at least 10 digits"
            },
            'info-options': {
                required: "Please select an option"
            }
        },
        submitHandler: function(form) {
            alert('Thank you! Your message has been sent.');
            form.reset();
            return false;
        }
    });

    // ========== COUNTER ANIMATION (LIKE CHARITEAM) ==========
    // function animateCounters() {
    //     $('.counter').each(function() {
    //         var $this = $(this);
    //         if (!$this.hasClass('counted')) {
    //             var countTo = $this.attr('data-count');
    //             $({ countNum: 0 }).animate({
    //                 countNum: countTo
    //             }, {
    //                 duration: 2000,
    //                 easing: 'swing',
    //                 step: function() {
    //                     $this.text(Math.floor(this.countNum));
    //                 },
    //                 complete: function() {
    //                     $this.text(this.countNum);
    //                     $this.addClass('counted');
    //                 }
    //             });
    //         }
    //     });
    // }

    // Trigger counter animation on scroll
    // $(window).scroll(function() {
    //     var counterTop = $('.counter').length ? $('.counter').first().offset().top : 0;
    //     var viewportBottom = $(window).scrollTop() + $(window).height();
        
    //     if (counterTop < viewportBottom - 100) {
    //         animateCounters();
    //     }
    // });

    // ========== PARALLAX EFFECT (SIMPLE) ==========
    // $(window).scroll(function() {
    //     var scrolled = $(window).scrollTop();
    //     $('.hero-section').css('background-position', 'center ' + (scrolled * 0.5) + 'px');
    // });

 

});

    // ========== BACK TO TOP BUTTON ==========

  const backToTopButton = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

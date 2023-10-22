/*  ---------------------------------------------------
    Theme Name: Anime
    Description: Anime video tamplate
    Author: Colorib
    Author URI: https://colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            FIlter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.filter__gallery').length > 0) {
            var containerEl = document.querySelector('.filter__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });



    /*------------------
		Hero Slider
	--------------------*/
    var hero_s = $(".hero__slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        nav: true,
        navText: ["<span class='arrow_carrot-left'></span>", "<span class='arrow_carrot-right'></span>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false
    });

    /*------------------
        Video Player
    --------------------*/
    /*const player = new Plyr('#player', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'captions', 'settings', 'fullscreen'],
        seekTime: 25
    });*/

    /*------------------
        Niceselect
    --------------------*/
    $('select').niceSelect();

    /*------------------
        Scroll To Top
    --------------------*/
    $("#scrollToTopButton").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
     });
})(jQuery);

/*-------------
SIgn/Login 
-------------*/

document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll(".custom-form");
    const loginButton = document.querySelector(".login-button");

    forms.forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const isValid = validateForm(form);

            if (isValid) {
                // Create a new form and add it to the document
                var newForm = document.createElement('form');
                newForm.setAttribute('action', 'Wallpapers.HTML');
                newForm.setAttribute('method', 'GET');

                const formData = {
                    email: form.querySelector(".email").value,
                    username: form.querySelector(".username").value,
                    password: form.querySelector(".password").value
                };

                for (var key in formData) {
                    var input = document.createElement('input');
                    input.setAttribute('type', 'text');
                    input.setAttribute('name', key);
                    input.setAttribute('value', formData[key]);
                    newForm.appendChild(input);
                }

                document.body.appendChild(newForm);
                newForm.submit();
            }
        });
    });

    // Signup
    const isValidEmail = emailVal => {
        let atSymbol = emailVal.indexOf('@');
        if (atSymbol < 1) return false;
        let dot = emailVal.lastIndexOf('.');
        if (dot <= atSymbol + 2) return false;
        if (dot === emailVal.length - 1) return false;
        return true;
    }

    function validateForm(form) {
        let isValid = true;

        const emailVal = form.querySelector(".email").value.trim();
        const usernameVal = form.querySelector(".username").value.trim();
        const passwordVal = form.querySelector(".password").value.trim();

        if (emailVal === "") {
            setError(form.querySelector(".email"), "Email address cannot be blank");
            isValid = false;
        } else if (!isValidEmail(emailVal)) {
            setError(form.querySelector(".email"), "Email is not valid");
            isValid = false;
        } else {
            setSuccess(form.querySelector(".email"));
        }

        if (usernameVal === "") {
            setError(form.querySelector(".username"), "UserName cannot be blank");
            isValid = false;
        } else {
            setSuccess(form.querySelector(".username"));
        }

        if (passwordVal === "") {
            setError(form.querySelector(".password"), "Password cannot be blank");
            isValid = false;
        } else {
            setSuccess(form.querySelector(".password"));
        }

        return isValid;
    }

    function setError(element, message) {
        const inputItem = element.parentElement;
        const errorDisplay = inputItem.querySelector(".error");

        errorDisplay.innerText = message;
        inputItem.classList.add("error");
        inputItem.classList.remove("success");
    }

    function setSuccess(element) {
        const inputItem = element.parentElement;
        const errorDisplay = inputItem.querySelector(".error");

        errorDisplay.innerText = "";
        inputItem.classList.add("success");
        inputItem.classList.remove("error");
    };

    const loginForm = document.getElementById("login-form");
    const emailInput = loginForm.querySelector(".email"); 
    const passwordInput = loginForm.querySelector(".password");
    const errorMessage = loginForm.querySelector(".error"); 

    loginForm.addEventListener("submit", function (event) {
        if (!isEmailValid(emailInput.value)) {
            event.preventDefault();
            errorMessage.textContent = "Email is not valid.";
        } else if (passwordInput.value.trim() === "") {
            event.preventDefault();
            errorMessage.textContent = "Password cannot be blank.";
        } else {
            errorMessage.textContent = ""; 
        }
    });

    function isEmailValid(email) {
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return pattern.test(email);
    }
});

 // Open the modal
 function openModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");

    modalImage.src = imageSrc;

    modal.style.display = "block";

    modal.onclick = function() {
        modal.style.display = "none";
    };
}

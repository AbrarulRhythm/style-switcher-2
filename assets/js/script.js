/*
    Author: Mountain Theme 
*/

$(document).ready(function () {
    "use strict";

    /*---------------------------------------
        Style Switcher
    ----------------------------------------*/
    $('.switcher-btn').on('click', function () {
        $('.color-switcher').toggleClass('active');
    });

    let themeButtons = $('.theme-button');

    themeButtons.each(function () {
        $(this).on('click', function () {
            let dataColor = $(this).attr('data-color');
            $(':root').css('--secondary-color', dataColor);
        });
    });

});
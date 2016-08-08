$(document).ready(function () {
    $('.fb-link').hover( function () {
        $('.fb-link').addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd' +
            ' MSAnimationEnd oanimationend animationend', function () {
            $('.fb-link').removeClass('animated bounce');
        });
    });
});

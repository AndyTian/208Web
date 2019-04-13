$(document).ready(function () {
    $('#file').mouseenter(function () {
        $('#menu').fadeIn(1000)

    });
    $('#file').mouseleave(function () {
        $('#menu').fadeOut(100)

    });
   /* $("#fileicon").hide();
    $("#profileicon").hide();
    $("#calendaricon").hide();
    $("#fileicon").fadeIn(1000);
    $("#calendaricon").fadeIn(2000);
    $("#profileicon").fadeIn(3000);*/

    $('#fileicon').rotate({
        angle: 0,
        animateTo: 360,


    });



});
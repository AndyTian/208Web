$(document).ready(function () {
    $('#file').mouseenter(function () {
        $('#menu').fadeIn(1000)

    });
    $('#file').mouseleave(function () {
        $('#menu').fadeOut(100)

    });
    $("#fileicon").hide();
    $("#profileicon").hide();
    $("#calendaricon").hide();
    $("#fileicon").fadeIn(1000);
    $("#calendaricon").fadeIn(2000);
    $("#profileicon").fadeIn(3000);

    $("#fileicon").rotate({
        bind:
            {
                mouseover : function() {
                    $(this).rotate({animateTo:360})
                },
                mouseout : function() {
                    $(this).rotate({animateTo:0})
                }
            }

    });
    $("#calendaricon").rotate({
        bind:
            {
                mouseover : function() {
                    $(this).rotate({animateTo:360})
                },
                mouseout : function() {
                    $(this).rotate({animateTo:0})
                }
            }

    });
    $("#profileicon").rotate({
        bind:
            {
                mouseover : function() {
                    $(this).rotate({animateTo:360})
                },
                mouseout : function() {
                    $(this).rotate({animateTo:0})
                }
            }

    });







});
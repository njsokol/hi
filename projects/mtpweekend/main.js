
$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        //anchors:['page1', 'page2', 'page3', 'page4'],
        lockAnchors: true,

        //Scrolling
        css3: true,
        scrollingSpeed: 800,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false,
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        continuousVertical: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        resize : false,
        //fixedElements: '#header, .footer',

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
    });

    $.preloadImages = function() {
        for (var i = 0; i < arguments.length; i++) {
            $("<img />").attr("src", arguments[i]);
        }
    }
    $.preloadImages("frio_1_bw.jpg","frio_2_bw.jpg", "frio_10.jpg");

});

function scrollToSecondPage() { $.fn.fullpage.moveTo(2); }
function scrollToThirdPage() { $.fn.fullpage.moveTo(3); }
function scrollToFourthPage() { $.fn.fullpage.moveTo(4); }

$('img.headshot').bind('mouseenter mouseleave', function() {
    $(this).attr({
        src: $(this).attr('data-other-src') 
        , 'data-other-src': $(this).attr('src') 
    })
});


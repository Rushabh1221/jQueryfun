//console.log($);
//console.log(jQuery);

/*
$("#btn").click(function () {
    console.log("Button is clicked");
});
*/

/*
jQuery.noConflict(); //It frees the '$' sign from jquery..
jQuery(document).ready(function ($) {
    $("#btn").click(function () {
        console.log("Button clicked!!");
    });
});
*/

/*
jQuery.noConflict(); 
jQuery(document).ready(function ($) {
    $("button").click(function () {      //for element
        console.log("Button clicked!!");
    });

    $("p").click(function () {           //for element
        alert("This is a p tag..");
    });

    $('#btn').click(function () {        //for id
        console.log("button2 clicked!!");
    });

    $('.myclass').click(function () {    //for class
        console.log("button3 clicked!!");
    });
});
*/

/*
jQuery.noConflict(); 
jQuery(document).ready(function ($) {
    //Mouse Events:
    $('h2').click(function () {
        console.log("touched!!");
    });

    $('h2').dblclick(function () {
        console.log("Double touched!!");
    });

    $('h2').mouseenter(function () {
        console.log("Mouse entered!!");
    });

    $('h2').mouseleave(function () {
        console.log("Mouse leave!!");
    });
});
*/

jQuery.noConflict(); 
jQuery(document).ready(function ($) {
    //Keyboard Events:
    $('#n').keypress(function () {
        console.log("Key pressed!!");
    });

    $('#n').keydown(function () {
        console.log("Key down!!");
    });

    $('#n').keyup(function () {
        console.log("Key up!!");
    });
});

jQuery.noConflict(); 
jQuery(document).ready(function ($) {
    //Focus, Blur and Submit Events:
    $('#unm').focus(function () {
        console.log("Focus field ON");
    });

    $('#unm').blur(function () {
        console.log("Blur field ON");
    });

    $('#fm').submit(function (e) {
        console.log("Form submitted");
        e.preventDefault();
    });

    $(window).resize(function () {
        console.log("Resized..");
    });

    $(window).scroll(function () {
        console.log("Scrolled..");
    });
});
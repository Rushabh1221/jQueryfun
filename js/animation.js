//console.log($);
//console.log(jQuery);

jQuery.noConflict(); 
jQuery(document).ready(function ($) {
    //Hide image:
    $('#btnh').click(function () {
        $('#img').hide(2000, function () {
            console.log("Image is hide!!");
        });
    });
    
    //Show image:
    $('#btns').click(function () {
        $('#img').show(2000, function () {
            console.log("Image is shown!!");
        });
    });
    
    //Toggle image:
    $('#btntog').click(function () {
        $('#img').toggle(2000, function () {
            console.log("Image is toggled!!");
        });
    });
    
    //Fade Out:
    $('#btn-fadeout').click(function () {
        $('#img').fadeOut(1000, function () {
            console.log("Image Fadeout!!");
        });
    });
    
    //Fade In:
    $('#btn-fadein').click(function () {
        $('#img').fadeIn(1000, function () {
            console.log("Image Fadein!!");
        });
    });
    
    //Fade Toggle:
    $('#btn-fadetoggle').click(function () {
        $('#img').fadeToggle(1000, function () {
            console.log("Image Fadetoggled!!");
        });
    });

    //Fade To:
    $('#btn-fadeto').click(function () {
        $('#img').fadeTo(1000, 0.5, function () {
            console.log("Image is faded by size!!");
        });
    });

    //Slide Down:
    $('#btn-slidedown').click(function () {
        $('#img').slideDown(1000, function () {
            console.log("Image is slideDown!!");
        });
    });
    
    //Slide Up:
    $('#btn-slideup').click(function () {
        $('#img').slideUp(1000, function () {
            console.log("Image is slideUp!!");
        });
    });
    
    //Slide Toggle:
    $('#btn-slidetoggle').click(function () {
        $('#img').slideToggle(1000, function () {
            console.log("Image is slidetoggled!!");
        });
    });   
    
    //Animate: To perform a custom animation of set of CSS properties:
    $('#btn-anime').click(function () {
        $('#img2').animate({ left: "+=80" }, 1000, function () {
            console.log("Image is animating!!");
        });
    });  
    
    //Get text or data:
    let data = $('p').text();
    console.log(data);

    //Set text or data:
    //$('p').text('Great Vibes..');
    $('#btn-set').click(function () {
        $('p').text('Set button is clicked..');
    });

    //Get HTML:
    let html = $('p').html();
    console.log(html);

    //Set HTML:
    $('#btn-sethtml').click(function () {
       $('p').html('<b>This is para tag</b>'); 
    });

    //Get Value:
    let v = $('#nmnm').val();
    console.log(v);

    //Set Value:
    $('#btn-setval').click(function () {
        $('#nmnm').val('Bikaneri Production'); 
     });    

    //Get Attrs:
    let attrval = $('link').attr('href'); 
    console.log(attrval);

    let attrval2 = $('#nmnm').attr('data-secret'); 
    console.log(attrval2);

    //Set Attrs:
    $('#btn-setattrs').click(function () {
        $('#nmnm').attr('data-secret', '8920923');
        console.log("New Data-Secret: ", $('#nmnm').attr('data-secret'));
    });

    //Set Img src attrs:
    $('#btn-imgattrs').click(function () {
       //$('#img').attr('src', 'C:\jQuery\image\Spidey.jpg'); 
       console.log("Image is changed..");
    });

    //Add Class:
    $('#btn-addclass').click(function () {
       let cls = $('p').addClass('myclass');
       console.log(cls); 
    });

    //Remove Class:
    $('#btn-removeclass').click(function () {
        $('p').removeClass('myclass');
    });    

    //Toggle Class:
    $('#btn-toggleclass').click(function () {
        $('p').toggleClass('myclass');
    });     
    
    //Get CSS Properties Value:
    let cssp = $('#did').css('font-family');
    console.log(cssp);

    //Set CSS Properties:
    $("#btn-setcss").click(function () {
        $('#did').css('font-size', '30px');
    });

    //Set multiple CSS Properties:
    $("#btn-setmulticss").click(function () {
        $('#did').css({'font-size': '30px', 'background-color': 'black'});
    })    
});
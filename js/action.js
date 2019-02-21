"use strict";

$('.client-carousell > .box > .over').html( clientCarousell( client_carousell ) );

$('#personal_numbers').html( renderCards( personal_numbers ) );

$('#services').html( renderCards( services ) );

$('#jobs').html( renderJobs( jobs ) );

setInterval(
    clientAnimation,
    1000
);

$('#testimonials > .list').html( renderTestimonials( testimonials, testimonials_index ) );



$('#testimonials > .tools > .fa-long-arrow-left').click(function(){
    var index_visible = $('#testimonials > .list > .item').index(),
        total = $('#testimonials > .list > .item').length;

    testimonials_index--;

    // update bar position
    if ( testimonials_index > 0 ) {
        // jump to previous
        var bar_margin = (100 / (total - 2)) * (testimonials_index - 1);
    } else {
        // jump from first to last
        var bar_margin = (100 / (total - 2)) * (total - 3);
        testimonials_index = total - 2;
    }
    $('#testimonials > .tools > .bar > .scroll').css('margin-left', bar_margin+'%');

    if ( testimonials_index  !== total - 2 ) {
        console.log('A');
        $( "#testimonials > .list" ).animate({ "margin-left": ( -100 * testimonials_index )+'%' }, "slow");
    } else {
        console.log('B');
        $( "#testimonials > .list" ).css('margin-left', ( -100 * (total - 1) )+'%');
        $( "#testimonials > .list" ).animate(
            {
                "margin-left": ( -100 * (total - 2) )+'%'
            },
            "slow"
        );
    }
});

$('#testimonials > .tools > .fa-long-arrow-right').click(function(){
    var index_visible = $('#testimonials > .list > .item').index(),
        total = $('#testimonials > .list > .item').length;

    testimonials_index++;

    // update bar position
    if ( testimonials_index < 4 ) {
        // jump to next
        var bar_margin = (100 / (total - 2)) * (testimonials_index - 1);
    } else {
        // jump form last to first
        var bar_margin = 0;
        testimonials_index = 1;
    }
    $('#testimonials > .tools > .bar > .scroll').css('margin-left', bar_margin+'%');

    if ( testimonials_index  !== 1 ) {
        $( "#testimonials > .list" ).animate({ "margin-left": ( -100 * testimonials_index )+'%' }, "slow");
    } else {
        $( "#testimonials > .list" ).animate(
            {
                "margin-left": ( -100 * (total - 1) )+'%'
            },
            "slow",
            function(){
                $( "#testimonials > .list" ).css('margin-left', '-100%');
            }
        );
    }
});

$('#projects').html( renderProjects( projects ) );

$('#projects > .filter > .option').click(function(){
    var option_text = $(this).text();

    if ( option_text === 'All categories' ) {
        $('#projects > .list > .item').show();
    } else {
        $('#projects > .list > .item').each(function(){
            var ar_radai = false;
            $(this).find('.texts > .tags > .tag').each(function(){
                if ( $(this).text() === option_text ) {
                    ar_radai = true;
                }
            });
            if ( ar_radai === true ) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
});

$('#main_header .menu-icon.fa-bars').click(function(){
    $('body').toggleClass('menu-visible');
});

$('#main_header .menu-icon.fa-times').click(function(){
    $('body').addClass('hiding-menu');

    setTimeout(function(){ $('body').removeClass('menu-visible hiding-menu') }, 1000);
});

$('.menu > .half-menu > a').click(function(){
    // uzdarome menu
    $('#main_header .menu-icon.fa-times').trigger('click');
    // scroliname iki reikiamos sekcijos
});
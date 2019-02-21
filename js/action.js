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
    var index_visible = $('#testimonials > .list > .item[style="display: inline-block;"]').index(),
        total = $('#testimonials > .list > .item').length;
    
    if ( index_visible > 0 ) {
        // update bar position
        var bar_margin = (100 / total) * (index_visible - 1);
        $('#testimonials > .tools > .bar > .scroll').css('margin-left', bar_margin+'%');
    
        // update testimonials visibility
        $('#testimonials > .list > .item').hide();
        $('#testimonials > .list > .item').eq( index_visible - 1 ).css('display','inline-block');
    } else {
        // update bar position
        var bar_margin = (100 / total) * (total - 1);
        $('#testimonials > .tools > .bar > .scroll').css('margin-left', bar_margin+'%');
    
        // update testimonials visibility
        $('#testimonials > .list > .item').hide();
        $('#testimonials > .list > .item').eq(total - 1).css('display','inline-block');
    }
});

$('#testimonials > .tools > .fa-long-arrow-right').click(function(){
    var index_visible = $('#testimonials > .list > .item[style="display: inline-block;"]').index(),
        total = $('#testimonials > .list > .item').length;
    
    if ( index_visible+1 < total ) {
        // update bar position
        var bar_margin = (100 / total) * (index_visible + 1);
        $('#testimonials > .tools > .bar > .scroll').css('margin-left', bar_margin+'%');
    
        // update testimonials visibility
        $('#testimonials > .list > .item').hide();
        $('#testimonials > .list > .item').eq( index_visible + 1 ).css('display','inline-block');
    } else {
        // update bar position
        var bar_margin = 0;
        $('#testimonials > .tools > .bar > .scroll').css('margin-left', bar_margin+'%');
    
        // update testimonials visibility
        $('#testimonials > .list > .item').hide();
        $('#testimonials > .list > .item').eq(0).css('display','inline-block');
    }
});
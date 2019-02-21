"use strict";

/*
    1 - ar nurodyti visi kritiniai "input" kintamieji
        1.1 - tinkmasis tipas ir dydis (min/max)
    2 - ciklas
        2.1 - tikriname ar yra kritines objektu reiksmes
        2.2 - nekritinems reiksmems del viso pikto ir pasitikriname
            2.2.1 - jei nera nekritines reiksmes, tai "reset'inam"
        2.3 - konstruojame objekto HTML
    3 - graziname visko HTML
 */


/**
 * "Client carousell" HTML kodo generavimas
 * @param {object} logo_list - Nuotrauku sarasas
 * @returns {string} "Client carousell" HTML kodas
 */
function clientCarousell( logo_list ) {
    var HTML = '',
        failas = '';

    if ( typeof(logo_list) !== 'object' || logo_list.length < 1 ) {
        return HTML;
    }

    for ( var i=0; i<logo_list.length; i++ ) {
        failas = logo_list[i].file_name;
        // console.log( logo_list[i] );
        // console.log( logo_list[i].file_name );
        // console.log( logo_list[i].alt );
        // console.log( logo_list[i]['file_name'] );
        // console.log( logo_list[i]['alt'] );
        if ( typeof( failas ) === 'string' && failas.length > 4 ) {
            HTML += '<div style="background-image: url(img/clients-carousell/'+ failas +');" alt="'+ logo_list[i].alt +'"></div>';
        }
    }

    return HTML+HTML;
}

/**
 * Render cards
 * @param {object} card_list - Cards list (array)
 * @returns {string} Cards HTML
 */
function renderCards( card_list ) {
    var HTML = '',
        card;

    if ( typeof(card_list) !== 'object' ||
         card_list.length < 1 ) {
        return HTML;
    }
    
    for ( var i=0; i<card_list.length; i++ ) {
        card = card_list[i];
        // console.log( card );

        if ( typeof( card.icon ) === 'string' &&
             card.icon.length > 0 &&
             typeof( card.number ) === 'number' &&
             typeof( card.text ) === 'string' &&
             card.text.length > 0 ) {
    
            HTML += `<div class="card">
                        <div class="icon">
                            <i class="fa fa-${card.icon}"></i>
                        </div>
                        <div class="number">${card.number}</div>
                        <h4>${card.text}</h4>
                    </div>`;
        }

        if ( typeof( card.icon ) === 'string' &&
             card.icon.length > 0 &&
             typeof( card.text ) === 'string' &&
             card.text.length > 0 &&
             typeof( card.p ) === 'string' &&
             card.p.length > 0 ) {
    
            HTML += `<div class="card">
                        <div class="icon">
                            <i class="fa fa-${card.icon}"></i>
                        </div>
                        <h4>${card.text}</h4>
                        <p>${card.p}</p>
                    </div>`;
        }
    }

    return HTML;
}


/**
 * Render jobs
 * @param {object} jobs_list - Jobs list (array)
 * @returns {string} Jobs HTML
 */
function renderJobs( jobs_list ) {
    var HTML = '',
        job,
        job_date_to = '',
        address = '',
        description = '';

    if ( typeof(jobs_list) !== 'object' ||
         jobs_list.length < 1 ) {
        return HTML;
    }

    for ( var i=0; i<jobs_list.length; i++ ) {
        job = jobs_list[i];
        job_date_to = '',
        address = '';
        description = '';

        if ( typeof( job.position_title ) === 'string' &&
             job.position_title.length > 0 &&
             typeof( job.date ) === 'object' &&
             typeof( job.date.from ) === 'string' &&
             job.date.from.length > 0 ) {
    
            if ( !job.date.to ) {
                job_date_to = 'Present';
            } else {
                job_date_to = job.date.to;
            }
            if ( job.address ) {
                address = job.address;
            }
            if ( job.description ) {
                description = job.description;
            }
            HTML += `<div class="job">
                        <div class="top">
                            <div class="titles">
                                <h4>${job.position_title}</h4>
                                <address>${address}</address>
                            </div>
                            <div class="btn">${job.date.from} to ${job_date_to}</div>
                        </div>
                        <p>${description}</p>
                    </div>`;
        }
    }

    return HTML;
}



var margin_left = 0;

function clientAnimation() {
    var shift = 20;
    
    margin_left = margin_left - shift;

    if ( margin_left === -120 ) {
        margin_left = 0;
        $( ".client-carousell > div > div" ).css("margin-left", margin_left+'%');
    } else {
        $( ".client-carousell > div > div" ).animate({ "margin-left": margin_left+'%' }, "slow");
    }

    return;
}



function renderTestimonials( data, index ) {
    var HTML = '',
        testimonial,
        HTML_show = ' style="display: inline-block;"',
        HTML_hide = ' style="display: none;"',
        HTML_stars = '';

    if ( typeof(data) !== 'object' ||
        data.length < 1 ) {
        return HTML;
    }

    if ( typeof(index) !== 'number' ||
        index < 1 ||
        index > data.length ) {
        index = 1;
    }

    for ( var i=0; i<data.length; i++ ) {
        testimonial = data[i];

        if ( typeof(testimonial.author) === 'string' &&
             testimonial.author.length > 0 &&
             typeof(testimonial.text) === 'string' &&
             testimonial.text.length > 0 ) {
            
            HTML_stars = '';
            for ( var z=0; z<testimonial.stars; z++ ) {
                HTML_stars += '<div class="fa fa-star"></div>';
            }
            // comment loop (for) below, if want to display only given stars
            for ( var z=0; z<5-(testimonial.stars); z++ ) {
                HTML_stars += '<div class="fa fa-star-o"></div>';
            }

            HTML += `<div class="item" ${ i+1 === index ? HTML_show : HTML_hide }>
                        <div class="quote">99</div>
                        <h4>${testimonial.author}</h4>
                        <div class="stars">${HTML_stars}</div>
                        <p>${testimonial.text}</p>
                    </div>`;
        }
    }

    // update bar position
    var bar_margin = (100 / data.length) * (index - 1);
    $('#testimonials > .tools > .bar > .scroll').css('margin-left', bar_margin+'%');

    return HTML;
}
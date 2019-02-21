"use strict";

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

    return HTML;
}


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

            // HTML += '<div class="card">\
            //             <div class="icon"></div>\
            //             <div class="number">'+ card_list[i].number +'</div>\
            //             <h4>'+ card_list[i].text +'</h4>\
            //         </div>';
    
            HTML += `<div class="card">
                        <div class="icon"></div>
                        <div class="number">${card_list[i].number}</div>
                        <h4>${card_list[i].text}</h4>
                    </div>`;
        }
    }

    return HTML;
}
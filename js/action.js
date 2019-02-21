"use strict";

$('.client-carousell > .box > .over').html( clientCarousell( client_carousell ) );

$('#personal_numbers').html( renderCards( personal_numbers ) );

$('#services').html( renderCards( services ) );

$('#jobs').html( renderJobs( jobs ) );

setInterval(
    clientAnimation,
    1000
);
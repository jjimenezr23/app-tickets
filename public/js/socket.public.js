var socket = io();

var lblticket1 = $('#lblTicket1');
var lblticket2 = $('#lblTicket2');
var lblticket3 = $('#lblTicket3');
var lblticket4 = $('#lblTicket4');


var lblDesk1 = $('#lblEscritorio1');
var lblDesk2 = $('#lblEscritorio2');
var lblDesk3 = $('#lblEscritorio3');
var lblDesk4 = $('#lblEscritorio4');

var lblTickets = [lblticket1, lblticket2, lblticket3, lblticket4];
var lblDesk = [lblDesk1, lblDesk2, lblDesk3, lblDesk4];


socket.on('estadoActual', function(data) {

    console.log(data);
    updateHTML(data.last4);

});

function updateHTML(last4) {

    for (var i = 0; i <= last4.length - 1; i++) {
        lblTickets[i].text('Ticket ' + last4[i].number);
        lblDesk[i].text('Escritorio ' + last4[i].desk);

    }

}
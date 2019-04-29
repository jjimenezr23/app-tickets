var socket = io();


var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error("El escritorio es necesario");

}

var desk = searchParams.get('escritorio');
var label = $('small');
console.log(desk);

$('h1').text('escritorio' + desk);
$('button').on('click', function() {

    socket.emit('atenderTicket', { desk: desk }, function(resp) {
        if (resp === 'there is not ticket') {
            label.text(resp);
            alert(resp);
            return;
        }
        label.text('Ticket' + resp.number);
    });
});
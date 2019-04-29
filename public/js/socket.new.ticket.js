//comando para extablecer la comunicacion con el servidor
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {

    console.log("client conect");

});

socket.on('disconnect', function() {

    console.log("client disconect");

});

socket.on('estadoActual', function(resp) {
    console.log(resp);
    label.text(resp.actual);

});

$('button').on('click', function() {

    socket.emit('nextTicket', null, function(nextTicket) {

        label.text(nextTicket);
    });

});
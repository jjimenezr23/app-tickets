const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');


const ticketControl = new TicketControl();


io.on('connection', (client) => {

    client.on('nextTicket', (data, callback) => {
        let next = ticketControl.nextTicket();

        console.log(next);
        callback(next);


    });

    // emit estadoActual
    client.emit('estadoActual', {
            actual: ticketControl.getLastTicket(),
            last4: ticketControl.getLast4()
        }

    );

    client.broadcast.emit('lastfour ', {

        last4: ticketControl.getLast4()

    });

    client.on('atenderTicket', (data, callback) => {

        if (!data.desk) {
            return callback({

                err: true,
                mensaje: "el escritorio es necesario"

            });
        }

        let atenderTicket = ticketControl.atenderTicket(data.desk);

        callback(atenderTicket);





    });


});
const fs = require('fs');

class Ticket {

    constructor(number, desk) {

        this.number = number;
        this.desk = desk;





    }




}
class TicketControl {


    constructor() {

        this.last = 0;
        this.today = new Date().getDate();
        this.tickets = [];
        this.last4 = [];

        let data = require('../data/data.json');

        if (data.today === this.today) {

            this.last = data.last;
            this.tickets = data.tickets;
            this.last4 = data.last4;

        } else {

            this.restartcount();
        }
    }

    restartcount() {

        this.last = 0;
        this.tickets = [];
        this.last4 = [];
        console.log("se ha reinicado el sistema");
        this.saveFile();


    }




    nextTicket() {
        this.last += 1;
        let ticket = new Ticket(this.last, null);
        this.tickets.push(ticket);
        this.saveFile();
        return `Ticket ${ this.last }`;
    }

    getLastTicket() {

        return `Ticket ${ this.last }`;

    }

    getLast4() {

        return this.last4;

    }

    atenderTicket(desk) {
        if (this.tickets.length === 0) {
            return "there is not ticket";
        }

        let numberTicket = this.tickets[0].number;
        this.tickets.shift(); // elimina primera posicion del arreglo

        let atenderTicket = new Ticket(numberTicket, desk); // crea nuevo ticket a atender

        this.last4.unshift(atenderTicket); // agrega el ticket al inicio del arreglo
        if (this.last4.length > 4) {

            this.last4.splice(-1, 1); // delete the last element

        }

        console.log("last 4");
        console.log(this.last4);

        this.saveFile();

        return atenderTicket; // regresa el ticket a atender

    }


    saveFile() {

        let jsonDAta = {

            last: this.last,
            today: this.today,
            tickets: this.tickets,
            last4: this.last4
        };

        let jsonDataString = JSON.stringify(jsonDAta);
        fs.writeFileSync('./server/data/data.json', jsonDataString);



    }



}

module.exports = {

    TicketControl

}
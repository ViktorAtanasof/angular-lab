function TicketsManager(ticketsInfo: string[], criteria: string) {
    class Tickets {
        destination: string;
        price: number;
        status: string;

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    };

    const result: any[] = [];

    for (let ele of ticketsInfo) {
        let [destination, price, status] = ele.split('|');

        result.push(new Tickets(destination, Number(price), status));
    }

    result.sort((a, b) => {
        if (criteria == 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (criteria == 'status') {
            return a.status.localeCompare(b.status);
        } else if (criteria == 'price') {
            return a.price - b.price;
        }
    });

    return result;
};

TicketsManager(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');
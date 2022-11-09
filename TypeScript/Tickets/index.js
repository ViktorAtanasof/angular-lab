function TicketsManager(ticketsInfo, criteria) {
    var Tickets = /** @class */ (function () {
        function Tickets(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        return Tickets;
    }());
    ;
    var result = [];
    for (var _i = 0, ticketsInfo_1 = ticketsInfo; _i < ticketsInfo_1.length; _i++) {
        var ele = ticketsInfo_1[_i];
        var _a = ele.split('|'), destination = _a[0], price = _a[1], status_1 = _a[2];
        result.push(new Tickets(destination, Number(price), status_1));
    }
    result.sort(function (a, b) {
        if (criteria == 'destination') {
            return a.destination.localeCompare(b.destination);
        }
        else if (criteria == 'status') {
            return a.status.localeCompare(b.status);
        }
        else if (criteria == 'price') {
            return a.price - b.price;
        }
    });
    return result;
}
;
TicketsManager(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'destination');

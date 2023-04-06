var OfficialDealer = /** @class */ (function () {
    function OfficialDealer() {
        this.customers = [];
    }
    OfficialDealer.prototype.orderAuto = function (customer, auto, info) {
        this.addToCustomersList(customer);
    };
    OfficialDealer.prototype.addToCustomersList = function (customer) {
        this.customers.push(customer);
    };
    OfficialDealer.prototype.getCustomerList = function () {
        return this.customers;
    };
    return OfficialDealer;
}());
var Customer = /** @class */ (function () {
    function Customer(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }
    Customer.prototype.getname = function () {
        return this.name;
    };
    Customer.prototype.makeOrder = function (auto, info) {
        this.dealerMediator.orderAuto(this, auto, info);
    };
    return Customer;
}());
var mediator = new OfficialDealer();
var Ivan = new Customer('Ivan', mediator);
var Pavel = new Customer('Pavel', mediator);
Ivan.makeOrder('BMW', 'With autopilot');
Pavel.makeOrder('Yamaha', 'Motobyke');
console.log(mediator.getCustomerList());

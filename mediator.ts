class OfficialDealer{
    customers: string[]
    
    constructor(){
        this.customers = []
    }

    orderAuto(customer:string, auto:string, info:string){
        this.addToCustomersList(customer)
    }

    addToCustomersList(customer:string){
        this.customers.push(customer);
    }

    getCustomerList(){
        return this.customers;
    }
}

class Customer{
    name: string
    dealerMediator:any
    constructor(name:string, dealerMediator:any){
        this.name = name
        this.dealerMediator = dealerMediator
    }

    getname(){
       return this.name 
    }
    makeOrder(auto:string, info:string){
        this.dealerMediator.orderAuto(this, auto, info)
    }
}

const mediator = new OfficialDealer();
const Ivan = new Customer('Ivan', mediator)
const Pavel = new Customer('Pavel', mediator)

Ivan.makeOrder('BMW', 'With autopilot')
Pavel.makeOrder('Yamaha', 'Motobyke')

console.log(mediator.getCustomerList())
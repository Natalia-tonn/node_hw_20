class Vehicle {
    make: string
    model: string

    constructor(
        make: string,
        model: string,
    ){
        this.make = make,
        this.model = model
    }
    describe(){
        console.log(`Vehicle ${this.make} ${this.model}`);   
    }
  
    }
    class Motorcycle extends  Vehicle{
        type: string

        constructor ( make: string, model: string,  type: string ){
            super(make, model)
            this.type = type
           
        }
        describe() {
            console.log(`Motorcycle: ${this.make} ${this.model}, Type ${this.type}`);
}
    }
const car = new Vehicle("BMW", "x5")
car.describe()

const bike = new Motorcycle ("Kawasaki", "Ninja", "Sportbike")
bike.describe()
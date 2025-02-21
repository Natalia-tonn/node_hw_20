class Animal{
    name: string
    species: string
    constructor(
        name: string,
        species: string,
    ){
        this.name = name;
        this.species = species
    }
    sound(){
        console.log(`The animal makes a sound`);
        
    }
}
class Dog extends Animal{
    breed: string;
    constructor (name: string, breed:string){
        super(name, "Dog");
        this.breed = breed;
    }

    sound(){
        console.log("The dog barks");
        
    }
}
    const animal = new Animal("Lion", "Wild Animal")
    animal.sound()

    const myDog = new Dog("Mike", "chow chow");
myDog.sound(); 

console.log(myDog.name);
console.log(myDog.species);
console.log(myDog.breed);



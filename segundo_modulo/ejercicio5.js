class Animal{
    constructor(legs, brain){
        this.legs = legs;
        this.brain = brain;
    }

    sleep(){
        return "I'm sleeping ZZZZZ";
    }

}

const animal = new Animal(4, true);
console.log(animal.sleep());
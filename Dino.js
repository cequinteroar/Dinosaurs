class Dino {
    constructor(species, fact, location, age, diet, weight, height) {
        this.species = species;
        this.fact = fact;
        this.location = location;
        this.age = age;
        this.diet = diet;
        this.weight = weight;
        this.height = height;
        this.factArray = [this.fact];
        this.picture = "./images/" + species + ".png";
    }
}
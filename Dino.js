export function Dino(species, fact, location, age, diet, weight, height){
    this.species = species;
    this.fact = fact;
    this.location = location;
    this.age = age;
    this.diet = diet;
    this.weight = weight;
    this.height = height;
    this.picture = ".\images"+species+".png";
}
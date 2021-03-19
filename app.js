async function getDinos() {
    let response = await fetch('dino.json');
    let data = await response.json();
    return data.Dinos;
}

// Create Dino Objects
async function createDinos() {
    const dinos = await getDinos();
    let dinosObjects = [];
    dinos.map(dino => {
        dinosObjects.push(new Dino(dino.species, dino.fact, dino.where, dino.when, dino.diet, dino.weight, dino.height));
    });
    return dinosObjects;
}

// Use IIFE to get human data from form
const getHumanData = (function (user) {
    const name = document.getElementsByName("name")[0].value;
    const location = document.getElementsByName("where")[0].value;
    const height = document.getElementsByName("inches")[0].value;
    const diet = document.getElementsByName("diet")[0].value;
    user.name = name;
    user.location = location;
    user.height = height;
    user.diet = diet;
});


// Create Dino Compare Method 1
Dino.prototype.compareLocation = function (human) {
    if(this.species.toLowerCase() !== "pigeon"){
        if(human.location !== ""){
            let factArray = this.factArray;
            const newFact = human.location.toLowerCase() === this.location.toLowerCase() ? `Cool! Both of you are from ${human.location}` : `The dinousaur is from ${this.location}, but you are from ${human.location}`;
            factArray.push(newFact);
            this.factArray = factArray;
        }
    }
}

// Create Dino Compare Method 2
Dino.prototype.compareHeight = function (human) {
    if(this.species.toLowerCase() !== "pigeon"){
        if(human.height > 0){
            let factArray = this.factArray;
            const newFact = `He he, The dinousaur is ${this.height - human.height} inches taller than you`;
            factArray.push(newFact);
            this.factArray = factArray;
        }
    }
}


// Create Dino Compare Method 3
Dino.prototype.compareDiet = function (human) {
    if(this.species.toLowerCase() !== "pigeon"){
        if(human.diet !== ""){
            let factArray = this.factArray;
            const newFact = human.diet.toLowerCase() === this.diet.toLowerCase() ? `Cool! Both of you are ${human.diet}` : `The dinousaur is ${this.diet}, but you are ${human.diet}`;
            factArray.push(newFact);
            this.factArray = factArray;
        }
    }
}

// Generate Tiles for each Dino in Array
function generateTiles(dinos, human){
    let infosArray = dinos;
    infosArray.splice(4, 0, human);
    infosArray.forEach(dino => {
        const tileItem = document.createElement("div");
        tileItem.className = "grid-item";
        createTileInfo(dino, tileItem, human)
        document.getElementById("grid").appendChild(tileItem);
    });
}

// Add tiles to DOM
function createTileInfo(dino, tileItem, human) {
    const title = document.createElement("h3");
    const img = document.createElement("img");
    const fact = document.createElement("p");

    //  Dino comparison is called and fact is set
    if(dino.species){
        dino.compareDiet(human);
        dino.compareHeight(human);
        dino.compareLocation(human);
        fact.textContent = dino.factArray[Math.floor(Math.random() * dino.factArray.length)];
    }
    // Data is sent to DOM
    title.textContent = (dino instanceof Human) ? dino.name : dino.species;
    img.src = dino.picture;

    // Appending children to tile dom
    tileItem.appendChild(title);
    tileItem.appendChild(img);
    if(dino instanceof Dino)
        tileItem.appendChild(fact);
}

// Remove form from screen
function removeForm() {
    const form = document.getElementById("dino-compare");
    form.style.display = "none";
}

async function compare() {
    const dinos = await createDinos();
    // Create Human Object
    let human = new Human();
    getHumanData(human);
    removeForm();
    generateTiles(dinos, human);
}


// On button click, prepare and display infographic

const compareButton = document.getElementById("compare");
compareButton.addEventListener("click", compare);
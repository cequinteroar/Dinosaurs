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
Dino.prototype.compareLocation = function () {

}

// Create Dino Compare Method 2
Dino.prototype.compareHeight = function () {

}


// Create Dino Compare Method 3
Dino.prototype.compareDiet = function () {

}


// Generate Tiles for each Dino in Array
function createTileInfo(dino, tileItem) {
    const title = document.createElement("h3");
    const img = document.createElement("img");
    const fact = document.createElement("p");
    title.textContent = dino.species;
    img.src = dino.picture;
    fact.textContent = (dino instanceof Human) ? "":dino.fact;
    tileItem.appendChild(title);
    tileItem.appendChild(img);
    tileItem.appendChild(fact);
}

function generateTiles(dinos, human){
    let infosArray = dinos;
    infosArray.splice(4, 0, human);
    infosArray.forEach(dino => {
        const tileItem = document.createElement("div");
        tileItem.className = "grid-item";
        createTileInfo(dino, tileItem)
        document.getElementById("grid").appendChild(tileItem);
    });
}

// Add tiles to DOM

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

const compareBtn = document.getElementById("compare");
compareBtn.addEventListener("click", compare);
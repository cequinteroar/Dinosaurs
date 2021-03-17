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
        dinosObjects.push(new Dino(dino.species, dino.fact, dino.where, dino.when, dino.diet, dino.weight, dini.height));
    });
    return dinosObjects;    
} 
    

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

async function compare(){
    const dinos = createDinos();
}

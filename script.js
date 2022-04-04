// Spread Destructuring Functions Exercise


// 1a. Create a const variable named jPDinos and set the value of the variable to the following array items "Velociraptors", "Tyrannosaurus Rex", and "Dilophosaurus"
    
    const jPDinos = [
        'Velociraptors',
        'Tyrannosaurus Rex',
        'Dilophosaurus'
    ];

// 1b. Create a declaration function called seeDinos. Create the function so that when the function is run the following will display in the terminal/console. It will need to display "Velociraptor" on one line and on the next line display an array with "Tyrannosaurus Rex" and "Dilophosaurus" as items inside the array. Also, you must run the function and are required to use both SPREAD and REST to complete this question (AKA 1b).
    
function seeDinos(x, ...y){
        console.log(x);
        console.log(y);
    };
    seeDinos(...jPDinos);

console.log(' '.repeat(25));
console.log('='.repeat(25));
console.log(' '.repeat(25));



// 2a. Create a const variable called jPCharacters and set the value to an object with the following key value pairs (alanGrant: "Sam Neill"), (ellieSattler: "Laura Dern"), and (ianMalcolm: "Jeff Goldblum")

const jPCharacters = {
    alanGrant: "Sam Neill", 
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
}

//2b. Create an arrow function called seeCharacters. Create the function so that when the function is run only "Laura Dern" will display in the terminal/console. Also, you must run the function and are required to use Destructuring to complete this question (AKA 2b).

seeCharacters =({ellieSattler}) => {
    console.log(ellieSattler);
}    
seeCharacters(jPCharacters);

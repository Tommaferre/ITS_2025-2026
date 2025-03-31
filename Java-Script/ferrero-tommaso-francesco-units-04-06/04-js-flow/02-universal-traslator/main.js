/*
    parameter {string} language
    return {string} 
    returns a greeting in the specified language
*/

function helloWorld(language) {
    switch (language) {
        case 'es': // Spanish
            return 'Hola, Mundo!';
        case 'de': // German
            return 'Hallo, Welt!';
        case 'fr': // French
            return 'Bonjour, le Monde!';
        default: // Default to English
            return 'Hello, World!';
    }
}

console.log(helloWorld('en')); // English default
console.log(helloWorld('es')); // Spanish 
console.log(helloWorld('de')); // German 
console.log(helloWorld('fr')); // French
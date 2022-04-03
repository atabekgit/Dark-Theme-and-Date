function destroyer(arr) {
    let valsToRemove = Object.values(arguments).slice(1);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < valsToRemove.length; j++) {
            if (arr[i] === valsToRemove[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(item => item !== null);
}

console.log( destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    const souceKeys = Object.keys(source);

    // filter the collection
    return collection.filter(obj => {
        for (let i = 0; i < souceKeys.length; i++) {
            if (!obj.hasOwnProperty(souceKeys[i]) ||
                obj[souceKeys[i]] !== source[souceKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}

// test here
console.log( whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
));
function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;

    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
}

// test here
console.log( spinalCase("Lorem Atabek LoweCase WAJS G G GH HT F"));

function translatePigLatin(str) {
    // Create variables to be used
    var pigLatin = "";
    var regex = /[aeiou]/gi;

    // Check if the first character is a vowel
    if (str[0].match(regex)) {
        pigLatin = str + "way";
    } else if (str.match(regex) === null) {
        // Check if the string contains only consonants
        pigLatin = str + "ay";
    } else {
        // Find how many consonants before the first vowel.
        var vowelIndice = str.indexOf(str.match(regex)[0]);

        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending.
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }

    return pigLatin;
}

// test here
console.log( translatePigLatin("Saturn"));
















































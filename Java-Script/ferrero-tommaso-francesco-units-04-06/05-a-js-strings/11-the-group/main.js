//explained in the previous exercise (10-contains)
function aContainsb(str1, str2) {
    return str1.includes(str2);
}

/**
 * 
 * param {string} = group 
 * param {string} = name 
 * Checks if the name is part of the group and outputs the result to the console.
 */
function group(group, name) {
    // Use aContainsb to check if the name is in the group
    if (aContainsb(group, name)) {
        console.log(`${name} IS part of the group`);
    } else {
        console.log(`${name} is NOT part of the group`);
    }
}

// Example usage:
let group = "Mary, James, and John";
let oldGuy = "James";
group(group, oldGuy); // Output: "James IS part of the group"

let newGuy = "Philip";
group(group, newGuy); // Output: "Philip is NOT part of the group"

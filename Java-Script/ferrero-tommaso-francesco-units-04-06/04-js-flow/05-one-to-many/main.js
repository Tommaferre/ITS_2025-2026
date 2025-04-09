function oneToMany(noun, number) {

    const irregularPlurals = {
        'child': 'children',
        'person': 'people',
        'sheep': 'sheep',
        'goose': 'geese'
    };
    let pluralNoun;
    if (number === 1) {
        pluralNoun = noun;
    } else if (irregularPlurals[noun]) {
        pluralNoun = irregularPlurals[noun];
    } else  {
        pluralNoun = noun + 's';
    }
    return `${number} ${pluralNoun}`;
}



console.log(oneToMany('person', 1)); // 1 person
console.log(oneToMany('person', 2)); // 2 people
console.log(oneToMany('sheep', 2)); // 2 sheep
console.log(oneToMany('cat', 2)); // 2 cats
console.log(oneToMany('goose', 2)); // 2 geese
console.log(oneToMany('child', 2)); // 2 children
console.log(oneToMany('dog', 2)); // 2 dogs
console.log(oneToMany('dog', 1)); // 1 dog
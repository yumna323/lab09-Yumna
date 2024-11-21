// Q1
console.log('hi');
let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];

for (let i = 0; i<characters.length; i++)
    console.log(characters[i]);

// Q2
var firstName = 'Harry';
let house = 'Gryffindor';
    console.log(`Welcome,  ${firstName}  of  ${house} !`);

// Q3
let characterName = 'Hermione';
    console.log(characterName.toLowerCase());
    console.log(characterName.toUpperCase());

// Q4
let spell = ' Expelliarmus ';
console.log(spell.trim());

// Q5
let quote = 'I solemnly swear that I am up to no good';
    console.log(quote.slice(11, 16));

// Q6
var firstName = 'Ron';
var lastName = 'Weasley';
    console.log(firstName.concat(' ', lastName));

// Q7
var sentence = 'Draco is a good wizard';
    console.log(sentence.replace('good', 'bad'));

// Q8
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
    houses.push('Slytherin');
    house.toUpperCase();
    console.log(houses);

// Q9
let spells = ['Alohomora', 'Lumos', 'Nox'];
     spells.unshift('Accio');
     spells.shift();
     console.log(spells);

// Q10
let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
let specificprofs = professors.slice(1, 3);
    console.log(specificprofs);

// Q11
let students  = ['Neville', 'Seamus', 'Dean', 'Parvati'];
let modifiedarray = students.splice(1, 2);
    console.log(modifiedarray);

// Q12
let phrase = 'Mischief Managed';
let newphrase = phrase.trim().toLowerCase().concat('- Harry');
    console.log(newphrase);

// Q13
let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
    console.log(wizards);

// Q14
var message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
let newmessage = message.slice(11, 19).concat(' Castle');
    console.log(newmessage);


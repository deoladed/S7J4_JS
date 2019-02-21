const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
let seventhies = [];
let arrHashFirstLastName = [];
let arrFirstLastName = [];
let ageOfInventors = [];
let arrOfLastName = []
let inventorsAlphabetically = [];

for(let index = 0; index < entrepreneurs.length; index++) {
  if(entrepreneurs[index].year < 1980 && entrepreneurs[index].year > 1969) {
      seventhies.push(entrepreneurs[index])
  };
  // Sors une array qui combien le prénom et le nom des entrepreneurs
  // Array de hash
  arrHashFirstLastName.push({first: entrepreneurs[index].first, last: entrepreneurs[index].last});
  // Array de string
  arrFirstLastName.push(entrepreneurs[index].first + ' ' + entrepreneurs[index].last)
  // Quel âge aurait chaque inventeur aujourd'hui ?
  ageOfInventors.push(entrepreneurs[index].first + ' ' + entrepreneurs[index].last + ' : ' + (2019 - entrepreneurs[index].year) + ' ans')
  arrOfLastName.push(entrepreneurs[index].last)
};
console.log("Liste des entrepreneurs qui sont nés dans les années 70")
console.log(seventhies)

console.log("Array qui contient le prénom et le nom des entrepreneurs :")
console.log("Array de hash")
console.log(arrHashFirstLastName)
console.log("Array de string")
console.log(arrFirstLastName)

console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
console.log(ageOfInventors)

// Trie les inventeurs par ordre alphabétique du nom de famille
arrOfLastName.sort().forEach(name => {
    entrepreneurs.forEach(entrepreneur => {
      if(entrepreneur.last === name) {
        inventorsAlphabetically.push(entrepreneur)
      };
    });  
});

console.log("Inventeurs par ordre alphabétique du nom de famille");
console.log(inventorsAlphabetically);
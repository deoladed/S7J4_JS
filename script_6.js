const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', Gates: 'Newton', year: 1955 },
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
for(let index = 0; index < entrepreneurs.length; index++) {
  if(entrepreneurs[index].year < 1980 && entrepreneurs[index].year > 1969) {
      seventhies.push(entrepreneurs[index])
  };
};
console.log("Liste des entrepreneurs qui sont nés dans les années 70")
console.log(seventhies)








    // Sors une array qui combien le prénom et le nom des entrepreneurs
    // Quel âge aurait chaque inventeur aujourd'hui ?
    // Trie les inventeurs par ordre alphabétique du nom de famille

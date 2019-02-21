const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let rented = true
let mostRented = '';
let timesRented = 0;
let lessRented = '';
let timeslessRented = 100;
let ID873495
let arrTitle = [];
let booksInOrder = [];

for(let index in books) {
	// Est-ce que tous les livres ont été au moins empruntés une fois ?
	if(books[index].rented === 0) {
		rented = false;
	};
    // Quel est livre le plus emprunté ?
	if(books[index].rented > timesRented) {
		mostRented = books[index].title;
		timesRented = books[index].rented;
    // Quel est le livre le moins emprunté ?
	};
	if(books[index].rented < timeslessRented) {
		lessRented = books[index].title;
		timeslessRented = books[index].rented;
	};
    // Trouve le livre avec l'ID: 873495
	if(books[index].id === 873495) {
		ID873495 = books[index].title;
	};
    // Supprime le livre avec l'ID: 133712
	if(books[index].id === 133712) {
		position = books.indexOf(books[index]);
		books.splice(position, 1);
	};
    // Trie les livres par ordre alphabétique
    arrTitle.push(books[index].title)
};


if(rented === false) {
	console.log("Tous les livres n'ont pas ete emprutes au moins une fois")
} else {
	console.log("Tous les livres ont ete emprutes au moins une fois")
}
console.log(`And the most rented book is : ${mostRented}`)
console.log(`And the less rented book is : ${lessRented}`)
console.log(`Book with ID 873495 : ${ID873495}`)
console.log(`Suppression du livre avec l'ID 133712 :`)
console.log(books)


   // Trie les livres par ordre alphabétique
arrTitle.sort().forEach(title => {	
	books.forEach (book => {
		if(book.title === title ){
			booksInOrder.push(book);
		}
	})
});

console.log('Livres tries');
console.log(booksInOrder);

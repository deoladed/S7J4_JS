number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

let a = '#'
let b = ' '
for (let count = 1; count <= number; count++) {
	console.log(b.repeat(number - count) + a.repeat(count));
}

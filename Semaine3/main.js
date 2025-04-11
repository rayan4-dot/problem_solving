//facile


const double = n => n * 2;
console.log(double(4)); 


const tab = [1, 2, 3];
const doubles = tab.map(n => n * 2);
console.log(doubles); 


const bonjour = () => console.log("Bonjour");
bonjour();

//moyen

const nombres = [1, 2, 3, 4, 5, 6];
const pairs = nombres.filter(n => n % 2 === 0);
console.log(pairs);

const estPositif = n => n > 0;
console.log(estPositif(3));

//difficl

const somme = [1, 2, 3, 4].reduce((acc, val) => acc + val, 0);
console.log(somme);


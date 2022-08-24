//a)
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numeros.sort((a, b) => {
  return a - b;
});
console.log(numeros);

//b)
const numeros2 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numeros2.sort((a, b) => {
  return b - a;
});
console.log(numeros2);

//c)
const numeros3 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numeros3.sort();
console.log(numeros3);

//d)
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas.sort((a, b) => {
  return a.localeCompare(b);
});
console.log(frutas);

//e)
const frutas2 = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas2.sort((a, b) => {
  return b.localeCompare(a);
});
console.log(frutas2);

//f)
const frutas3 = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas3.sort((a, b) => {
  return a.length - b.length;
});
console.log(frutas3);
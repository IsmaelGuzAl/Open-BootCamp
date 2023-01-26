// Creo una variable con la fecha de hoy
const hoy = new Date();
console.log(hoy);
// Creo una variable con la fecha de mi nacimiento
const nacimiento = new Date(1984, 9, 13);
console.log(nacimiento);
//Creo Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparacion = hoy > nacimiento;
console.log(comparacion);
// Creo Una variable que contenga el día de tu nacimiento
const diaNacimiento = nacimiento.getDate();
console.log(diaNacimiento);
// Creo Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = nacimiento.getMonth() + 1;
console.log(mesNacimiento);
// Creo Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anioNacimiento = nacimiento.getFullYear();
console.log(anioNacimiento);

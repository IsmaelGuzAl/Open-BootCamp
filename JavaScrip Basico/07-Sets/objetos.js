// Creo Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos = {
    nombre: "Ismael",
    apellido: "Guzman",
    edad: 38,
    altura: 172,
    eresDesarrollador: true,
};
console.log(datos);
// Creo Una variable que obtenga tu edad a partir del objeto anterior
const edad = datos.edad;
console.log(edad);
// Creo Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de dos amig@s
const lista = [
    {
        ...datos,
    },
    {
        nombre: "Daniel",
        apellido: "Rodriguez",
        edad: 40,
        altura: 175,
        eresDesarrollador: true,
    },
    {
        nombre: "Jesus",
        apellido: "Lazaro",
        edad: 37,
        altura: 176,
        eresDesarrollador: false,
    },
];
// Creo  Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaOrdenada = lista.sort((a, b) => b.edad - a.edad);
console.log(listaOrdenada);

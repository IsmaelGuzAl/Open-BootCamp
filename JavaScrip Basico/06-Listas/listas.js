// Creo  Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listacompra = ["Pan", "Leche", "Legumbres", "Verduras", "Carne"];
// añado Aceite de Girasol
listacompra.push("Aceite de Girasol");
console.log(listacompra);
// elimino ultimo elemento.
listacompra.pop();
console.log(listacompra);

// Creo Una lista con mis 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listPelisFav = [
    {
        titulo: "El señor de los anillos",
        director: "Peter Jackson",
        fecha: new Date(2001, 11, 19),
    },
    {
        titulo: "Harry potter y el misterio del príncipe",
        director: "David Yates",
        fecha: new Date(2009, 5, 15),
    },
    {
        titulo: "Crank",
        director: "Mark Neveldine",
        fecha: new Date(2006, 8, 1),
    },
];
// Creo Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasanio = listPelisFav.filter(
    (pelicula) => pelicula.fecha > new Date(2010, 0, 1)
);
console.log(peliculasanio);
// Creo Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = listPelisFav.map((pelicula) => {
    return pelicula.director;
});
console.log(directores);
// Creo Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = listPelisFav.map((pelicula) => {
    return pelicula.titulo;
});
console.log(titulos);
// Creo  Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directores_titulos = directores.concat(titulos);
console.log(directores_titulos);
// Creo  Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directores_titulos_prop = [...directores, ...titulos];
console.log(directores_titulos_prop);

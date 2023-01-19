const altura_cm = 172;
console.log(altura_cm.valueOf());

const altura_m = 1.72;
console.log(altura_m.valueOf());

const peso_kg = 88.4;
console.log(peso_kg.valueOf());

////////////////////////////////////////////////////////////////////////

const altura_r = Math.ceil(altura_m);
console.log(altura_r.valueOf());

const peso_r = Math.floor(peso_kg);
console.log(peso_r.valueOf());

////////////////////////////////////////////////////////////////////////

const son_iguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(son_iguales.valueOf());

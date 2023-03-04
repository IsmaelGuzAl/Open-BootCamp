import { NIVEL } from "./nivel.enum";

export class Contacto {
    nombre = "";
    apellido = "";
    email = "";
    nivel = NIVEL.STUDENT;
    conectado = false;

    constructor(nombre, apellido, email, nivel, conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.nivel = nivel;
        this.conectado = conectado;
    }
}

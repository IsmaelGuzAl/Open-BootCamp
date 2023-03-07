import React, { useEffect, useState } from "react";
import ContactoComponent from "../pure/contacto";
import ContactForm from "../pure/forms/contactForm";
import { Contacto } from "../../models/contacto.class";
import { NIVEL } from "../../models/nivel.enum";
import "../../styles/contactos.scss";

const ContactoListComponent = () => {
    const defaultContacto1 = new Contacto(
        "Ismael",
        "Guzmán",
        "ismael@pruebaRact.com",
        NIVEL.STUDENT,
        true
    );
    const defaultContacto2 = new Contacto(
        "Daniel",
        "Rodriguez",
        "dani@pruebaReact.com",
        NIVEL.DEV,
        false
    );
    const defaultContacto3 = new Contacto(
        "Alejandro",
        "Exposito",
        "alex@pruebaReact.com",
        NIVEL.DEV,
        false
    );

    // Estado del componente
    const [contactos, setContactos] = useState([
        defaultContacto1,
        defaultContacto2,
        defaultContacto3,
    ]);

    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log("El estado del contacto ha sido modificado");
        setLoading(false);
        return () => {
            console.log("ContactoList component is going to unmount...");
        };
    }, [contactos]);

    function contactoConectado(contacto) {
        console.log("Complete this contact:", contacto);
        const index = contactos.indexOf(contacto);
        const tempContacts = [...contactos];
        tempContacts[index].conectado = !tempContacts[index].conectado;
        // Vamos a actualizar el estado del componente con la nueva lista de tareas y
        // Actualizamos la iteracion de la tarea y se muestra actualizada
        setContactos(tempContacts);
    }

    function borrarContacto(contacto) {
        console.log("Delete this contact:", contacto);
        const index = contactos.indexOf(contacto);
        const tempContacts = [...contactos];
        tempContacts.splice(index, 1);
        setContactos(tempContacts);
    }

    function addContact(contacto) {
        console.log("Delete this task:", contacto);
        const index = contactos.indexOf(contacto);
        const tempContacts = [...contactos];
        tempContacts.push(contacto);
        setContactos(tempContacts);
    }

    return (
        <div>
            <div className="col-12">
                <div className="card">
                    {/* Card Header (title) */}
                    <div className="card-header p-3">
                        <h5>Contactos:</h5>
                    </div>
                    {/* Card Body (content) */}
                    <div
                        className="card-body"
                        data-mdb-perfect-scrollbar="true"
                        style={{ position: "relative", height: "400px" }}
                    >
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellildo</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Nivel</th>
                                    <th scope="col">Conexión</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contactos.map((contacto, index) => {
                                    return (
                                        <ContactoComponent
                                            key={index}
                                            contacto={contacto}
                                            conectado={contactoConectado}
                                            remove={borrarContacto}
                                        ></ContactoComponent>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
};

export default ContactoListComponent;

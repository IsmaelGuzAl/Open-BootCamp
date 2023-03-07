import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";
import { NIVEL } from "../../models/nivel.enum";
import "../../styles/contactos.scss";

const ContactoComponent = ({ contacto, conectado, remove }) => {
    useEffect(() => {
        console.log("Created Contact");
        return () => {
            console.log(`Contact: ${contacto.nombre} is going to unmount`);
        };
    }, [contacto]);

    function nivelContactoBadge() {
        switch (contacto.nivel) {
            case NIVEL.STUDENT:
                return (
                    <h6 className="mb-0">
                        <span className="badge bg-primary">
                            {contacto.nivel}
                        </span>
                    </h6>
                );
            case NIVEL.DEV:
                return (
                    <h6 className="mb-0">
                        <span className="badge bg-success">
                            {contacto.nivel}
                        </span>
                    </h6>
                );
            default:
                break;
        }
    }

    function contactIconConected() {
        if (contacto.conectado) {
            return (
                <i
                    onClick={() => conectado(contacto)}
                    className="bi-toggle2-on task-action"
                    style={{ color: "green" }}
                ></i>
            );
        } else {
            return (
                <i
                    onClick={() => conectado(contacto)}
                    className="bi-toggle2-off task-action"
                    style={{ color: "red" }}
                ></i>
            );
        }
    }

    return (
        <tr className="fw-normal">
            <td>
                <span className="ms-2">{contacto.nombre}</span>
            </td>
            <td className="aling-middle">
                <span>{contacto.apellido}</span>
            </td>
            <td className="aling-middle">
                <span>{contacto.email}</span>
            </td>
            <td className="aling-middle">
                {/* Esta funcion devuelve un elemento badge */}
                {nivelContactoBadge()}
            </td>
            <td className="aling-middle">
                {/* Esta funcion devuelve un icono dependiendo si esta conected */}
                {contactIconConected()}
                <i
                    className="bi-recycle ms-2 task-action"
                    style={{ color: "rgb(13, 222, 191)" }}
                    onClick={() => remove(contacto)}
                ></i>
            </td>
        </tr>
    );
};
ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    conectado: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default ContactoComponent;

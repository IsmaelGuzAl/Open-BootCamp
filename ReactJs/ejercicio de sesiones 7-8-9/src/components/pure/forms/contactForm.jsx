import React, { useRef } from "react";
import PropTypes from "prop-types";
import { NIVEL } from "../../../models/nivel.enum";
import { Contacto } from "../../../models/contacto.class";

const ContactForm = ({ add }) => {
    const nombreRef = useRef("");
    const apellidoRef = useRef("");
    const emailRef = useRef("");
    const nivelRef = useRef(NIVEL.STUDENT);

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            nivelRef.current.value,
            false
        );

        add(newContact);
    }

    return (
        <form
            onSubmit={addContact}
            className="d-flex justify-content-center aling-items-center mb-4 "
        >
            <div className="form-outline flex-fill">
                <input
                    ref={nombreRef}
                    id="inputName"
                    type="text"
                    className="form-control form-control-lg"
                    required
                    autoFocus
                    placeholder="Introduce nombre"
                />
                <input
                    ref={apellidoRef}
                    id="inputDescription"
                    type="text"
                    className="form-control form-control-lg"
                    required
                    placeholder="Introduce apellido"
                />
                <input
                    ref={emailRef}
                    id="inputDescription"
                    type="text"
                    className="form-control form-control-lg"
                    required
                    placeholder="Introduce Email"
                />
                <label htmlFor="selectLevel" className="sr-only">
                    Nivel:
                </label>
                <select
                    ref={nivelRef}
                    defaultValue={NIVEL.STUDENT}
                    id="selectLevel"
                >
                    <option value={NIVEL.STUDENT}>Estudiante</option>
                    <option value={NIVEL.DEV}>Developer</option>
                </select>
            </div>
            <button type="submit" className="btn btn-success ms-2">
                Añadir
            </button>
        </form>
    );
};

ContactForm.protoTypes = {
    add: PropTypes.func.isRequired,
};

export default ContactForm;

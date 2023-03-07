import { useEffect, useState } from "react";

export const Clock = () => {
    // Se genera una fecha como estado inicial del componente
    const estadoInicial = {
        fecha: new Date(),
        edad: 0,
        nombre: "Ismael",
        apellidos: "Guzmán",
    };

    const [estado, setEstado] = useState(estadoInicial);

    useEffect(() => {
        const timerID = setInterval(() => {
            setEstado((estadoPrevio) => {
                let edad = estadoPrevio.edad + 1;
                return {
                    ...estadoPrevio,
                    fecha: new Date(),
                    edad,
                };
            });
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div>
            <h2>
                Hora Actual:
                {estado.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {estado.nombre} {estado.apellidos}
            </h3>
            <h1>Edad: {estado.edad}</h1>
        </div>
    );
};

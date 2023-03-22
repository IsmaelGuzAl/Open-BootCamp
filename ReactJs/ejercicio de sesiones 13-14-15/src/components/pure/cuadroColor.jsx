import React, { useState } from "react";

const CuadroColor = () => {
    const [color, setColor] = useState("#000000");

    const [gestionarIntervalo, setGestionarIntervalo] = useState(0);

    const getColor = () => Math.floor(Math.random() * 256);

    const getHexa = (red, green, blue) => {
        return (
            "#" +
            [red, green, blue]
                .map((c) => {
                    const hexa = c.toString(16);
                    return hexa.length === 1 ? "0" + hexa : hexa;
                })
                .join("")
        );
    };

    const generateHexa = () => {
        const colorRgb = {
            red: getColor(),
            green: getColor(),
            blue: getColor(),
        };
        return setColor(getHexa(colorRgb.red, colorRgb.green, colorRgb.blue));
    };

    const cambiarColor = () => {
        return setGestionarIntervalo(setInterval(generateHexa, 500));
    };

    const detenerColor = () => {
        clearInterval(gestionarIntervalo);
        setColor("#000000");
    };

    const pausarColor = () => {
        return clearInterval(gestionarIntervalo);
    };

    return (
        <div style={{ margin: "auto" }}>
            <div
                id="square"
                onMouseOver={cambiarColor}
                onMouseLeave={pausarColor}
                onDoubleClick={detenerColor}
                style={{
                    width: "255px",
                    height: "255px",
                    backgroundColor: color,
                    margin: "auto",
                }}
            ></div>
            <p style={{ color: "black" }}>Color: {color} </p>
        </div>
    );
};

export default CuadroColor;

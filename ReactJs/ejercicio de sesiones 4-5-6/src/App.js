import logo from "./logo.svg";
import "./App.css";
import ComponenteA from "./components/ComponenteA";
import { Clock } from "./components/CicloVidaFuncinal";

function App() {
    const contactoDefecto = {
        nombre: "Filodonio",
        apellido: "Barriento",
        email: "FiloBarri@donio.com",
        conectado: "false",
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* <ComponenteA contacto={contactoDefecto}></ComponenteA> */}
                <Clock></Clock>
            </header>
        </div>
    );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Clock } from "./components/CicloVidaFuncinal";
import { contactoDefecto } from "./models/contactoDefault";
import ContactoListComponent from "./components/container/contacto_list";
import CuadroColor from "./components/pure/cuadroColor";

function App() {
    return (
        <div className="App">
            {/* <ComponenteA contacto={contactoDefecto}></ComponenteA> */}
            {/* <Clock></Clock> */}
            {/* <ContactoListComponent></ContactoListComponent> */}
            <CuadroColor></CuadroColor>
        </div>
    );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Clock } from "./components/CicloVidaFuncinal";
import { contactoDefecto } from "./models/contactoDefault";
import ContactoListComponent from "./components/container/contacto_list";
import CuadroColor from "./components/pure/cuadroColor";
import Tasklist from "./components/container/task_list";

function App() {
    return (
        <div className="App">
            {/* <ComponenteA contacto={contactoDefecto}></ComponenteA> */}
            {/* <Clock></Clock> */}
            {/* <ContactoListComponent></ContactoListComponent> */}
            {/* <CuadroColor></CuadroColor> */}
            <Tasklist />
        </div>
    );
}

export default App;

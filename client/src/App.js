import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Index } from "./componentes/index";
import { RealizarCompra } from "./componentes/realizarCompra";
import { Ordenes } from "./componentes/ordenes";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route exact path="/realizarCompra" component={RealizarCompra}/>
                    <Route exact path="/ordenes" component={Ordenes}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
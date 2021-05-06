import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TareasList from "./components/TareasList"
import ActualizarTarea from "./components/ActualizarTarea"
import TareasListClass from "./components/TareasListClass"

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Tareas App</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/actualizar" className="nav-link">Actualizar Tarea</Link>
              </li>
              <li className="navbar-item">
                <Link to="/tareas" className="nav-link">Tareas class</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route exact path="/" component={TareasList} />
        <Route exact path="/actualizar" component={ActualizarTarea} />
        <Route exact path="/tareas" component={TareasListClass} />
      </div>
    </Router>
  );
}

export default App;

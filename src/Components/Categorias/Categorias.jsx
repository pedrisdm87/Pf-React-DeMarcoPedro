import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Categorias(props) {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link to="/Productos">Todos</Link>
          </li>
          <li>
            <Link to="/categoria/Controladoras">Controladoras</Link>{" "}
          </li>
          <li>
            <Link to="/categoria/Tubos">Tubos</Link>{" "}
          </li>
          <li>
            <Link to="/categoria/Fuentes">Fuentes</Link>
          </li>
          <li>
            <Link to="/categoria/Lentes">Lentes</Link>
          </li>
          <li>
            <Link to="/categoria/Mecanica">Mecanica</Link>
          </li>
          <li>
            <Link to="/categoria/Otros">Otros</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Categorias;

import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Category(props) {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link to="/Productos">Todos</Link>
          </li>
          <li>
            <Link to="/category/Controladoras">Controladoras</Link>{" "}
          </li>
          <li>
            <Link to="/category/Tubos">Tubos</Link>{" "}
          </li>
          <li>
            <Link to="/category/Fuentes">Fuentes</Link>
          </li>
          <li>
            <Link to="/category/Lentes">Lentes</Link>
          </li>
          <li>
            <Link to="/category/Mecanica">Mecanica</Link>
          </li>
          <li>
            <Link to="/category/Otros">Otros</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Category;

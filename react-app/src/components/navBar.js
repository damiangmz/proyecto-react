import "./style/navbar.css";
import CartWidget from "../components/CartWidget";
function NavBar() {
  return (
    <nav class="navbar bg-light">
      
      <div class="container-fluid justify-content-center">
        <a class="navbar-brand">Hard Coder</a>
        <form class="d-flex " role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Buscar
          </button>
        </form>
        <div><CartWidget /></div>
      </div>
      <div className="box_ul">
        <ul>
          <li>
            <a href="">Componentes</a>
          </li>
          <li>
            <a href="">Perifericos</a>
          </li>
          <li>
            <a href="">Monitores</a>
          </li>
          <li>
            <a href="">Consolas</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;

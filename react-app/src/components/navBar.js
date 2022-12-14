import "./style/navbar.css";
import CartWidget from "./CartWidget";
function NavBar() {
  return (
    <nav class="navbar bg-light">
      
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand">Hard Coder</a>
        <form className="d-flex " role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Buscar
          </button>
        </form>
        <div><CartWidget/></div>
      </div>
      <div className="box_ul">
        <ul >
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

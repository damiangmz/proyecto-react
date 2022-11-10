
function NavBar(){
    return(
        <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Hard Coder</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>
  <div>
    <ul>
        <li>Componentes</li>
        <li>Perifericos</li>
        <li>Monitores</li>
        <li>Consolas</li>
    </ul>
  </div>
</nav>

    );
}
export default NavBar;
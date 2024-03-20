export function Navbar() {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Menetrend
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/addDeparture">
              Indulás hozzáadása
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
}
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item"><a href="#">Income</a></li>
        <li className="nav-item"><a href="#">Expense</a></li>
        <li className="nav-item"><a href="#">Balance</a></li>

        <li className="nav-item dropdown">
          <button aria-expanded="false" aria-haspopup="true">
            Apps <span className="arrow">▼</span>
          </button>
          <ul className="sub-menu" aria-label="Apps submenu">
            <li><a href="#">Calendar</a></li>
            <li><a href="#">Graph</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
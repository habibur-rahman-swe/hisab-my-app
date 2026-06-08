import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item"><a href="#">Income</a></li>
        <li className="nav-item"><a href="#">Expense</a></li>
        <li className="nav-item"><a href="#">Balance</a></li>

        <li className="nav-item">
          <button aria-expanded="false">Apps</button>
          <ul className="sub-menu" aria-level="Apps">
            <li><a href="#">Calender</a></li>
            <li><a href="#">Graph</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
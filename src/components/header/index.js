import { Link } from "react-router-dom";
import "./styles.scss";

function Header() {
  return (
    <div className="c-header">
      <Link to="/">Home</Link>
      <Link to="movies">Movies</Link>
      <Link to="todos">Todos</Link>
    </div>
  )
}

export default Header;
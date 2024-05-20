import { Link } from "react-router-dom";

export const Header = () => (
  <header>
    <nav>
      <Link to="/journal">Journal</Link>
      <br></br>
      <Link to="/asistant">Asistant</Link>
    </nav>
    <br></br>
  </header>
);

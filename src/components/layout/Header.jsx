import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/journal">Journal</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  </header>
);

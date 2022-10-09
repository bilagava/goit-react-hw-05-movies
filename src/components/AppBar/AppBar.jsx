import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

export default function AppBar() {
  return (
    <header>
      <nav className={css.navBox}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.active : css.btn)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? css.active : css.btn)}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

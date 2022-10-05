import { Link } from 'react-router-dom';
import css from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={css.navBar}>
      <div className={css.container}>
        <Link to="/">Logo</Link>
        <div className={css.row}></div>
      </div>
    </nav>
  );
}

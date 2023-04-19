import { Link, NavLink } from 'react-router-dom';

import logo from '~/assets/argentBankLogo.png';
import styles from './Navbar.module.scss';

/**
 * Navigation bar component
 * @returns React component for the navbar
 */
function Navbar() {
  return (
    <nav className={styles.mainNav}>
      <Link to="/" className={styles.mainNavLogo}>
        <img
          src={logo}
          alt="argent Bank logo"
          className={styles.mainNavLogoImage}
        />
        <h1 className={styles.srOnly}>Argent Bank</h1>
      </Link>
      <div>
        <NavLink to="sign-in" className={styles.mainNavItem}>
          <i className="fa fa-user-circle" aria-hidden="true"></i> Sign In
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;

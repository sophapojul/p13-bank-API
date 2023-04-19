import { Link, NavLink, useNavigate } from 'react-router-dom';

import logo from '~/assets/argentBankLogo.png';
import { logout } from '~/services';
import styles from './Navbar.module.scss';

/**
 * Navigation bar component
 * @returns React component for the navbar
 */
function Navbar() {
  const navigate = useNavigate();
  const redirectPath = '/';
  const isSignedIn = !!localStorage.getItem('token');
  const handleLogout = () => {
    logout();
    navigate(redirectPath, { replace: true });
  };
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
        {isSignedIn ? (
          <>
            <NavLink to="/user" className={styles.mainNavItem}>
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              &nbsp;
            </NavLink>
            <NavLink
              to="/"
              className={styles.mainNavItem}
              onClick={handleLogout}
            >
              <i className="fa fa-sign-out" aria-hidden="true">
                &nbsp;Sign Out
              </i>
            </NavLink>
          </>
        ) : (
          <NavLink to="sign-in" className={styles.mainNavItem}>
            <i className="fa fa-user-circle" aria-hidden="true"></i> Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}
export default Navbar;

import { Link, NavLink } from 'react-router-dom';

import logo from '~/assets/argentBankLogo.png';
import { logout, logoutUser } from '~/store/actions';
import { useTypedSelector, useTypedDispatch } from '~/store/hooks';
import styles from './Navbar.module.scss';

/**
 * Navigation bar component
 * @returns React component for the navbar
 */
function Navbar() {
  const isSignedIn = !!localStorage.getItem('token');
  const user = useTypedSelector((state) => state.user);
  const dispatch = useTypedDispatch();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(logoutUser());
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
        {isSignedIn && user ? (
          <>
            <NavLink to="/user" className={styles.mainNavItem}>
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              &nbsp;{user.user?.firstName}
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

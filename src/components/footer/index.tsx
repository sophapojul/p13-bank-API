import styles from './Footer.module.scss';

/**
 * application footer
 * @returns React component for the footer
 */
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        Copyright &copy; {new Date().getFullYear()} Argent Bank
      </p>
    </footer>
  );
}

export default Footer;

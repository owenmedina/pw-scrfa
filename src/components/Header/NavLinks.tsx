import styles from './NavLinks.module.scss';

const NavLinks = () => {
    return <nav className={styles['nav-links']}>
        <span className={styles['nav-link']}>About Us</span>
        <span className={styles['nav-link']}>Events</span>
        <span className={styles['nav-link']}>Boards &amp; Committees</span>
    </nav>;
}

export default NavLinks;
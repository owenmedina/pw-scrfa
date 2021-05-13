import styles from './NavLinks.module.scss';

const NavLinks = () => {
    return <div className={styles['nav-links']}>
        <span className={styles['nav-link']}>About Us</span>
        <span className={styles['nav-link']}>Events</span>
        <span className={styles['nav-link']}>Boards &amp; Committees</span>
    </div>;
}

export default NavLinks;
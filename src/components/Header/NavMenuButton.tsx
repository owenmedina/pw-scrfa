import styles from './NavMenuButton.module.scss';
import {ReactComponent as NavMenuIcon} from './assets/svg/menu.svg';

const NavMenuButton = () => {
    return <div className={styles['nav-menu-button']}>
        <NavMenuIcon className={styles['nav-menu-icon']}/>
        <div className={styles['nav-menu-title']}>MENU</div>
    </div>;
}

export default NavMenuButton;
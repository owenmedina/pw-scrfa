import styles from './NavMenuButton.module.scss';
import {ReactComponent as NavMenuIcon} from './assets/svg/menu.svg';
import { useState } from 'react';

const NavMenuButton = () => {
    const [navMenuOpen, setNavMenuOpen] = useState(false);

    const toggleNavMenu = () => {
        setNavMenuOpen(prev => !prev);
    }

    return <button className={styles['nav-menu-button']}>
        <NavMenuIcon className={styles['nav-menu-icon']}/>
        <div className={styles['nav-menu-title']}>MENU</div>
    </button>;
}

export default NavMenuButton;
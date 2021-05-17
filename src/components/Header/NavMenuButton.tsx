import styles from './NavMenuButton.module.scss';
import {ReactComponent as NavMenuIcon} from './assets/svg/menu.svg';
import { useState } from 'react';
import NavigationMenu from '../NavMenu/NavigationMenu';

const NavMenuButton = () => {
    const [navMenuOpen, setNavMenuOpen] = useState(false);

    const toggleNavMenu = () => {
        console.log('nav menu button pressed')
        setNavMenuOpen(prev => true);
    }

    return <button className={styles['nav-menu-button']} onClick={toggleNavMenu}>
        <NavMenuIcon className={styles['nav-menu-icon']}/>
        <div className={styles['nav-menu-title']}>MENU</div>
        <NavigationMenu />
    </button>;
}

export default NavMenuButton;
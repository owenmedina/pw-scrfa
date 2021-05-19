import styles from './NavMenuButton.module.scss';
import {ReactComponent as NavMenuIcon} from './assets/svg/menu.svg';
import {ReactComponent as NavCloseMenuIcon} from './assets/svg/close.svg';
import { FC, useState } from 'react';
import NavigationMenu from '../NavMenu/NavigationMenu';
import { Link } from '../../types/Link';

interface Props {
    links: Link[];
}

const NavMenuButton: FC<Props> = ({links}) => {
    const [navMenuOpen, setNavMenuOpen] = useState(false);

    const toggleNavMenu = () => {
        setNavMenuOpen(prev => !prev);
    }

    return <button className={styles['nav-menu-button']} onClick={toggleNavMenu}>
        {navMenuOpen ? <NavCloseMenuIcon className={styles['nav-menu-icon']}/> : <NavMenuIcon className={styles['nav-menu-icon']}/>}
        <div className={styles['nav-menu-title']}>{navMenuOpen ? 'CLOSE' : 'MENU'}</div>
        {!navMenuOpen && <div className={styles['nav-menu--empty']}></div>}
        <NavigationMenu show={navMenuOpen} links={links}/>
    </button>;
}

export default NavMenuButton;
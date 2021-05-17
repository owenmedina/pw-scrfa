import styles from './NavMenuButton.module.scss';
import {ReactComponent as NavMenuIcon} from './assets/svg/menu.svg';
import { FC, useState } from 'react';
import NavigationMenu from '../NavMenu/NavigationMenu';
import { Link } from '../../types/Link';

interface Props {
    links: Link[];
}

const NavMenuButton: FC<Props> = ({links}) => {
    const [navMenuOpen, setNavMenuOpen] = useState(false);

    const toggleNavMenu = () => {
        console.log('nav menu button pressed')
        setNavMenuOpen(prev => true);
    }

    return <button className={styles['nav-menu-button']} onClick={toggleNavMenu}>
        <NavMenuIcon className={styles['nav-menu-icon']}/>
        <div className={styles['nav-menu-title']}>MENU</div>
        <NavigationMenu links={links}/>
    </button>;
}

export default NavMenuButton;
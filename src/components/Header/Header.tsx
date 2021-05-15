import styles from './Header.module.scss';
import NavMenuButton from './NavMenuButton';
import Branding from './Branding';
import NavLinks from './NavLinks';
import SearchIconButton from '../Buttons/SearchIconButton';

const Header = () => {
    return <div className={styles.header}>
        <NavMenuButton />
        <Branding />
        <NavLinks />
        <SearchIconButton />
    </div>;
}

export default Header;
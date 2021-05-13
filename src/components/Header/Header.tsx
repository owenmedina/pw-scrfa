import styles from './Header.module.scss';
import NavMenuButton from './NavMenuButton';
import Branding from './Branding';
import NavLinks from './NavLinks';
import SearchButton from '../Buttons/SearchButton';

const Header = () => {
    return <div className={styles.header}>
        <NavMenuButton />
        <Branding />
        <NavLinks />
        <SearchButton />
    </div>;
}

export default Header;
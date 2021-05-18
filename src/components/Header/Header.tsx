import styles from './Header.module.scss';
import NavMenuButton from './NavMenuButton';
import Branding from './Branding';
import NavLinks from './NavLinks';
import SearchIconButton from '../Buttons/SearchIconButton';
import {Link} from '../../types/Link';

const Header = () => {
    const links = [new Link('Home', 'https:www.google.com'),
    new Link('News & Events', 'https:www.google.com'),
    new Link('About Us', 'https:www.google.com'),
    new Link('Contact Us', 'https:www.google.com'),
    new Link('Boards & Committees', 'https:www.google.com')];
    return <div className={styles.header}>
        <NavMenuButton links={links}/>
        <Branding />
        <NavLinks />
        <SearchIconButton />
    </div>;
}

export default Header;
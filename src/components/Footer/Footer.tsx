import styles from './Footer.module.scss';
import ColumnarContent from '../Layout/ColumnarContent';
import FooterBranding from './FooterBranding';
import PageLinks from './PageLinks';
import Addresses from './Addresses';
import { Link } from '../../types/Link';
import Address from '../../types/Address';

const Footer = () => {
    const pageLinks = [new Link('Privacy Statement', 'https:www.google.com'),
    new Link('FOIA', 'https:www.google.com'),
    new Link('Disclosures and Reporting', 'https:www.google.com'),
    new Link('Report Fraud', 'https:www.google.com'),
    new Link('Accessibility', 'https:www.google.com'),
    new Link('Contact Us', 'https:www.google.com')]

    const addresses = [new Address('Main Office', '1000 Assembly St, Rembert Dennis Building, Suite 421', 'Columbia', 'SC', 29201),
    new Address('Geodetic Survey Section', '5 Geology Rd', 'Columbia', 'SC', 29212),
    new Address('Health and Demographics Division', '1000 Assembly St, Rembert Dennis Building, Suite 240', 'Columbia', 'SC', 29201)]
    return <div className={styles.footer}>
            <FooterBranding />
            <PageLinks links={pageLinks}/>
            <Addresses addresses={addresses} />
    </div>;
}

export default Footer;
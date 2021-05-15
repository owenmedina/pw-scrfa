import styles from './Footer.module.scss';
import ColumnarContent from '../Layout/ColumnarContent';
import FooterBranding from './FooterBranding';
import PageLinks from './PageLinks';
import Addresses from './Addresses';
import { Link } from '../../types/Link';

const Footer = () => {
    const pageLinks = [new Link('Privacy Statement', 'https:www.google.com'),
    new Link('FOIA', 'https:www.google.com'),
    new Link('Disclosures and Reporting', 'https:www.google.com'),
    new Link('Report Fraud', 'https:www.google.com'),
    new Link('Accessibility', 'https:www.google.com'),
    new Link('Contact Us', 'https:www.google.com')]
    return <div className={styles.footer}>
            <FooterBranding />
            <PageLinks links={pageLinks}/>
            <Addresses />
    </div>;
}

export default Footer;
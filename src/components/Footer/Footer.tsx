import styles from './Footer.module.scss';
import ColumnarContent from '../Layout/ColumnarContent';
import FooterBranding from './FooterBranding';
import PageLinks from './PageLinks';
import Addresses from './Addresses';

const Footer = () => {
    return <div className={styles.footer}>
            <FooterBranding />
            <PageLinks />
            <Addresses />
    </div>;
}

export default Footer;
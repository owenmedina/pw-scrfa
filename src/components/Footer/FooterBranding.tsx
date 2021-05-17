import { FC } from "react";
import styles from './FooterBranding.module.scss';
import rfaLogo from './assets/img/rfa-logo-transparent.png';
import Spacer from '../Utilities/Spacer';
import '../../index.scss';

const FooterBranding: FC = () => {
    return <div className={styles['footer-branding']}>
        <div className={styles['footer-branding__text']}>
            <div >South Carolina</div>
            <div >Revenue and Fiscal Affairs Office</div>
        </div>
        <Spacer size={'md'} />
    <img src={rfaLogo} alt="RFA Logo" className={styles['footer-branding__logo']}></img>
        
</div>;
}

export default FooterBranding;
import '../../index.scss';
import styles from './Branding.module.scss';
import rfaLogo from './assets/img/rfa-logo-color.png';

const Branding = () => {
    return <div className={styles.branding}>
        <img src={rfaLogo} alt="RFA Logo" className={styles['branding__logo']}></img>
        <span>
            <div>
                <div className={`header-7 ${styles['branding__name']}`}>South Carolina</div>
                <div className={`header-7 ${styles['branding__name']}`}>Revenue and Fiscal Affairs Office</div>
            </div>
            <div className={`subheader-7 ${styles['branding__description']}`}>
                Transforming data into solutions for South Carolina
            </div>
        </span>
    </div>;
}

export default Branding;
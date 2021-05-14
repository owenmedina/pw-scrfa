import Search from './Search';
import styles from './MainHeading.module.scss';
import '../../index.scss';

const MainHeading = () => {
    return <div className={styles['main-heading']}>
        <h2 className={styles['main-heading__title']}>Providing independent research, analysis, and resources to facilitate informed policy decisions and administration of services</h2>
        <Search />
    </div>;
}

export default MainHeading;
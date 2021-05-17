import { FC } from "react";
import styles from './NavigationMenu.module.scss';
import SiteNavigation from './SiteNavigation';
import SectionNavigation from './SectionNavigation';

const NavigationMenu: FC = () => {
    return <div className={styles['navigation-menu']}>
        <SiteNavigation />
        <SectionNavigation />
    </div>;
}

export default NavigationMenu;
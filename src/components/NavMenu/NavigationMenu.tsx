import { FC } from "react";
import styles from './NavigationMenu.module.scss';
import SiteNavigation from './SiteNavigation';
import SectionNavigation from './SectionNavigation';
import { Link } from "../../types/Link";

interface Props {
    links: Link[];
}

const NavigationMenu: FC<Props> = ({links}) => {
    return <div className={styles['navigation-menu']}>
        <SiteNavigation links={links}/>
        <SectionNavigation />
    </div>;
}

export default NavigationMenu;
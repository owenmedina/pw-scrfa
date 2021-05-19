import { FC, useEffect, useState } from "react";
import styles from './NavigationMenu.module.scss';
import SiteNavigation from './SiteNavigation';
import SectionNavigation from './SectionNavigation';
import { Link } from "../../types/Link";

interface Props {
    links: Link[];
    show: boolean;
}

const NavigationMenu: FC<Props> = ({links, show}) => {
    const [navMenuShow, setNavMenuShow] = useState(show);
    const classes = navMenuShow ? [styles['navigation-menu']] : [styles['navigation-menu'], styles['navigation-menu--hidden']];
    useEffect(() => {
        setNavMenuShow(show);
    }, [show]);

    return <nav className={classes.join(' ')}>
        <SiteNavigation links={links}/>
        <SectionNavigation />
    </nav >;
}

export default NavigationMenu;
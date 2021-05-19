import { FC } from "react";
import { Link } from "../../types/Link";
import styles from './SiteNavigation.module.scss';

interface Props {
    links: Link[];
}

const SiteNavigation: FC<Props> = ({links}) => {
    return <ul className={styles['site-navigation']}>
        {links.map(link => <li key={link.id}>
            <a href={link.reference}>{link.title}</a>
        </li>)}
    </ul>;
}

export default SiteNavigation;
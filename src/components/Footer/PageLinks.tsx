import { FC } from "react";
import { Link } from "../../types/Link";
import styles from './PageLinks.module.scss';

interface Props {
    links: Link[];
}

const PageLinks: FC<Props> = ({links}) => {
    return <div className={styles['page-links']}>
        {links.map(link => <a className={styles['page-link']} href={link.reference}>{link.title}</a>)}
    </div>;
}

export default PageLinks;
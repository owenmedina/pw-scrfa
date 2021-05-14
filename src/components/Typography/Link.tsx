import { FC } from "react";
import styles from './Link.module.scss';

interface Props {
    text: string;
    reference: string;
}

const Link: FC<Props> = ({text, reference}) => {
    return <a className={styles.link} href={reference}>{text}</a>;
}

export default Link;
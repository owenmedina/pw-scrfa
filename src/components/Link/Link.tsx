import { FC } from "react";
import styles from './Link.module.scss';

interface Props {
    text: string;
    reference: string;
    otherClasses?: string[];
}

const Link: FC<Props> = ({text, reference, otherClasses}) => {
    const classes = otherClasses ? otherClasses.slice(0) : [];
    classes.push(styles.link)
    return <a className={classes.join(' ')} href={reference}>{text}</a>;
}

export default Link;
import { FC } from "react";
import styles from './SolidButton.module.scss';

interface Props {
    text?: string;
    otherClasses?: string[];
}

const SolidButton: FC<Props> = ({text, otherClasses}) => {
    const classes = otherClasses ?? [];
    classes.push(styles['button-solid']);
    return <button className={classes.join(" ")}>{text}</button>;
}

export default SolidButton;
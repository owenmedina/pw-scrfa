import { FC } from "react";
import styles from "./Tag.module.scss";

interface Props {
    text: string;
    color: string;
}
const Tag: FC<Props> = ({text, color}) => {
    return <div className={styles[`tag--${color}`]}>{text}</div>
}

export default Tag;
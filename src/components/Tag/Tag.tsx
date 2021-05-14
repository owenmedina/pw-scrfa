import { FC } from "react";
import styles from "./Tag.module.scss";

interface Props {
    text: string;
}
const Tag: FC<Props> = ({text}) => {
    return <div className={styles.tag}>{text}</div>
}

export default Tag;
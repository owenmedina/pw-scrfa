import { FC } from "react";
import styles from "./Spacer.module.scss";

interface Props {
    size: string;
}

const Spacer: FC<Props> = ({size}) => {
    return <div className={styles[`spacer-${size}`]}></div>;
}

export default Spacer;
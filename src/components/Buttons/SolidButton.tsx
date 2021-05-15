import { FC } from "react";
import styles from './SolidButton.module.scss';

interface Props {
    text?: string;
}

const SolidButton: FC<Props> = ({text}) => {
    return <button className={styles['button-solid']}>{text}</button>;
}

export default SolidButton;
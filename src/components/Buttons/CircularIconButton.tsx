import { FC } from "react";
import {ReactComponent as UpSVG} from './assets/svg/up.svg';
import styles from './CircularIconButton.module.scss';

const iconDict = {
    up: <UpSVG />
}

interface Props {
    icon: keyof (typeof iconDict);
}

const CircularIconButton: FC<Props> = ({icon}) => {
    return <button className={styles['button-icon-circular']}>
        {iconDict[icon]}
    </button>;
};

export default CircularIconButton;
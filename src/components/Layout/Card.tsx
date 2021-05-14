import {FC, ReactElement} from 'react';
import styles from './Card.module.scss';
import '../../index.scss';



interface Props {
    icon: ReactElement;
    title: string;
}

const Card: FC<Props> = ({icon, title}) => {
    return <div className={styles.card}>
        {icon}
        <h3 className={styles['card__title']}>{title}</h3>
    </div>;
}

export default Card;
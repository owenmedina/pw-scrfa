import {FC, ReactElement} from 'react';
import styles from './Card.module.scss';
import '../../index.scss';



interface Props {
    icon: ReactElement;
    title: string;
    otherClasses?: string[];
}

const Card: FC<Props> = ({icon, title, otherClasses}) => {
    const classes = otherClasses ?? [];
    classes.push(styles.card);
    return <div className={classes.join(' ')}>
        {icon}
        <h3 className={styles['card__title']}>{title}</h3>
    </div>;
}

export default Card;
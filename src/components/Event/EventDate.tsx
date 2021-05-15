import { FC } from "react";
import styles from './EventDate.module.scss';

interface Props {
    date: Date;
}

const EventDate: FC<Props> = ({date}) => {
    const locale = 'en-US';
    const month = date.toLocaleDateString(locale, {month: 'short'});
    const day = date.toLocaleDateString(locale, {day: 'numeric'});
    return <div className={styles['event-date']}>
        <span className={styles['event-date__month']}>{month}</span>
        <span className={styles['event-date__day']}>{day}</span>
    </div>;
}

export default EventDate;
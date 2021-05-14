import { FC } from "react";
import styles from './LinkDescription.module.scss';

interface Props {
    desc?: string;
    date: Date;
}

const LinkDescription: FC<Props> = ({desc, date}) => {
    const year = 'numeric';
    const month = 'short';
    const day = 'numeric';
    const locale = 'en-US'
    const formattedYear = date.toLocaleDateString(locale, {year});
    const formattedMonth = date.toLocaleDateString(locale, {month});
    const formattedDay = date.toLocaleDateString(locale, {day});
    return <div>
        {desc && <div className={styles['description__text']}>
            {desc}
            </div>}
        <div>
            <span className={[styles['date__label'], styles.date].join(' ')}>Published: </span>
            <span className={[styles['date__date'], styles.date].join(' ')}>{`${formattedMonth} ${formattedDay}, ${formattedYear}`}</span>
        </div>
    </div>;
}

export default LinkDescription;
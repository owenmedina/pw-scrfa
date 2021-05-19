import { FC } from "react";
import Tag from '../Tag/Tag';
import styles from './LinkDescription.module.scss';
import {DescriptionDetails} from '../../types/Link';

interface Props {
    details?: DescriptionDetails;
}

const LinkDescription: FC<Props> = ({details}) => {
    if (!details) return <div></div>;

    const {description, date, tags} = details;
    const year = 'numeric';
    const month = 'short';
    const day = 'numeric';
    const locale = 'en-US'
    const formattedYear = date?.toLocaleDateString(locale, {year});
    const formattedMonth = date?.toLocaleDateString(locale, {month});
    const formattedDay = date?.toLocaleDateString(locale, {day});
    return <div>
        {description && <div className={styles['description__text']}>
            {description}
            </div>}
        <div>
            {date && <span className={styles.date}>
                <span className={styles['date__label']}>Published: </span>
                <span className={styles['date__date']}>{`${formattedMonth} ${formattedDay}, ${formattedYear}`}</span>
            </span>}
            {tags && tags.map(tag => <Tag text={tag.text} color={tag.color} key={tag.id}/>)}
        </div>
    </div>;
}

export default LinkDescription;
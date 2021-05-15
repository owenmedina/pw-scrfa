import { FC } from "react";
import TagComponent from '../Tag/Tag';
import Tag from '../../types/Tag';
import EventDetail from './EventDetail';
import styles from './EventDetails.module.scss';

interface Props {
    title: string;
    location: string;
    date: Date;
    contact: string;
    tags: Tag[];
}

const EventDetails: FC<Props> = ({title, location, date, contact, tags}) => {
    const rawHours = date.getHours();
    const isMorning = rawHours < 12;
    const hours = isMorning ? (rawHours === 0 ? 12 : rawHours) : (rawHours === 12 ? rawHours : rawHours%12);
    const minutes = date.getMinutes();
    return <div className={styles['event-details']}>
        <div>
            {tags.map(tag => <TagComponent text={tag.text} color={tag.color}/>)}
        </div>
        <div>{title}</div>
        <EventDetail otherClasses={[styles['event-detail']]} icon={'location'} text={location}/>
        <EventDetail otherClasses={[styles['event-detail']]} icon={'clock'} text={`${hours}:${minutes} ${isMorning ? 'am' : 'pm'}`}/>
        <EventDetail otherClasses={[styles['event-detail']]} icon={'contact'} text={contact}/>
    </div>;
};

export default EventDetails;
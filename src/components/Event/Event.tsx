import {FC} from 'react';
import EventDate from './EventDate';
import EventDetails from './EventDetails';
import EventClass from '../../types/Event';
import styles from './Event.module.scss';

interface Props {
    event: EventClass;
}

const Event: FC<Props> = ({event}) => {
    return <div className={styles.event}>
        <EventDate date={event.date} />
        <EventDetails title={event.title} location={event.location} date={event.date} contact={event.contact} tags={event.tags}/>
    </div>;
}

export default Event;
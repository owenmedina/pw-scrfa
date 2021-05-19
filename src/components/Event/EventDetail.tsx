import { FC } from "react";
import styles from './EventDetail.module.scss';
import {ReactComponent as LocationSVG} from './assets/location.svg'
import {ReactComponent as ClockSVG} from './assets/clock.svg'
import {ReactComponent as ContactSVG} from './assets/contact.svg'

const iconDict = {
    location: <LocationSVG />,
    clock: <ClockSVG />,
    contact: <ContactSVG />
}

interface Props {
    icon: keyof (typeof iconDict);
    text: string;
    otherClasses?: string[];
}

const EventDetail: FC<Props> = ({icon, text, otherClasses}) => {
    const classes = otherClasses ? otherClasses.slice(0) : [];
    classes.push(styles['event-detail']);
    return <div className={classes.join(' ')}>
        <span className={styles['event-detail__icon']}>{iconDict[icon] as JSX.Element}</span>
        <span className={styles['event-detail__text']}>{text}</span>
    </div>;
}

export default EventDetail;
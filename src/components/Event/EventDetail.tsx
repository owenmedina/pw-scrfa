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
}

const EventDetail: FC<Props> = ({icon, text}) => {
    return <div className={styles['event-detail']}>
        <span className={styles['event-detail__icon']}>{iconDict[icon] as JSX.Element}</span>
        <span className={styles['event-detail__text']}>{text}</span>
    </div>;
}

export default EventDetail;
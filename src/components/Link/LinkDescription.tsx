import { FC } from "react";
import styles from './LinkDescription.module.scss';

interface Props {
    desc?: string;
    date: Date;
}

const LinkDescription: FC<Props> = ({desc, date}) => {
    return <div>
        {desc && <div className={styles['description__text']}>
            {desc}
            </div>}
        {date.toDateString()}
    </div>;
}

export default LinkDescription;
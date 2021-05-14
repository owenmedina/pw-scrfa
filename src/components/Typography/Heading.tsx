import { FC } from "react"
import styles from './Heading.module.scss';

interface Props {
    style: number;
    text: string;
}

const Heading: FC<Props> = ({style, text}) => {
    return <div className={styles[`heading-${style}`]}>
        {text}
    </div>;
}

export default Heading;
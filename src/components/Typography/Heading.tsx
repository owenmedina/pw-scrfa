import { FC } from "react"
import styles from './Heading.module.scss';

interface Props {
    style: number;
    text: string;
    otherClasses?: string[];
}

const Heading: FC<Props> = ({style, text, otherClasses}) => {
    const classes = otherClasses ?? [];
    classes.push(styles[`heading-${style}`])
    return <div role={'heading'} className={classes.join(' ')}>
        {text}
    </div>;
}

export default Heading;
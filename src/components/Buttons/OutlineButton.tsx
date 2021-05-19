import SolidButton from './SolidButton';
import {FC} from 'react';
import styles from './OutlineButton.module.scss';

interface Props {
    text?: string;
    otherClasses?: string[];
}

const OutlineButton: FC<Props> = ({text, otherClasses}) => {
    const classes = otherClasses ?? [];
    classes.push(styles['button-outline']);
    return <SolidButton otherClasses={classes} text={text}/>;
}

export default OutlineButton;
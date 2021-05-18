import { FC } from "react";
import OutlineButton from "../Buttons/OutlineButton";
import SearchButton from '../Buttons/SearchButton';
import styles from './SearchForm.module.scss';

interface Props {
    buttonText?: string;
    placeholder?: string;
    buttonStyle?: number;
    otherClasses?: string[];
}

const SLForm: FC<Props> = ({buttonText, placeholder, buttonStyle, otherClasses}) => {
    const classes = otherClasses ?? [];
    classes.push(styles['search-form']);
    return <form className={classes.join(' ')}>
            <input className={`${styles['search-form__input']} ${styles['mr-sm']}`} placeholder={placeholder}></input>
            <OutlineButton text={buttonText}/>
    </form>;
};

export default SLForm;
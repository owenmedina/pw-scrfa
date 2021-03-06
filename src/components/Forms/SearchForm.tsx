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
    return <form className={classes.join(' ')} aria-label={'header-search'} role={'search'}>
            <input className={`${styles['search-form__input']} ${styles['mr-sm']}`} placeholder={placeholder} aria-label={placeholder}></input>
            <OutlineButton text={buttonText}/>
    </form>;
};

export default SLForm;
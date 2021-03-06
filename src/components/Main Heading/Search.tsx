import SearchButton from "../Buttons/SearchButton"
import styles from './Search.module.scss';

const Search = () => {
    const placeholder = 'Search rfa.sc.gov';
    return <form className={styles['search__form']}>
            <input className={`${styles['search__input']} ${styles['mr-sm']}`} placeholder={placeholder} aria-label={placeholder}></input>
            <SearchButton />
    </form>;
}

export default Search;
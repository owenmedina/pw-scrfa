import {ReactComponent as SearchSVG} from './assets/svg/search.svg';
import styles from './SearchButton.module.scss';

const SearchButton = () => {
    return <button className={styles['button-search']}>
        <span className={`${styles['button-search__text']} ${styles['mr-sm']}`}>Search</span>
        <SearchSVG type={'submit'} className={styles['button-search__svg']}/>
        </button>;
}

export default SearchButton;
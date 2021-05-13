import {ReactComponent as SearchSVG} from './assets/svg/search.svg';
import styles from './SearchButton.module.scss';

const SearchButton = () => {
    return <button className={styles['button-search']}>
        <SearchSVG className={styles['search-svg']}/>
    </button>;
}

export default SearchButton;
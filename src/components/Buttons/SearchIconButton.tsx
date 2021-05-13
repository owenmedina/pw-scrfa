import {ReactComponent as SearchSVG} from './assets/svg/search.svg';
import styles from './SearchIconButton.module.scss';

const SearchIconButton = () => {
    return <button className={`${styles['icon-button--search']} ${styles['mr-sm']}`}>
        <SearchSVG className={styles['search-svg']}/>
    </button>;
}

export default SearchIconButton;
import { useState } from 'react';
import {ReactComponent as SearchSVG} from './assets/svg/search.svg';
import styles from './SearchIconButton.module.scss';
import SearchForm from '../Forms/SearchForm';

const SearchIconButton = () => {
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleSearch = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).tagName !== 'INPUT')setSearchOpen(prev => !prev);
    }

    return <div role={'button'} className={[styles['button-icon-search'], styles[`button-icon-search--${searchOpen ? 'open' : 'close'}`], styles['mr-sm']].join(" ")} onClick={toggleSearch}>
        <SearchSVG className={styles['search-svg']}/>
        {searchOpen && <div className={styles['search-form--nav']}>
            <SearchForm placeholder={'Enter search term'} buttonText={'Search'} buttonStyle={2} />
        </div>}
    </div>;
}

export default SearchIconButton;
import { useState } from 'react';
import {ReactComponent as SearchSVG} from './assets/svg/search.svg';
import styles from './SearchIconButton.module.scss';
import SearchForm from '../Forms/SearchForm';

const SearchIconButton = () => {
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        if ((e.target as HTMLButtonElement).tagName !== 'INPUT')setSearchOpen(prev => !prev);
        console.log('search pressed', (e.target as HTMLButtonElement).tagName);
    }

    return <button className={[styles['button-icon-search'], styles[`button-icon-search--${searchOpen ? 'open' : 'close'}`], styles['mr-sm']].join(" ")} onClick={toggleSearch}>
        <SearchSVG className={styles['search-svg']}/>
        {searchOpen && <div className={styles['search-form--nav']}>
            <SearchForm placeholder={'Enter search term'} buttonText={'Search'} buttonStyle={2} />
        </div>}
    </button>;
}

export default SearchIconButton;
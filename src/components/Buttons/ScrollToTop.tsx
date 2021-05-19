import { FC } from "react";
import CircularIconButton from './CircularIconButton';
import styles from './ScrollToTop.module.scss';

const ScrollToTop: FC = () => {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return <div role={'button'} className={styles['scroll-to-top']} onClick={scrollToTop}>
        <span>Back to Top</span>
        <CircularIconButton icon={'up'}/>
    </div>
}

export default ScrollToTop;
import { FC } from "react";
import CircularIconButton from './CircularIconButton';
import styles from './ScrollToTop.module.scss';

const ScrollToTop: FC = () => {
    return <div role={'button'} className={styles['scroll-to-top']}>
        <span>Back to Top</span>
        <CircularIconButton icon={'up'}/>
    </div>
}

export default ScrollToTop;
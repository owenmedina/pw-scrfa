import { FC } from "react";
import styles from './ColumnarContent.module.scss';

interface Props {
    columns: number;
}

const ColumnarContent: FC<Props> = ({children, columns}) => {
    return <div className={styles[`column-${columns}`]}>
        {children}
    </div>;
}

export default ColumnarContent;
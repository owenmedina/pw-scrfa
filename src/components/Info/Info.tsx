import styles from './Info.module.scss';
import Article from '../Layout/Article';


const Info = () => {
    const articles = [];
    return <div className={styles.info}>
        <Article title='Popular Services and Links' titleStyle={1}/>
    </div>;
}

export default Info;
import styles from './Info.module.scss';
import Article from '../Layout/Article';
import Link from '../Typography/Link';
import LinkClass from '../../types/Link';


const Info = () => {
    const servicesAndLinks = [new LinkClass('Overview and History of the South Carolina State Budget', 'https://www.google.com'),
    new LinkClass('Employer Contribution Trends', 'https://www.google.com'),
    new LinkClass('Appropriation Bills and Acts', 'https://www.google.com'),
    new LinkClass('Overview and History of the South Carolina State Budget', 'https://www.google.com'),
    new LinkClass('Employer Contribution Trends - June 4, 2019', 'https://www.google.com'),
    new LinkClass('Executive Budget Office State Agency Budget Plans (Requests)', 'https://www.google.com'),
    new LinkClass('Overview and History of the South Carolina State Budget', 'https://www.google.com'),
    new LinkClass('Employer Contribution Trends - June 4, 2019', 'https://www.google.com'),
    new LinkClass('Executive Budget Office State Agency Budget Plans (Requests)', 'https://www.google.com')];
    const articles = [<Article title='Popular Services and Links' titleStyle={1} content={<div>{servicesAndLinks.map(l => <Link otherClasses={[styles['info__content']]}text={l.title} reference={l.reference}/>)}</div>}/>];

    return <div className={styles.info}>
        {articles}
    </div>
}

export default Info;
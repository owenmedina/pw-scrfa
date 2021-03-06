import Section from '../../types/Section';
import Card from '../Layout/Card';
import styles from './Sections.module.scss';

interface Props {
    sections: Section[];
}

const Sections: React.FC<Props> = ({sections}) => {
    return <div role={'region'} className={styles.sections}>
        {sections.map(section => <Card icon={section.icon} title={section.title} key={section.id} otherClasses={[styles.section]}/>)}
    </div>;
}

export default Sections;
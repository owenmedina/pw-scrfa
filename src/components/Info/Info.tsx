import styles from './Info.module.scss';
import Article from '../Layout/Article';
import LinkComponent from '../Link/Link';
import LinkDescriptionComponent from '../Link/LinkDescription';
import Spacer from '../Utilities/Spacer';
import SolidButton from '../Buttons/SolidButton';
import {Link, LinkDescription } from '../../types/Link';
import EventComponent from '../Event/Event';
import EventClass from '../../types/Event';
import Tag from '../../types/Tag';
import ScrollToTop from '../Buttons/ScrollToTop';


const Info = () => {
    const servicesAndLinks = [new Link('Overview and History of the South Carolina State Budget', 'https://www.google.com'),
    new Link('Employer Contribution Trends', 'https://www.google.com'),
    new Link('Appropriation Bills and Acts', 'https://www.google.com'),
    new Link('Overview and History of the South Carolina State Budget', 'https://www.google.com'),
    new Link('Employer Contribution Trends - June 4, 2019', 'https://www.google.com'),
    new Link('Executive Budget Office State Agency Budget Plans (Requests)', 'https://www.google.com'),
    new Link('Overview and History of the South Carolina State Budget', 'https://www.google.com'),
    new Link('Employer Contribution Trends - June 4, 2019', 'https://www.google.com'),
    new Link('Executive Budget Office State Agency Budget Plans (Requests)', 'https://www.google.com')];

    const recentUpdates = [new Link('Local Government Finance', 'https://www.google.com', new LinkDescription({date: new Date(2020, 0, 2), description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi unde placeat soluta consequatur sint!', tags: [new Tag('Updated', 'gray')]})),
    new Link('Transportation Network Carrier Maps', 'https://www.google.com', new LinkDescription({date: new Date(2020, 0, 2), tags: [new Tag('New', 'gray')]})),
    new Link('BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23', 'https://www.google.com', new LinkDescription({date: new Date(2019, 11, 16), description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi unde placeat soluta consequatur sint!', tags: [new Tag('Updated', 'gray')]})),
    new Link('Budget Development', 'https://www.google.com', new LinkDescription({date: new Date(2019, 11, 16), tags: [new Tag('New', 'gray')]})),
    new Link('November 2019 General Fund Revenue Digest', 'https://www.google.com', new LinkDescription({date: new Date(2019, 11, 13), tags: [new Tag('New', 'gray')]}))];

    const events = [new EventClass('Board of Economic Advisors Meeting', 'Room 417, Bowers Conference Room, Rembert Dennis Building', new Date(2020, 10, 22, 13, 30, 0), '803-734-2265', [new Tag('Updated', 'gold')]),
    new EventClass('Board of Economic Advisors Meeting', 'Room 417, Bowers Conference Room, Rembert Dennis Building', new Date(2020, 10, 23, 13, 30, 0), '(803)734-2265', [new Tag('Cancelled', 'red')]),
    new EventClass('Board of Economic Advisors Meeting', 'Room 417, Bowers Conference Room, Rembert Dennis Building', new Date(2020, 10, 25, 13, 30, 0), '(803)-734-2265'),
    new EventClass('Board of Economic Advisors Meeting', 'Room 417, Bowers Conference Room, Rembert Dennis Building', new Date(2020, 10, 28, 13, 30, 0), '8037342265')];

    const articles = [<Article title='Popular Services and Links' titleStyle={1} content={<div>{servicesAndLinks.map(l => <LinkComponent otherClasses={[styles['info__content']]}text={l.title} reference={l.reference} key={l.id}/>)}</div>} contentColumns={3}/>,
    <Article title='Recent Updates' titleStyle={2} content={<div>{recentUpdates.map(u => <div className={styles['info__content']} key={u.id}>
        <LinkComponent text={u.title} reference={u.reference}/>
        {u.description && <div><Spacer size={'xs'}/>
        <LinkDescriptionComponent details={u.description.details}/> </div>}
    </div>
    )}
        <SolidButton text={'View More'} />
    </div>} contentColumns={1}/>,
    <Article title={'Calendar of Events'} titleStyle={2} content={
        <div>
            {events.map(event => <EventComponent otherClasses={[styles['info__content']]} event={event} key={event.id}/>)}
            <SolidButton text={'View All Events'} />
        </div>
    } contentColumns={1}/>];

    return <div role={'region'} className={styles.info}>
        <Article title='Popular Services and Links' titleStyle={1} content={<div>{servicesAndLinks.map(l => <LinkComponent otherClasses={[styles['info__content']]}text={l.title} reference={l.reference} key={l.id}/>)}</div>} contentColumns={3}/>
        <Spacer size={'xl'} />
        <div>
            <Article title='Recent Updates' titleStyle={2} content={<div>{recentUpdates.map(u => <div className={styles['info__content']} key={u.id}>
            <LinkComponent text={u.title} reference={u.reference}/>
            {u.description && <div><Spacer size={'xs'}/>
            <LinkDescriptionComponent details={u.description.details}/> </div>}
        </div>
        )}
            <SolidButton text={'View More'} otherClasses={[styles['button-more']]}/>
        </div>} contentColumns={1}/>

        <Article title={'Calendar of Events'} titleStyle={2} content={
            <div>
                {events.map(event => <EventComponent otherClasses={[styles['info__content']]} event={event} key={event.id}/>)}
                <SolidButton text={'View All Events'} otherClasses={[styles['button-more']]}/>
            </div>
        } contentColumns={1}/>
        </div>

        <div className={styles['info__footer']}>
            <ScrollToTop />
        </div>
    </div>
}

export default Info;
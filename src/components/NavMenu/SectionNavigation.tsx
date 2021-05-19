import {v4 as uuidv4} from 'uuid';

import { FC } from "react";
import { Link } from "../../types/Link";
import Heading from "../Typography/Heading";
import styles from './SectionNavigation.module.scss';

const SectionNavigation: FC = () => {
    const sections = [{id: uuidv4(), title: 'Data & Research', links: [new Link('Economy', 'https://www.google.com'), new Link('State Finances', 'https://www.google.com'), new Link('Education', 'https://www.google.com'), new Link('Healthcare', 'https://www.google.com'), new Link('Local Government', 'https://www.google.com'), new Link('Population and Demographics', 'https://www.google.com'), new Link('State Register Calculations', 'https://www.google.com'), new Link('Presentations', 'https://www.google.com')]},
    {id: uuidv4(), title: 'Geography & Mapping', links: [new Link('Transportation Carrier Network (Uber)', 'https://www.google.com'), new Link('SC Real Time Network', 'https://www.google.com'), new Link('SC State GIS', 'https://www.google.com'), new Link('Maps', 'https://www.google.com'), new Link('Interactive Mapping', 'https://www.google.com'), new Link('Statewide Aerial Imagery', 'https://www.google.com')]},
    {id: uuidv4(), title: 'Programs & Services', links: [new Link('Precinct Demographics and Redistricting', 'https://www.google.com'), new Link('State 911 Program', 'https://www.google.com'), new Link('Data Services and Online Solutions', 'https://www.google.com'), new Link('Geodetic Survey', 'https://www.google.com'), new Link('Fiscal Analysis', 'https://www.google.com'), new Link('2020 Census', 'https://www.google.com')]},
    {id: uuidv4(), title: 'Legislative Fiscal Impacts', links: [new Link('Current General Assembly Session', 'https://www.google.com'), new Link('Previous General Assembly Session', 'https://www.google.com'), new Link('Forms', 'https://www.google.com')]}];
    return <div className={styles['section-navigation']}>
            {sections.map(section => <div key={section.id}>
                <Heading text={section.title} style={3} otherClasses={[styles['section-navigation__heading']]}/>
                <ul>
                    {section.links.map(l => <li key={l.id}><a href={l.reference}>{l.title}</a></li>)}
                </ul>
            </div>)}
    </div>;
}

export default SectionNavigation;
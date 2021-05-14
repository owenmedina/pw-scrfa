import {ReactElement} from 'react';

interface SectionInterface {
    icon: ReactElement;
    title: string;
}

class Section implements SectionInterface {
    icon: ReactElement;
    title: string;

    constructor(icon: ReactElement, title: string) {
        this.icon = icon;
        this.title = title;
    }
}

export default Section;
import { v4 as uuidv4 } from 'uuid';

import {ReactElement} from 'react';

interface SectionInterface {
    id: string;
    icon: ReactElement;
    title: string;
}

class Section implements SectionInterface {
    id: string;
    icon: ReactElement;
    title: string;

    constructor(icon: ReactElement, title: string) {
        this.id = uuidv4();
        this.icon = icon;
        this.title = title;
    }
}

export default Section;
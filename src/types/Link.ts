import { v4 as uuidv4 } from 'uuid';
import Tag from './Tag';

interface LinkInterface {
    id: string;
    title: string;
    reference: string;
    description?: LinkDescriptionInterface;
}

export class Link implements LinkInterface {
    id: string;
    title: string;
    reference: string;
    description?: LinkDescriptionInterface;

    constructor(title: string, reference: string, description?: LinkDescriptionInterface) {
        this.id = uuidv4();
        this.title = title;
        this.reference = reference;
        this.description = description;
    }
}

export interface DescriptionDetails {
    date?: Date;
    description?: string;
    tags?: Tag[];
}

interface LinkDescriptionInterface {
    details?: DescriptionDetails;
}

export class LinkDescription implements LinkDescriptionInterface {
    details?: DescriptionDetails;
    constructor(details?: DescriptionDetails) {
        this.details = details;
    }
}
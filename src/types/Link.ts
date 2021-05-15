interface LinkInterface {
    title: string;
    reference: string;
    description?: LinkDescriptionInterface;
}

export class Link implements LinkInterface {
    title: string;
    reference: string;
    description?: LinkDescriptionInterface;

    constructor(title: string, reference: string, description?: LinkDescriptionInterface) {
        this.title = title;
        this.reference = reference;
        this.description = description;
    }
}

export interface DescriptionDetails {
    date?: Date;
    description?: string;
    tags?: string[];
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
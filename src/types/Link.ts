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

interface LinkDescriptionInterface {
    date: Date;
    description?: string;
}

export class LinkDescription implements LinkDescriptionInterface {
    date: Date;
    description?: string;
    constructor(date: Date, description?: string) {
        this.description = description;
        this.date = date;
    }
}
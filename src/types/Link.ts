interface LinkInterface {
    title: string;
    reference: string;
}

class Link implements LinkInterface {
    title: string;
    reference: string;

    constructor(title: string, reference: string) {
        this.title = title;
        this.reference = reference;
    }
}

export default Link;
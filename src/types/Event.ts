import Tag from "./Tag";

interface EventInterface {
    title: string;
    location: string;
    date: Date;
    contact: string;
    tags?: Tag[];
}

class EventClass implements EventInterface {
    title: string;
    location: string;
    date: Date;
    contact: string;
    tags: Tag[];

    constructor(title: string, location: string, date: Date, contact: string, tags?: Tag[]) {
        this.title = title;
        this.location = location;
        this.date = date;
        const cleanContact = contact.replace(/\D/g, "");
        this.contact = `(${cleanContact.slice(0,3)}) ${cleanContact.slice(3, 6)}-${cleanContact.slice(6)}`;
        this.tags = tags ?? [];
    }
}

export default EventClass;
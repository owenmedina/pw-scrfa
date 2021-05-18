import { v4 as uuidv4 } from 'uuid';

import Tag from "./Tag";

interface EventInterface {
    id: string;
    title: string;
    location: string;
    date: Date;
    contact: string;
    tags?: Tag[];
}

class EventClass implements EventInterface {
    id: string;
    title: string;
    location: string;
    date: Date;
    contact: string;
    tags: Tag[];

    constructor(title: string, location: string, date: Date, contact: string, tags?: Tag[]) {
        this.id = uuidv4();
        this.title = title;
        this.location = location;
        this.date = date;
        const cleanContact = contact.replace(/\D/g, "");
        this.contact = `(${cleanContact.slice(0,3)}) ${cleanContact.slice(3, 6)}-${cleanContact.slice(6)}`;
        this.tags = tags ?? [];
    }
}

export default EventClass;
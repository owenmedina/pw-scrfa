import { v4 as uuidv4 } from 'uuid';

interface TagInterface {
    id: string;
    text: string;
    color: string;
}

class Tag implements TagInterface {
    id: string;
    text: string;
    color: string;
    constructor(text: string, color = 'gray') {
        this.id = uuidv4();
        this.text = text;
        this.color = color;
    }
}

export default Tag;
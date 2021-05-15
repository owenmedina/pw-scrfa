interface TagInterface {
    text: string;
    color: string;
}

class Tag implements TagInterface {
    text: string;
    color: string;
    constructor(text: string, color = 'gray') {
        this.text = text;
        this.color = color;
    }
}

export default Tag;
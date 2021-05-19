import { v4 as uuidv4 } from 'uuid';

interface AddressInterface {
    id: string;
    title: string;
    street: string;
    city: string;
    state: string;
    zipCode: number;
}

class Address implements AddressInterface {
    id: string;
    title: string;
    street: string;
    city: string;
    state: string;
    zipCode: number;
    constructor(title: string, street: string, city: string, state: string, zipCode: number) {
        this.id = uuidv4();
        this.title = title;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }
}

export default Address;
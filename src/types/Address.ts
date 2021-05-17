interface AddressInterface {
    title: string;
    street: string;
    city: string;
    state: string;
    zipCode: number;
}

class Address implements AddressInterface {
    title: string;
    street: string;
    city: string;
    state: string;
    zipCode: number;
    constructor(title: string, street: string, city: string, state: string, zipCode: number) {
        this.title = title;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }
}

export default Address;
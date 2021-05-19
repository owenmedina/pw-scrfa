import { FC } from "react";
import Address from "../../types/Address";
import AddressComponent from './Address';

interface Props {
    addresses: Address[];
}

const Addresses: FC<Props> = ({addresses}) => {
    return <div>
        {addresses.map(address => <AddressComponent key={address.id} address={address}/>)}
    </div>;
}

export default Addresses;
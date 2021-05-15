import { FC } from "react";
import AddressClass from "../../types/Address";
import styles from './Address.module.scss';

interface Props {
    address: AddressClass;
}

const Address: FC<Props> = ({address}) => {
    return <div className={styles.address}>
        <div className={styles['address__title']}>{address.title}</div>
        <div className={styles['address__address']}>
            <span className={styles['address__first-line']}>{address.street}</span>
            <span className={styles['address__second-line']}>{`${address.city}, ${address.state} ${address.zipCode}`}</span>
        </div>
    </div>;
}

export default Address;
import React from 'react';
import style from './style.module.css';
import getSupplier from '../../../supplier/api/getSupplier';
import Item from './item';
const SupplierWidget = () => {
    let [suppliers, setSuppliers] = React.useState([])
    React.useEffect(() => {
        getSupplier({ limit: 30 }).then(response => {
            setSuppliers(response.result)
        })
    }, [])
    return (
        <div className={style.wrapper}>
            <h3>Suppliers</h3>
            <div className={style.supplier_wrapper}>
                {suppliers.map(supplier => <Item supplier={supplier} />)}
            </div>
        </div>
    )
}
export default SupplierWidget
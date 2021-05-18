import style from './style.module.css';
const Item = ({ supplier }) => {
    console.log(supplier)
    return (
        <div className={style.wrapper}>
            <p>{supplier.company_name}</p>
            <small>{supplier.contact_details.primary_number}</small>
        </div>
    )
}

export default Item;
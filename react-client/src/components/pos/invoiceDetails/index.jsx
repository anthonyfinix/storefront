import style from './invoice-details.module.css';
const InvoiceReview = ({ total }) => {
    return (
        <div className={style.wrapper}>
            <p>{total}</p>
        </div>
    )
}

export default InvoiceReview;
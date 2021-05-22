import style from './item.module.css';
const Item = ({ item, incQty, decQty }) => {
    console.log(item)
    return (
        <div className={style.item}>
            <p>
                {item.product.name}
            </p>
            <div className={style.qty_wrapper}>
                <button onClick={(e) => incQty(item.product._id)}>+</button>
                <p style={{ margin: "0px 5px" }}>{item.qty}</p>
                <button onClick={(e) => decQty(item.product._id)}>-</button>
            </div>
            <p>
                {item.product.current_price * item.qty}
            </p>
        </div>
    )
}

export default Item;
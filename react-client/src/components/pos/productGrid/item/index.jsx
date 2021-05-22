import item from './grid-item.module.css';
const Item = ({ product, addToCart }) => {
    return (
        <div className={item.wrapper} onClick={(e) => addToCart(product)}>
            <p className={item.name}>{product.name}</p>
        </div>
    )
}

export default Item;
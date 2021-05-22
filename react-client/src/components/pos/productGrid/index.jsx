import Item from './item';
import style from './product-grid.module.css';
const ProductGrids = ({ products, addToCart }) => {
    return (
        <div className={style.wrapper}>
            {products.map(product => (
                <Item product={product} addToCart={addToCart} />
            ))}
        </div>
    )
}

export default ProductGrids
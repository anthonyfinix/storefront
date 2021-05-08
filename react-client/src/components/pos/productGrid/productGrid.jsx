import './product-grid.css';
const ProductGrid = ({ product, addToCart }) => {
    return (
        <div className="product-grid" onClick={(e)=>addToCart(product)}>
            {product.name}
        </div>
    )
}

export default ProductGrid;
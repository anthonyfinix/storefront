import ProductGrid from './productGrid';
const ProductGrids = ({ products,addToCart }) => {
    return (
        <div className="product-grid-wrapper">
            {products.map(product => (
                <div>
                    <ProductGrid product={product} addToCart={addToCart} />
                </div>
            ))}
        </div>
    )
}

export default ProductGrids
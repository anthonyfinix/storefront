import Item from './item';
import style from './list.module.css';
const ShoppingList = ({ shoppingList, incQty, decQty }) => {
    return (
        <div className="shopping-list-wrapper">
            <h3>Shopping List</h3>
            <div className={style.titles}>
                <small>Item</small>
                <small>Quantity</small>
                <small>Price</small>
            </div>
            <div>
                {shoppingList.map(
                    item => <Item
                        incQty={incQty}
                        decQty={decQty}
                        item={item} />
                )}
            </div>
        </div>
    )
}
export default ShoppingList
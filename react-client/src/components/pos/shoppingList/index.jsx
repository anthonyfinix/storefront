import Item from './item';
const ShoppingList = ({ shoppingList, incQty, decQty }) => {
    return (
        <div className="shopping-list-wrapper">
            <h3>Shopping List</h3>
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
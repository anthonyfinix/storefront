import React from 'react';
import { StoreContext } from '../store/storeProvider';
import { ContentContext } from '../contentProvider';
import ProductGrids from './productGrid';
import CustomerDetails from './customerDetails';
import ShoppingList from './shoppingList';
import getUpdatedCustomerDetails from './customerDetails/getUpdatedCustomerDetails';
import './pos.css';


const PointOfSale = (props) => {
    const [shoppingList, setShoppingList] = React.useState([]);
    const [customerDetails, setCustomerDetails] = React.useState({
        name: {
            first_name: "",
            secondary_name: "",
            last_name: ""
        },
        contact_details: {
            primary_number: "",
            secondary_number: "",
            mobile_number: "",
            email: "",
            address: {
                full: "",
                city: "",
                state: "",
                coordinates: []
            }
        }
    });
    const handleCustomerInputChange = (e) => {
        setCustomerDetails({ ...getUpdatedCustomerDetails(e, customerDetails) })
    }
    const handleProductAddToCart = (product) => {
        setShoppingList([...shoppingList, { product, qty: 1 }])
    }
    const increaseProductQty = (productId) => {
        let currentShoppingList = shoppingList;
        for (let i = 0; i < currentShoppingList.length; i++) {
            if (productId == currentShoppingList[i].product._id) {
                currentShoppingList[i].qty = currentShoppingList[i].qty + 1;
            }
        }
        setShoppingList([...currentShoppingList]);
    }
    const decreaseProductQty = (productId) => {
        let currentShoppingList = shoppingList;
        for (let i = 0; i < currentShoppingList.length; i++) {
            if (productId == currentShoppingList[i].product._id) {
                if(currentShoppingList[i].qty == 1){
                    currentShoppingList.splice(i,1)
                }else{
                    currentShoppingList[i].qty = currentShoppingList[i].qty - 1;
                }
            }
        }
        setShoppingList([...currentShoppingList]);
    }
    const { stores } = React.useContext(StoreContext);
    const { product } = React.useContext(ContentContext);
    return (
        <div className="point_of_sale_wrapper">
            <div className="wrapper">
                <div><ProductGrids addToCart={handleProductAddToCart} products={product.products} /></div>
                <div>
                    <CustomerDetails
                        handleInputChange={handleCustomerInputChange}
                        customerDetails={customerDetails}
                    />
                    <ShoppingList
                        shoppingList={shoppingList}
                        incQty={increaseProductQty}
                        decQty={decreaseProductQty}
                    />
                </div>
            </div>
        </div>
    )
}

export default PointOfSale
import React from 'react';
import { StoreContext } from '../store/storeProvider';
import createPurchase from './api/createPurchase';
import { ContentContext } from '../contentProvider';
import ProductGrids from './productGrid';
import CustomerDetails from './customerDetails';
import ShoppingList from './shoppingList';
import InvoiceDetails from './invoiceDetails';
import getUpdatedCustomerDetails from './customerDetails/getUpdatedCustomerDetails';
import style from './pos.module.css';
import './pos.css';
import getCustomer from '../customer/api/getCustomer';
import { MdSearch } from 'react-icons/md'


const PointOfSale = (props) => {
    const { currentStore } = React.useContext(StoreContext);
    const { product } = React.useContext(ContentContext);
    const [shoppingList, setShoppingList] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const customerSearchQueryTimeout = React.useRef();
    const [dropdownState, setDropdownState] = React.useState(false);
    const [customerSearchResult, setCustomerSearchResult] = React.useState([]);
    const [customerDetails, setCustomerDetails] = React.useState({
        name: {
            first_name: "",
            middle_name: "",
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
    const setCustomer = (customer) => {
        //     console.log(customer)
    }
    const handleCustomerInputChange = (e) => {
        setCustomerDetails({ ...getUpdatedCustomerDetails(e, customerDetails) })
    }
    const handleProductAddToCart = (product) => {
        if (shoppingList.length <= 0) return setShoppingList([{ product, qty: 1 }])
        let products = shoppingList;
        let found = false;
        for (let i = 0; i < shoppingList.length; i++) {
            if (shoppingList[i].product._id == product._id) {
                products[i].qty += 1;
                found = !found;
                break
            }
        }
        if (!found) products.push({ product, qty: 1 })
        setShoppingList([...products]);
    }
    const increaseProductQty = (productId) => {
        let currentShoppingList = shoppingList;
        for (let i = 0; i < currentShoppingList.length; i++) {
            if (productId == currentShoppingList[i].product._id) {
                currentShoppingList[i].qty = currentShoppingList[i].qty + 1;
                break;
            }
        }
        setShoppingList([...currentShoppingList]);
    }
    const decreaseProductQty = (productId) => {
        let currentShoppingList = shoppingList;
        for (let i = 0; i < currentShoppingList.length; i++) {
            if (productId == currentShoppingList[i].product._id) {
                if (currentShoppingList[i].qty == 1) {
                    currentShoppingList.splice(i, 1)
                } else {
                    currentShoppingList[i].qty = currentShoppingList[i].qty - 1;
                }
                break
            }
        }
        setShoppingList([...currentShoppingList]);
    }
    const calculateTotal = () => {
        let total = 0;
        for (let item of shoppingList) {
            let price = parseInt(item.product.current_price)
            let qty = parseInt(item.qty)
            total = (total + (price * qty))
        }
        setTotal(total);
    }
    const generateInvoice = () => {
        let productsId = shoppingList.map(item => {
            return { id: item.product._id, qty: item.qty }
        })
        let purchase = {
            customer: customerDetails,
            store: currentStore._id,
            product: productsId,
            amount: { total },
        }
        createPurchase(purchase)
            .then(result => console.log(result))
    }
    const getCustomerQuery = (e) => {
        let value = e.currentTarget.value
        showDropdown();
        clearTimeout(customerSearchQueryTimeout.current)
        customerSearchQueryTimeout.current = setTimeout(() => {
            getCustomer(value).then(response => setCustomerSearchResult(response.result))
        }, 2000)
    }
    const hideDropdown = () => { setCustomerSearchResult([]); setDropdownState(false) }
    const showDropdown = () => setDropdownState(true)
    React.useEffect(() => {
        calculateTotal()
    }, [shoppingList])
    return (
        <div className={style.wrapper}>
            <div>
                <div className={style.header}>
                    <MdSearch />
                    <p>Search</p>
                </div>
                <ProductGrids addToCart={handleProductAddToCart} products={product.products} />
            </div>
            <div className={style.sidebar}>
                <CustomerDetails
                    handleInputChange={handleCustomerInputChange}
                    customerDetails={customerDetails}
                    customerNameSearchHandle={getCustomerQuery}
                    hideDropdown={hideDropdown}
                    showDropdown={dropdownState}
                    customerSearchResult={customerSearchResult}
                    setCustomer={setCustomer}
                />
                <ShoppingList
                    shoppingList={shoppingList}
                    incQty={increaseProductQty}
                    decQty={decreaseProductQty}
                />
                <InvoiceDetails total={total} />
                {/* <button onClick={generateInvoice}>Generate</button> */}
            </div>
        </div>
    )
}

export default PointOfSale
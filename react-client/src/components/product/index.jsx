import './product.css';
import React from 'react';
import Table from './table';
import Sidebar from './sidebar';
import Dialog from '../util/dialog';
import { ContentContext } from '../contentProvider';
import { StoreContext } from '../store/storeProvider';
import AddNewProductDialogInput from './AddNewProductDialogInput';
import createProduct from './api/createProduct';
import getUpdatedProductState from './getUpdatedProductState';
import sanitizeProduct from './sanitizeProduct';
const Product = (props) => {
    const { stores } = React.useContext(StoreContext);
    const { product: { products, productNextPage, productRefresh } } = React.useContext(ContentContext);
    const [showDialog, setShowDialog] = React.useState(false);
    const [isSidebarOpen, setSidebarOpen] = React.useState(false);
    let [newProduct, setNewProduct] = React.useState({
        productName: "",
        productSKU: "",
        productManufacturer: "",
        dimension: {
            width: "",
            height: "",
            weight: "",
            length: ""
        },
        dimension: { weight: "", height: "", length: "", width: "" },
        productBrand: "",
        productSalePrice: "",
        productCurrentPrice: "",
        productBuyingPrice: "",
        productSupplier: [],
        productCategory: { name: '' },
        stores: []
    });
    React.useEffect(() => { }, [])
    const addSupplier = (supplier) => {
        let product = newProduct;
        product.productSupplier.push(supplier)
        setNewProduct(product);
    }
    const setProductCategory = (productCategory) => {
        let product = newProduct;
        product.productCategory = productCategory;
        setNewProduct(product);
    }
    const handleAddNewProduct = () => {
        console.log(sanitizeProduct(newProduct));
        createProduct(sanitizeProduct(newProduct))
            .then(result => {
                console.log(result);
                let { error } = result;
                if (!error) productRefresh();
            })
    }
    const handleNewProductStoreValueChange = (e) => {
        let id = e.currentTarget.dataset.id;
        let value = e.currentTarget.value;
        let currentProduct = newProduct;
        let updatedStoreDetails = currentProduct.stores.map(store => {
            if (store.id == id) store.stock.currentStock = value
            return store;
        })
        currentProduct.stores = updatedStoreDetails;
        setNewProduct({ ...currentProduct });
    }
    const handleNewProductInputChange = (e) => {
        let element = e.currentTarget;
        setNewProduct({ ...getUpdatedProductState(element, newProduct) });
    }
    const handleSidebarOpen = () => { }
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const handleShowSupplier = (suppliers) => {
        toggleSidebar();
        let supplierDetailsPromise = suppliers.map(supplier => console.log(supplier))
    }
    const handleListScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        if (scrollHeight - scrollTop === clientHeight) productNextPage();
    }
    const closeDialog = () => setShowDialog(false);
    const toggleDialog = () => setShowDialog(!showDialog);
    const handleAddProductBtnClick = () => {
        let newProductCurrentValue = newProduct;
        newProductCurrentValue.stores = [...stores.map(store => ({
            name: store.name,
            id: store._id,
            stock: { currentStock: 0 }
        }))]
        setNewProduct({ ...newProductCurrentValue });
        toggleDialog();
    }
    return (
        <article className="entity-wrapper" id="product-wrapper">
            <div className="entity-header" id="product-header">
                <h3>Product</h3>
                <button onClick={handleAddProductBtnClick}>Add</button>
            </div>
            <div className="entity-content" id="product-content">
                <div id="table-wrapper" onScroll={handleListScroll}>
                    <Table data={products} toggleSidebar={handleShowSupplier} />
                </div>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} items={products} />
                <Dialog
                    close={closeDialog}
                    toggleDialog={toggleDialog}
                    show={showDialog}
                >
                    <AddNewProductDialogInput
                        toggleDialog={toggleDialog}
                        addSupplier={addSupplier}
                        handleNewProductInputChange={handleNewProductInputChange}
                        newProduct={newProduct}
                        addNewProduct={handleAddNewProduct}
                        handleAddNewProduct={handleAddNewProduct}
                        setProductCategory={setProductCategory}
                        handleNewProductStoreValueChange={handleNewProductStoreValueChange}
                    />
                </Dialog>
            </div>
            <button onClick={productNextPage}>Load more</button>
        </article>
    )
}
export default Product;
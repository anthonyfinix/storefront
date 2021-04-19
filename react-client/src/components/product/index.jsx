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
const Product = () => {
    const { stores } = React.useContext(StoreContext);
    const { product: { products, productNextPage } } = React.useContext(ContentContext);
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
    React.useEffect(() => {
        let newProductCurrentValue = newProduct;
        console.log(newProductCurrentValue.stores);
        newProductCurrentValue.stores = [...stores.map(store => ({
            name: store.name,
            id: store._id,
            stock: { currentStock: 0 }
        }))]
        setNewProduct({ ...newProductCurrentValue });
    }, [])
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
        let postData = {}
        postData.name = newProduct.productName;
        postData.sku = newProduct.sku;
        postData.category = newProduct.productCategory._id;
        postData.dimension = newProduct.dimension
        postData.supplier = newProduct.productSupplier.map(supplier => ({ id: supplier._id }))
        // postData.stores = newProduct.stores.map(store=>{
        //     return {

        //     }
        // })
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
        let element =  e.currentTarget;
        console.log(getUpdatedProductState(element,newProduct));
        // setNewProduct({ ...getUpdatedProductState(element, newProduct) });
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
    return (
        <article className="entity-wrapper" id="product-wrapper">
            <div className="entity-header" id="product-header">
                <h3>Product</h3>
                <button onClick={toggleDialog}>Add</button>
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
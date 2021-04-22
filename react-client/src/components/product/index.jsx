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
import getNewEmptyProduct from './getNewEmptyProduct';
const Product = (props) => {
    let [newProduct, setNewProduct] = React.useState({
        productId: "",
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
    const { stores } = React.useContext(StoreContext);
    const { product: { products, productNextPage, productRefresh, deleteProduct } } = React.useContext(ContentContext);
    const [showDialog, setShowDialog] = React.useState(false);
    const [isSidebarOpen, setSidebarOpen] = React.useState(false);
    React.useEffect(() => { }, [])
    const addSupplier = (supplier) => {
        let product = newProduct;
        product.productSupplier.push(supplier)
        setNewProduct({ ...product });
    }
    const setProductCategory = (productCategory) => {
        let product = newProduct;
        product.productCategory = productCategory;
        setNewProduct(product);
    }
    const handleAddNewProduct = () => {
        createProduct(sanitizeProduct(newProduct))
            .then(response => {
                console.log(response);
                let { error, result } = response;
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
    const toggleDialog = () => {
        setShowDialog(!showDialog);
        setNewProduct({ ...getNewEmptyProduct() });
    }
    const handleEditProductClick = (e, id) => {
        let selectedProduct;
        for (let product of products) {
            if (product._id === id) {
                console.log(product)
            }
        }
    }
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
    const removeProductSupplier = (e, id) => {
        let product = newProduct;
        product.productSupplier = product.productSupplier.filter(supplier => supplier._id === id ? false : true);
        setNewProduct({ ...product });
    }
    const handleDeleteProductClick = (e, id) => deleteProduct(id);
    return (
        <article className="entity-wrapper" id="product-wrapper">
            <div className="entity-header" id="product-header">
                <h3>Product</h3>
                <button onClick={handleAddProductBtnClick}>Add</button>
            </div>
            <div className="entity-content" id="product-content">
                <div id="table-wrapper" onScroll={handleListScroll}>
                    <Table data={products} deleteProduct={handleDeleteProductClick} editProduct={handleEditProductClick} toggleSidebar={handleShowSupplier} />
                </div>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} items={products} />
                <Dialog close={closeDialog} toggleDialog={toggleDialog} show={showDialog}>
                    <AddNewProductDialogInput
                        toggleDialog={toggleDialog}
                        addSupplier={addSupplier}
                        handleNewProductInputChange={handleNewProductInputChange}
                        newProduct={newProduct}
                        addNewProduct={handleAddNewProduct}
                        handleAddNewProduct={handleAddNewProduct}
                        setProductCategory={setProductCategory}
                        handleNewProductStoreValueChange={handleNewProductStoreValueChange}
                        removeSupplier={removeProductSupplier}
                    />
                </Dialog>
            </div>
            <button onClick={productNextPage}>Load more</button>
        </article>
    )
}
export default Product;
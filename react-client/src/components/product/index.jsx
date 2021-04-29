import './product.css';
import React from 'react';
import Table from './table';
import Sidebar from './sidebar';
import Dialog from '../util/dialog';
import { ContentContext } from '../contentProvider';
import { StoreContext } from '../store/storeProvider';
import AddNewProductDialogInput from './AddNewProductDialogInput';
import createProduct from './api/createProduct';
import updateProduct from './api/updateProduct';
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
    const handleProductUpdateCreateClick = () => {
        if (newProduct.productId) {
            createProduct(sanitizeProduct(newProduct))
                .then(response => {
                    console.log(response);
                    let { error, result } = response;
                    if (!error) productRefresh();
                })
        } else {
            updateProduct(sanitizeProduct(newProduct))
                .then(response => {
                    console.log(response);
                    let { error, result } = response;
                    if (!error) productRefresh();
                })
        }
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
    const closeDialog = () => {
        setShowDialog(false)
    };
    const toggleDialog = () => {
        if (showDialog) setNewProduct({ ...getNewEmptyProduct() })
        setShowDialog(!showDialog);
    }
    const handleEditProductClick = (id) => {
        for (let product of products) {
            if (product._id === id) {
                let currentStore = stores.map(store => {
                    let stock = { currentStock: 0 };
                    for (let productStore of product.stores) {
                        if (productStore.id._id == store._id){
                            stock = productStore.stock;
                        }
                    }
                    return {
                        name: store.name,
                        id: store._id,
                        stock
                    }
                })
                let suppliers = product.suppliers.map((supplier => ({ company_name: supplier.id.company_name, id: supplier.id._id })))
                setNewProduct(() => {
                    return {
                        productId: product._id,
                        productName: product.name,
                        productSKU: product.sku,
                        productManufacturer: product.manufacturer,
                        dimension: {
                            width: product.dimension.width,
                            height: product.dimension.height,
                            weight: product.dimension.weight,
                            length: product.dimension.length
                        },
                        productBrand: product.brand,
                        productSalePrice: product.sale_price,
                        productCurrentPrice: product.current_price,
                        productBuyingPrice: product.buying_price,
                        productSupplier: suppliers,
                        productCategory: product.category,
                        stores: currentStore,
                    }
                })
                toggleDialog();
                break;
            };
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
                        handleDialogSubmit={handleProductUpdateCreateClick}
                        handleAddNewProduct={handleProductUpdateCreateClick}
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
import React from 'react';
import './addNewProduct.css';
import '../../util/dialog/dialog.css';
import Dropdown from '../../util/dropdown';
import getSupplier from '../../supplier/api/getSupplier';
import getProductCategory from '../../productCategory/api/getProductCategory';

const AddNewProductDialogInput = ({
    handleNewProductInputChange,
    newProduct,
    addSupplier,
    setProductCategory,
    toggleDialog,
    addNewProduct,
    handleNewProductStoreValueChange
}) => {
    const supplierSearchQueryRef = React.useRef();
    const [suppliers, setSupplier] = React.useState([]);
    const [supplierSearchQuery, setSupplierSearchQuery] = React.useState('');
    const handleSupplierSearch = (e) => setSupplierSearchQuery(e.currentTarget.value);
    const [supplierDropdown, setSupplierDropdown] = React.useState(false)
    const hideSupplierDropdown = () => setSupplierDropdown(false);
    const showSupplierDropdown = () => setSupplierDropdown(true);

    const productCategorySearchQueryRef = React.useRef();
    const [productCategories, setProductCategories] = React.useState([]);
    const [productCategorySearchQuery, setProductCategorySearchQuery] = React.useState('');
    const handleProductCategorySearch = (e) => setProductCategorySearchQuery(e.currentTarget.value);
    const [productCategoryDropdown, setProductCategoryDropdown] = React.useState(false);
    const hideProductCategoryDropdown = () => setProductCategoryDropdown(false);
    const showProductCategoryDropdown = () => setProductCategoryDropdown(true);

    React.useEffect(() => {
        getSupplier({ query: supplierSearchQuery })
            .then(response => setSupplier(response.data.result))
        getProductCategory({ query: productCategorySearchQuery })
            .then(response => setProductCategories(response.data.result))
    }, [supplierSearchQuery, productCategorySearchQuery]);

    const handleProductCategoryNameClick = (productCategory) => {
        setProductCategory(productCategory)
        hideProductCategoryDropdown();
    }
    const handleSupplierCompanyNameClick = (supplier) => {
        addSupplier(supplier);
        hideSupplierDropdown();
    }

    return (<>
        <h3 className="mt-0">Add Product</h3>
        <div className="input-main-wrapper product-input-main-wrapper">
            <div className="mr-2">
                <div className="input-wrapper">
                    <label>Name</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.productName} name="name" />
                </div>
                <div className="input-wrapper">
                    <label>SKU</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.productSKU} name="sku" />
                </div>
                <div className="input-wrapper">
                    <label>Manufacturer</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.productManufacturer} name="manufacturer" />
                </div>
                <div className="input-wrapper">
                    <label>Brand</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.productBrand} name="brand" />
                </div>
                <div className="input-wrapper">
                    <label>Sale Price</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.productSalePrice} name="sale_price" />
                </div>
                <div className="input-wrapper">
                    <label>Current Price</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.productCurrentPrice} name="current_price" />
                </div>
                <div className="input-wrapper">
                    <label>Buying Price</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.productBuyingPrice} name="buying_price" />
                </div>
            </div>
            <div>
                <div className="input-wrapper">
                    <label>Supplier</label>
                    <input
                        onChange={handleSupplierSearch}
                        onFocus={() => showSupplierDropdown()}
                        ref={supplierSearchQueryRef}
                        value={supplierSearchQuery}
                        name="supplier"
                    />
                    {newProduct.productSupplier.map(supplier => {
                        return <p>{supplier.company_name}</p>
                    })}
                </div>
                <Dropdown
                    el={supplierSearchQueryRef.current}
                    close={hideSupplierDropdown}
                    show={supplierDropdown}
                >
                    {suppliers.map(supplier => <p data-id={supplier._id} onClick={(e) => {
                        handleSupplierCompanyNameClick(supplier)
                    }}>{supplier.company_name}</p>)}
                </Dropdown>
            </div>
            <div>
                <div className="input-wrapper">
                    <label>Product Category</label>
                    <input type="text"
                        onChange={handleProductCategorySearch}
                        onFocus={() => showProductCategoryDropdown()}
                        ref={productCategorySearchQueryRef}
                        value={productCategorySearchQuery}
                        name="product_category"
                    />
                    {newProduct.productCategory.name}
                </div>
                <Dropdown
                    el={productCategorySearchQueryRef.current}
                    close={hideProductCategoryDropdown}
                    show={productCategoryDropdown}
                >
                    {productCategories.map(productCategory => <p data-id={productCategory._id} onClick={(e) => handleProductCategoryNameClick(productCategory)}>{productCategory.name}</p>)}
                </Dropdown>
                <div className="input-wrapper">
                    <label>Width</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.dimension.width} name="width" />
                </div>
                <div className="input-wrapper">
                    <label>Height</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.dimension.height} name="height" />
                </div>
                <div className="input-wrapper">
                    <label>Length</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.dimension.length} name="length" />
                </div>
                <div className="input-wrapper">
                    <label>Weight</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.dimension.weight} name="weight" />
                </div>
            </div>
            <div>
                {newProduct.stores.map((store, i) => {
                    return (
                        <div key={store.id} className="input-wrapper">
                            <label>{store.name}</label>
                            <input
                                type="text"
                                data-id={store.id}
                                onChange={handleNewProductStoreValueChange}
                                value={store.stock.currentStock}
                                name="productBuyingPrice"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
        <div>
            <button>close</button>
            <button onClick={addNewProduct}>Add New Product</button>
        </div>
    </>
    )
}

export default AddNewProductDialogInput;
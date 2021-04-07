import React from 'react';
import '../../util/dialog/dialog.css';
import './addNewProduct.css';
import getSupplier from '../../supplier/api/getSupplier';
import Dropdown from '../../util/dropdown';
const AddNewProduct = ({ handleNewProductInputChange, newProduct, ...props }) => {
    const [suppliers, setSupplier] = React.useState([]);
    const searchQuery = React.useRef();
    const [query, setQuery] = React.useState('');
    const [supplierDropdown, setSupplierDropdown] = React.useState(false)
    const handleSupplierSearch = (e) => setQuery(e.currentTarget.value);
    const hideSupplierDropdown = () => setSupplierDropdown(false);
    const showSupplierDropdown = () => setSupplierDropdown(true);
    React.useEffect(() => {
        return getSupplier({ query })
            .then(suppliers => setSupplier(suppliers.data.result))
    }, [query]);
    const handleSupplierCompanyNameClick = () => { }
    return (<>
        <h3 className="mt-0">Add Product</h3>
        <div className="input-main-wrapper product-input-main-wrapper">
            <div className="mr-2">
                <div className="input-wrapper">
                    <label>Name</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.productName} name="productName" />
                </div>
                <div className="input-wrapper">
                    <label>SKU</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.productSKU} name="productSKU" />
                </div>
                <div className="input-wrapper">
                    <label>Manufacturer</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.productManufacturer} name="productManufacturer" />
                </div>
                <div className="input-wrapper">
                    <label>Brand</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.productBrand} name="productBrand" />
                </div>
                <div className="input-wrapper">
                    <label>Sale Price</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.productSalePrice} name="productSalePrice" />
                </div>
                <div className="input-wrapper">
                    <label>Current Price</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.productCurrentPrice} name="productCurrentPrice" />
                </div>
                <div className="input-wrapper">
                    <label>Buying Price</label>
                    <input type="text" onChange={handleNewProductInputChange} value={newProduct.productBuyingPrice} name="productBuyingPrice" />
                </div>
            </div>
            <div>
                <div className="input-wrapper">
                    <label>Supplier</label>
                    <input
                        onChange={handleSupplierSearch}
                        onFocus={() => showSupplierDropdown()}
                        onBlur={() => hideSupplierDropdown()}
                        ref={searchQuery}
                        value={query}
                    />
                </div>
                <Dropdown el={searchQuery.current} show={supplierDropdown}>
                    {/* {suppliers.map(supplier => {
                        <p data-id={supplier._id}>{supplier.company_name}</p>
                    })} */}
                    <h5>Dropdown</h5>
                </Dropdown>
            </div>
        </div>
        <div>
            <button>close</button>
            <button>Add New Product</button>
        </div>
    </>
    )
}

export default AddNewProduct;
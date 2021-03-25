import '../../util/dialog/dialog.css';
const AddNewProduct = ({ toggleDialog, handleNewProductInputChange, newProduct, show, ...props }) => {
    let display = show ? "flex" : "none";
    console.log(newProduct)
    const handleDialogWrapper = (e) => {
        let target = e.target;
        let firstClass = target.getAttribute('id');
        if (firstClass && firstClass === "dialog-wrapper") toggleDialog();
    }
    return (
        <div id="dialog-wrapper" onClick={handleDialogWrapper} style={{ display }}>
            <div className="dialog-card">
                <h3 className="mt-0">Add Product</h3>
                <div>
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
                    <button>close</button>
                    <button>Add New Product</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewProduct;
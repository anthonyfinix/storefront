const AddNewProductCategory = ({
    newProductCategory,
    handleProductCategoryChange,
    toggleDialog,
    createNewProductCategory
}) => {
    return (
        <>
            <h3 className="mt-0">Add Product Category</h3>
            <div className="input-main-wrapper product-input-main-wrapper">
                <div className="mr-2">
                    <div className="input-wrapper">
                        <label>Name</label>
                        <input type="text" onChange={handleProductCategoryChange} value={newProductCategory.productName} name="name" />
                    </div>
                </div>
            </div>
            <div>
                <button onClick={toggleDialog}>Close</button>
                <button onClick={createNewProductCategory}>Add New Product Category</button>
            </div>
        </>
    )
}


export default AddNewProductCategory;
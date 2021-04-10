import React from 'react';
import Table from './table';
import './productCategory.css';
import Dialog from '../util/dialog';
import { ContentContext } from '../contentProvider';
import AddNewProductCategory from './addNewProductCategory';
import createProductCategory from './api/createProductCategory';

const ProductCategory = () => {
    let { productCategory } = React.useContext(ContentContext);
    // new product category states
    const [newProductCategory, setNewProductCategory] = React.useState({ name: "" })
    const handleProductCategoryChange = (event) => {
        let name = event.currentTarget.getAttribute('name');
        let value = event.currentTarget.value;
        switch (name) {
            case 'name':
                setNewProductCategory({ name: value })
                break;
            default:
                break;
        }
    }
    // dialog states and functions
    const [addNewDialogState, setAddNewDialogState] = React.useState(false);
    const hideAddNewDialogState = () => setAddNewDialogState(false);
    const showAddNewDialogState = () => setAddNewDialogState(true);
    const toggleAddNewDialogState = () => setAddNewDialogState(!addNewDialogState);
    const handleAddNewProductCategory = () => {
        createProductCategory(newProductCategory)
            .then(response => {
                console.log('test');
                let { error, result } = response;
                if (result) {
                    hideAddNewDialogState();
                    setNewProductCategory('');
                    productCategory.refresh();
                }
            })
    }
    return (
        <article className="entity-wrapper" id="product-wrapper">
            <div className="entity-header" id="product-header">
                <h3>Product Category</h3>
                <button onClick={showAddNewDialogState}>Add</button>
            </div>
            <div className="entity-content" id="table-wrapper">
                <Table data={productCategory.productCategories} />
            </div>
            <Dialog toggleDialog={toggleAddNewDialogState} show={addNewDialogState}>
                <AddNewProductCategory
                    newProductCategory={newProductCategory}
                    handleProductCategoryChange={handleProductCategoryChange}
                    toggleDialog={toggleAddNewDialogState}
                    createNewProductCategory={handleAddNewProductCategory}
                />
            </Dialog>
            <button onClick={productCategory.productCategoriesNextPage}>Load More</button>
        </article>
    )
}
export default ProductCategory;
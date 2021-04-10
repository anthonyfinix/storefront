import React from 'react';
import './supplier.css';
import Table from './table';
import Dialog from '../util/dialog';
import { ContentContext } from '../contentProvider';
import AddNewSupplier from './addNewSupplier'

const Supplier = () => {
    const { supplier } = React.useContext(ContentContext);
    const [newSupplier, setNewSupplier] = React.useState({
        company_name: "",
        name: {
            first_name: "",
            middle_name: "",
            last_name: "",
        },
        contact_details: {
            primary_number: null,
            email: "",
            address: {
                full: "",
                city: "",
                state: "",
                pincode: ""
            }
        }
    });

    

    // dialog states and functions
    const [addNewDialogState, setAddNewDialogState] = React.useState(false);
    const hideAddNewDialogState = () => setAddNewDialogState(false);
    const showAddNewDialogState = () => setAddNewDialogState(true);
    const toggleAddNewDialogState = () => setAddNewDialogState(!addNewDialogState);
    // const handleNewSupplierChange = () => createSupplier();
    return (
        <article className="entity-wrapper" id="product-wrapper">
            <div className="entity-header" id="product-header">
                <h3>Supplier</h3>
                <button>Add</button>
            </div>
            <div className="entity-content" id="table-wrapper">
                <Table data={supplier.suppliers} />
            </div>
            <Dialog toggleDialog={toggleAddNewDialogState} show={addNewDialogState}>
                <AddNewSupplier
                    newSupplier={newSupplier}
                    handleNewSupplierChange={handleNewSupplierChange}
                    toggleDialog={toggleAddNewDialogState}
                    createNewSupplier={handleAddNewSupplier}
                />
            </Dialog>
            <button onClick={supplier.supplierNextPage}>Load more</button>
        </article>
    )
}
export default Supplier;
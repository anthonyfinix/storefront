import React from 'react';
import './supplier.css';
import Table from './table';
import Dialog from '../util/dialog';
import { ContentContext } from '../contentProvider';
import AddNewSupplier from './addNewSupplier'
import newSupplierStateUpdater from './newSupplierStateUpdater';
import createSupplier from './api/createSupplier';
import deleteSupplier from './api/deleteSupplier';

const Supplier = () => {
    const { supplier } = React.useContext(ContentContext);
    const [newSupplier, setNewSupplier] = React.useState({
        id: "",
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
    const toggleAddNewDialogState = () => {
        setAddNewDialogState(!addNewDialogState)
    };
    const handleNewSupplierChange = (e) => setNewSupplier({
        ...newSupplierStateUpdater(e, newSupplier)
    })
    const handleEditProductClick = (id) => {
        for (let item of supplier.suppliers) {
            if (item._id == id) {
                setNewSupplier({
                    id: item._id,
                    company_name: item.company_name,
                    name: item.name,
                    contact_details: item.contact_details
                })
                toggleAddNewDialogState();
                break;
            }
        }
    }
    const handleDeleteSupplierClick = (id) => {
        deleteSupplier({id})
            .then(response => {
                console.log(response)
                let { error, result } = response;
                if (!error) supplier.refreshSupplier();
            })
    }
    const handleAddNewSupplier = () => {
        createSupplier(newSupplier)
            .then(response => {
                console.log(response);
                let { error, result } = response;
                if (!error) {
                    supplier.refreshSupplier()
                        .then(() => hideAddNewDialogState());
                }
            })
    }
    return (
        <article className="entity-wrapper" id="product-wrapper">
            <div className="entity-header" id="product-header">
                <h3>Supplier</h3>
                <button onClick={showAddNewDialogState}>Add</button>
            </div>
            <div className="entity-content" id="table-wrapper">
                <Table
                    data={supplier.suppliers}
                    editSupplier={handleEditProductClick}
                    deleteSupplier={handleDeleteSupplierClick}
                />
            </div>
            <Dialog toggleDialog={toggleAddNewDialogState} show={addNewDialogState}
            >
                <AddNewSupplier
                    newSupplier={newSupplier}
                    handleNewSupplierChange={handleNewSupplierChange}
                    toggleDialog={toggleAddNewDialogState}
                    createNewSupplier={handleAddNewSupplier}
                    hideAddNewDialogState={hideAddNewDialogState}
                    handleAddNewSupplier={handleAddNewSupplier}
                />
            </Dialog>
            <button onClick={supplier.supplierNextPage}>Load more</button>
        </article>
    )
}
export default Supplier;
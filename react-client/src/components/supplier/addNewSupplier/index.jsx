const AddNewSupplier = ({
    newSupplier,
    handleNewSupplierChange,
    hideAddNewDialogState,
    handleAddNewSupplier
}) => {
    return (
        <>
            <h3 className="mt-0">Add Supplier</h3>
            <div className="input-main-wrapper supplier-main-wrapper">
                <div className="mr-2">
                    <div className="input-wrapper">
                        <label>Company Name</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSupplier.company_name} name="company_name" />
                    </div>
                    <div className="input-wrapper">
                        <label>First Name</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSupplier.name.first_name} name="first_name" />
                    </div>
                    <div className="input-wrapper">
                        <label>Middle Name</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSupplier.name.middle_name} name="middle_name" />
                    </div>
                    <div className="input-wrapper">
                        <label>Last Name</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSupplier.name.last_name} name="last_name" />
                    </div>
                    <div className="input-wrapper">
                        <label>Primary Number</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSupplier.contact_details.primary_number} name="primary_number" />
                    </div>
                    <div className="input-wrapper">
                        <label>Email</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSupplier.contact_details.email} name="email" />
                    </div>
                    <div className="input-wrapper">
                        <label>Full Address</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSupplier.contact_details.address.full} name="full" />
                    </div>
                    <div className="input-wrapper">
                        <label>City</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSupplier.contact_details.address.city} name="city" />
                    </div>
                    <div className="input-wrapper">
                        <label>State</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSupplier.contact_details.address.state} name="state" />
                    </div>
                    <div className="input-wrapper">
                        <label>pincode</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSupplier.contact_details.address.pincode} name="pincode" />
                    </div>
                </div>
            </div>
            <div>
                <button onClick={hideAddNewDialogState}>Close</button>
                <button onClick={handleAddNewSupplier}>{newSupplier.id ? "Update Supplier":"Add New Supplier"}</button>
            </div>
        </>
    )
}

export default AddNewSupplier;
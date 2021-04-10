const AddNewSupplier = ({
    newSuppliers,
    toggleDialog,
    createNewSupplier,
    handleNewSupplierChange
}) => {
    return (
        <>
            <h3 className="mt-0">Add Supplier</h3>
            <div className="input-main-wrapper supplier-main-wrapper">
                <div className="mr-2">
                    <div className="input-wrapper">
                        <label>Company Name</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSuppliers.company_name} name="name" />
                    </div>
                    <div className="input-wrapper">
                        <label>First Name</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSuppliers.name.first_name} name="first name" />
                    </div>
                    <div className="input-wrapper">
                        <label>Middle Name</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSuppliers.name.middle_name} name="middle name" />
                    </div>
                    <div className="input-wrapper">
                        <label>Last Name</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSuppliers.name.last_name} name="last name" />
                    </div>
                    <div className="input-wrapper">
                        <label>Primary Number</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSuppliers.contact_details.primary_number} name="primary number" />
                    </div>
                    <div className="input-wrapper">
                        <label>Email</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSuppliers.contact_details.email} name="email" />
                    </div>
                    <div className="input-wrapper">
                        <label>Full Address</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSuppliers.contact_details.full} name="email" />
                    </div>
                    <div className="input-wrapper">
                        <label>City</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSuppliers.contact_details.address.city} name="city" />
                    </div>
                    <div className="input-wrapper">
                        <label>State</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSuppliers.contact_details.address.state} name="state" />
                    </div>
                    <div className="input-wrapper">
                        <label>pincode</label>
                        <input type="text" onChange={handleNewSupplierChange} value={newSuppliers.contact_details.address.pincode} name="pincode" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewSupplier;
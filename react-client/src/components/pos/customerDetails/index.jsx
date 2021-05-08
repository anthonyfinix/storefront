const CustomerDetails = ({ customerDetails,handleInputChange }) => {
    return (
        <div className="customer-details-wrapper">
            <div>
                <h3>Customer Details</h3>
                <div style={{ display: "flex" }}>
                    <div>
                        <input type="text"
                            value={customerDetails.name.first_name}
                            name="first_name"
                            onChange={handleInputChange}
                            placeholder="First Name"/>
                    </div>
                    <div>
                        <input
                            value={customerDetails.name.middle_name}
                            onChange={handleInputChange}
                            name="middle_name"
                            type="text"
                            placeholder="Middle Name" />
                    </div>
                    <div>
                        <input
                            value={customerDetails.name.last_name}
                            onChange={handleInputChange}
                            name="last_name"
                            type="text"
                            placeholder="Last Name" />
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        <div>
                            <input
                            value={customerDetails.contact_details.primary_number}
                            onChange={handleInputChange}
                            name="primary_number"
                            type="text"
                            placeholder="Primary Number" />
                        </div>
                        <div>
                            <input
                            value={customerDetails.contact_details.secondary_number}
                            onChange={handleInputChange}
                            name="secondary_number"
                            type="text"
                            placeholder="Secondary Number" />
                        </div>
                        <div>
                            <input
                            name="email"
                            onChange={handleInputChange}
                            value={customerDetails.contact_details.email}
                            type="text"
                            placeholder="Email Address" />
                        </div>
                        <div>
                            <input
                            name="state"
                            onChange={handleInputChange}
                            value={customerDetails.contact_details.address.state}
                            type="text" placeholder="City" />
                        </div>
                        <div>
                            <input
                            name="city"
                            onChange={handleInputChange}
                            value={customerDetails.contact_details.address.city}
                            type="text" placeholder="State" />
                        </div>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                        <textarea
                            name="full"
                            onChange={handleInputChange}
                            value={customerDetails.contact_details.address.full}
                            style={{ width: "100%", height: "100%" }}
                            name="full"
                            placeholder="Address"
                            id=""></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerDetails
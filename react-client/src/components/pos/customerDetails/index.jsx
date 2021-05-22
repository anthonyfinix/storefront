import React from 'react';
import style from './customer-details.module.css';
import Dropdown from '../../util/dropdown';
import {MdEdit} from 'react-icons/md'
const CustomerDetails = ({
    customerDetails,
    handleInputChange,
    customerNameSearchHandle,
    hideDropdown,
    showDropdown,
    customerSearchResult,
    setCustomer
}) => {
    const firstNameElement = React.useRef();
    return (
        <div className="customer-details-wrapper">
            <h3>Customer Details</h3>
            <div className={style.name_wrapper}>
                <h3 className={style.customer_name}>Anthony Finix</h3>
                <MdEdit/>
            </div>
            {/* <div>
                <h3>Customer Details</h3>
                <div style={{ display: "flex" }}>
                    <div>
                        <input
                            ref={firstNameElement}
                            type="text"
                            value={customerDetails.name.first_name}
                            name="first_name"
                            onChange={(e) => { handleInputChange(e); customerNameSearchHandle(e) }}
                            placeholder="First Name"
                        />
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
                    <Dropdown show={showDropdown} close={hideDropdown} el={firstNameElement} >
                        {customerSearchResult.map(customer => {
                            console.log(customer);
                            return (<p onClick={(e)=>setCustomer(customer)}>{`${customer.name.first_name} ${customer.name.middle_name?customer.name.middle_name:""} ${customer.name.last_name}`}</p>)
                        })}
                    </Dropdown>
                </div>
            </div> */}
        </div>
    )
}
export default CustomerDetails
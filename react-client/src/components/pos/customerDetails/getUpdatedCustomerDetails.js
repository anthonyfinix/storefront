module.exports = (e, oldCustomerDetails) => {
  let newCustomerDetails = oldCustomerDetails;
  let name = e.currentTarget.getAttribute("name");
  let value = e.currentTarget.value;
  switch (name) {
    case "first_name":
      newCustomerDetails.name.first_name = value;
      break;
    case "middle_name":
      newCustomerDetails.name.middle_name = value;
      break;
    case "last_name":
      newCustomerDetails.name.last_name = value;
      break;
    case "primary_number":
      newCustomerDetails.contact_details.primary_number = value;
      break;
    case "secondary_number":
      newCustomerDetails.contact_details.secondary_number = value;
      break;
    case "mobile_number":
      newCustomerDetails.contact_details.mobile_number = value;
      break;
    case "email":
      newCustomerDetails.contact_details.email = value;
      break;
    case "full":
      newCustomerDetails.contact_details.address.full = value;
      break;
    case "city":
      newCustomerDetails.contact_details.address.city = value;
      break;
    case "state":
      newCustomerDetails.contact_details.address.state = value;
      break;

    default:
      break;
  }
  return newCustomerDetails;
};

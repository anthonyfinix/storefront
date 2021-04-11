const newSupplierStateUpdater = (e, currentState) => {
  let name = e.currentTarget.getAttribute("name");
  let value = e.currentTarget.value;
  let newSupplier = currentState;
  switch (name) {
    case "company_name":
      newSupplier.company_name = value;
      break;
    case "first_name":
      newSupplier.name.first_name = value;
      break;
    case "middle_name":
      newSupplier.name.middle_name = value;
      break;
    case "last_name":
      newSupplier.name.last_name = value;
      break;
    case "primary_number":
      newSupplier.contact_details.primary_number = value;
      break;
    case "email":
      newSupplier.contact_details.email = value;
      break;
    case "full":
      newSupplier.contact_details.address.full = value;
      break;
    case "city":
      newSupplier.contact_details.address.city = value;
      break;
    case "state":
      newSupplier.contact_details.address.state = value;
      break;
    case "pincode":
      newSupplier.contact_details.address.pincode = value;
      break;
    default:
      break;
  }
  return newSupplier;
};

export default newSupplierStateUpdater;
const getUpdatedProductState = (e, currentState) => {
  console.log(e)
  console.log(currentState)
  let latestState = currentState;
  let element = e.currentElement;
  switch (element.getAttribute("name")) {
    case "name":
      latestState.name = element.currentElement.value;
      break;
    case "sku":
      latestState.sku = element.currentElement.value;
      break;
    case "manufacturer":
      latestState.manufacturer = element.currentElement.value;
      break;
    case "brand":
      latestState.brand = element.currentElement.value;
      break;
    case "sale_price":
      latestState.sale_price = element.currentElement.value;
      break;
    case "current_price":
      latestState.current_price = element.currentElement.value;
      break;
    case "buying_price":
      latestState.buying_price = element.currentElement.value;
      break;
    case "width":
      latestState.dimension.width = element.currentElement.value;
      break;
    case "height":
      latestState.dimension.height = element.currentElement.value;
      break;
    case "length":
      latestState.dimension.length = element.currentElement.value;
      break;
    case "weight":
      latestState.dimension.weight = element.currentElement.value;
      break;
  }
  return latestState;
};

export default getUpdatedProductState;

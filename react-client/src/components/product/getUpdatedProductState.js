const getUpdatedProductState = (element, currentState) => {
    let latestState = currentState;
    switch (element.getAttribute("name")) {
        case "name":
            latestState.productName = element.value;
            break;
        case "sku":
            latestState.productSKU = element.value;
            break;
        case "manufacturer":
            latestState.productManufacturer = element.value;
            break;
        case "brand":
            latestState.productBrand = element.value;
            break;
        case "sale_price":
            latestState.productSalePrice = element.value;
            break;
        case "current_price":
            latestState.productCurrentPrice = element.value;
            break;
        case "buying_price":
            latestState.productBuyingPrice = element.value;
            break;
        case "width":
            latestState.dimension.width = element.value;
            break;
        case "height":
            latestState.dimension.height = element.value;
            break;
        case "length":
            latestState.dimension.length = element.value;
            break;
        case "weight":
            latestState.dimension.weight = element.value;
            break;
    }
    return latestState;
};

export default getUpdatedProductState;
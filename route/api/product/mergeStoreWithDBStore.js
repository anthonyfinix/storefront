module.exports = (dbStores, requestStores) => {
  let mergedStore = [];
  requestStores.forEach((element, i) => {
    if (requestStores[i]["id"] == dbStores[i]["_id"]) {
      mergedStore.push({
        id: requestStores[i]["id"],
        name: dbStores[i]["name"],
        stock: {
          ...requestStores[i]["stock"]
        }
      });
    }
  });
  return mergedStore;
};

module.exports = (dbSuppliers, requestSuppliers) => {
    let mergedStore = [];
    requestSuppliers.forEach((element, i) => {
      if (requestSuppliers[i]["id"] == dbSuppliers[i]["_id"]) {
        mergedStore.push({
          id: requestSuppliers[i]["id"],
          name: dbSuppliers[i]["name"],
          stock: {
            ...requestSuppliers[i]["stock"]
          }
        });
      }
    });
    return mergedStore;
  };
  
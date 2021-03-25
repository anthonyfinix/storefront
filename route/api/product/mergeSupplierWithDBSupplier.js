module.exports = (dbSuppliers, requestSuppliers) => {
    let mergedStore = [];
    requestSuppliers.forEach((element, i) => {
      if (requestSuppliers[i]["id"] == dbSuppliers[i]["_id"]) {
        mergedStore.push({
          id: requestSuppliers[i]["id"],
          company_name: dbSuppliers[i]["company_name"],
          stock: {
            ...requestSuppliers[i]["stock"]
          }
        });
      }
    });
    return mergedStore;
  };
  
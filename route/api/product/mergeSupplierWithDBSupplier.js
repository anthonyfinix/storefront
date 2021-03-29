module.exports = (dbSuppliers, requestSuppliers) => {
  let mergedStore = [];

  dbSuppliers.forEach((element, i) => {
    if (element._id === requestSuppliers[i].id) {
      mergedStore.push({
        id: element._id,
        company_name: element.company_name,
      });
    }
  });
  return mergedStore;
  
};

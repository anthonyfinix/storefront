module.exports = (dbSuppliers, suppliers) => {

  let mergedStore = [];
  for (let i = 0; i < suppliers.length; i++) {
    for (let j = 0; j < dbSuppliers.length; j++) {
      if (dbSuppliers[i]["_id"] == suppliers[j]["id"]) {
        mergedStore.push({
          id: suppliers[j]["id"],
          company_name: dbSuppliers[j]["name"],
        });
      }
    }
  }
  return mergedStore;
};

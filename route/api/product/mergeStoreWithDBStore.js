module.exports = (dbStores, stores) => {
  let mergedStore = [];
  for (let i = 0; i < stores.length; i++) {
    for (let j = 0; j < dbStores.length; j++) {
      if (dbStores[i]["_id"] == stores[j]["id"]) {
        mergedStore.push({
          id: dbStores[j]["id"],
          name: dbStores[j]["name"],
          stock: { ...stores[j]["stock"] },
        });
      }
    }
  }
  return mergedStore;
};

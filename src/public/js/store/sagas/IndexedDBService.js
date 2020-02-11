export default class IndexedDBService {
  constructor(localForage) {
    this.localForage = localForage;
  }

  getData = async itemName => {
    return this.localForage.getItem(itemName);
  };

  saveData = async (itemName, item) => {
    await this.localForage.setItem(itemName, item);
  };
}

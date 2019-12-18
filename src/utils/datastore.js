import { AsyncStorage } from "react-native";
class Datastore {
  async writeItem(key, value) {
    let data = JSON.stringify(value);
    return await AsyncStorage.setItem(key, data);
  }
  async readItem(key) {
    let value = await AsyncStorage.getItem(key);
    if (value != null) {
      return JSON.parse(value);
    }
  }
  async deleteItem(key) {
    return await AsyncStorage.removeItem(key);
  }
}
export default new Datastore();

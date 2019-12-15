import {AsyncStorage} from 'react-native'
class Datastore{
async writeItem(key,value){return await AsyncStorage.setItem(key,value)}
async readItem(key){return await AsyncStorage.getItem(key)}
async deleteItem(key){return await AsyncStorage.removeItem(key)}}
export default new Datastore()
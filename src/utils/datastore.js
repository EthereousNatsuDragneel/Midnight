import {AsyncStorage} from 'react-native'
class Datastore{
async writeItem(key,value){await AsyncStorage.setItem(key,value)}
async readItem(key){await AsyncStorage.getItem(key)}
async deleteItem(key){await AsyncStorage.removeItem(key)}}
export default new Datastore()
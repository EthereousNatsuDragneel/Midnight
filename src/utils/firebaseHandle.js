import firebase from "firebase";
import 'firebase/firestore'
import firebaseConfig from "../../config";
class firebaseHandle{
init(){firebase.initializeApp(firebaseConfig);}
getDBInstance(path){return firebase.firestore().collection(path)}
getInstance(){return firebase;}}
export default new firebaseHandle();
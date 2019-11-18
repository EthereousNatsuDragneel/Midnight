import firebase from "firebase";
import firebaseConfig from "../../config";
class firebaseHandle {
  init() {
    firebase.initializeApp(firebaseConfig);
  }
  getInstance() {
    return firebase;
  }
}
export default new firebaseHandle();

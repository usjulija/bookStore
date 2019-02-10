import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDWJRHyYn1RN054NfgNQ1FdUiPtoiQh4DQ",
  authDomain: "book-store-58b05.firebaseapp.com",
  databaseURL: "https://book-store-58b05.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

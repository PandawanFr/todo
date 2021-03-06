import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyA4gfEI7TAyHtwFYVZ_VRt-KJ9h6Re8Kks',
  authDomain: 'todo-a13ca.firebaseapp.com',
  databaseURL: 'https://todo-a13ca.firebaseio.com',
  projectId: 'todo-a13ca',
  storageBucket: 'todo-a13ca.appspot.com',
  messagingSenderId: '607629250598',
});

/* Firestore Setup */
firebase.firestore().settings({ timestampsInSnapshots: true });

const firestore = firebase.firestore().enablePersistence()
  .then(() => firebase.firestore())
  .catch(() => firebase.firestore());

/* Authentication Setup */
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;

export {
  firebase,
  firestore,
  auth,
  provider,
};

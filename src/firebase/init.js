import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCjI0vmb09jfK0KOXQZZCEJdeq4Jf5Rauo",
  authDomain: "chat-app-528de.firebaseapp.com",
  databaseURL: "https://chat-app-528de.firebaseio.com",
  projectId: "chat-app-528de",
  storageBucket: "chat-app-528de.appspot.com",
  messagingSenderId: "241293727766",
  appId: "1:241293727766:web:f06d92b3c218dac0623d37"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()

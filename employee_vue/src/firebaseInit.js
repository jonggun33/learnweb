import firebase from "firebase";

var firebaseConfig = {
apiKey: "AIzaSyBMfhtouMQRLAB2iX9Am41IhUTuWqs82t4",
authDomain: "inventoryg-218113.firebaseapp.com",
databaseURL: "https://inventoryg-218113.firebaseio.com",
projectId: "inventoryg-218113",
storageBucket: "inventoryg-218113.appspot.com",
messagingSenderId: "269726295593",
appId: "1:269726295593:web:6d4184fa25498d7ca59e38",
measurementId: "G-L5EDYCLH19"
};
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  export default firebase.initializeApp(firebaseConfig);
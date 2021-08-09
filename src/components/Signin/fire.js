import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAuQ6S7t1E8HUcL81lNiQaNwI3_9HA6SwY",
    authDomain: "oval-bricolage-306607.firebaseapp.com",
    projectId: "oval-bricolage-306607",
    storageBucket: "oval-bricolage-306607.appspot.com",
    messagingSenderId: "877710601676",
    appId: "1:877710601676:web:28132b248782145c8c8169",
    measurementId: "G-KXKM2X5Q27"
};

const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
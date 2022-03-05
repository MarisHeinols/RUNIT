// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey:
		"AIzaSyDSO4zbQpWYN1Lpj-SC-QioXpP07ZkUZ5A",
	authDomain: "runit-d0707.firebaseapp.com",
	projectId: "runit-d0707",
	storageBucket: "runit-d0707.appspot.com",
	messagingSenderId: "959369677910",
	appId:
		"1:959369677910:web:bfb8eefc60fdce4c973ff7",
	measurementId: "G-LNT6EL9VDZ",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const auth = firebase.auth();

export { auth };

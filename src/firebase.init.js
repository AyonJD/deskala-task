import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDuCPZn6TV8Nu4y9VIE7K6QltlbPd7cFBQ",
//     authDomain: "deskala-task.firebaseapp.com",
//     projectId: "deskala-task",
//     storageBucket: "deskala-task.appspot.com",
//     messagingSenderId: "785579418984",
//     appId: "1:785579418984:web:a307580ff836e705d5a2dd"
// };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
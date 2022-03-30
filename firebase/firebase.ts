import { GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfwl3ZDYZgo4-i17u2FDox81hKrFQWcpM",
  authDomain: "vue-calendar-d3c6b.firebaseapp.com",
  databaseURL: "https://vue-calendar-d3c6b-default-rtdb.firebaseio.com",
  projectId: "vue-calendar-d3c6b",
  storageBucket: "vue-calendar-d3c6b.appspot.com",
  messagingSenderId: "778154478437",
  appId: "1:778154478437:web:5efa8076c38d7607a46f8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const LoginWithGoogle = () => {
  try {
    if (auth) {
      signInWithPopup(auth, provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { app, auth, provider, LoginWithGoogle };

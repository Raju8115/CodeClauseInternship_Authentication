import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,FacebookAuthProvider, GithubAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDV_B5NdV7dYqJi5pu-bR4QfrPihDlzIpM",
  authDomain: "intern-project-233da.firebaseapp.com",
  projectId: "intern-project-233da",
  storageBucket: "intern-project-233da.appspot.com",
  messagingSenderId: "1072225205465",
  appId: "1:1072225205465:web:734c94e2c9a967dd1552c8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const FaceBookProvider = new FacebookAuthProvider();

const GithubProvider = new GithubAuthProvider();


export {auth,provider}
export {FaceBookProvider}
export {GithubProvider}


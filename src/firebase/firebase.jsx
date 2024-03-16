import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBddsiRInVspsp9DYJAA3sMgZMqdkmR95Y",
  authDomain: "todo-9fcc8.firebaseapp.com",
  projectId: "todo-9fcc8",
  storageBucket: "todo-9fcc8.appspot.com",
  messagingSenderId: "3032647725",
  appId: "1:3032647725:web:c78112993023ac58a910a4",
  measurementId: "G-QW4QXNXC47"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app 
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDlR0drAOx_DfkQzAIj1JJWi9Uf5_yX1YE",
  authDomain: "health-d9186.firebaseapp.com",
  projectId: "health-d9186",
  storageBucket: "health-d9186.appspot.com",
  messagingSenderId: "873978215297",
  appId: "1:873978215297:web:79a7fdef6996fe1d29c680",
  measurementId: "G-43FSP7T3R3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); 

export { auth, database };
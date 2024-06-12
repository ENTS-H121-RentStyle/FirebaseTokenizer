// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Firebase Configuration (replace with your Firebase project config)
const firebaseConfig = {
  apiKey: "AIzaSyA3kjrd25HuohXgtzQElVrcohXNs-MjhGg",
  authDomain: "rentstyle.firebaseapp.com",
  projectId: "rentstyle",
  storageBucket: "rentstyle.appspot.com",
  messagingSenderId: "91324532145",
  appId: "1:91324532145:web:67f2c646fe444de419a990",
  measurementId: "G-LGV3NQ3JRM"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Example usage
const email = 'dhyoga@gmail.com';
const password = 'password123';

const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then(async (userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     console.log('User registered:', user.email);
//   })
//   .catch((error) => {
//     console.error('Error registering user:', error.message);
//   });

signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
    // Signed in 
        const user = userCredential.user;
        try {
            const idToken = await user.getIdToken();
            console.log('ID Token:', idToken);
        } catch (tokenError) {
            console.error('Error getting ID token:', tokenError.message);
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
});

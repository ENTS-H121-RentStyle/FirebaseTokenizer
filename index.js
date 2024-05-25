// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Firebase Configuration (replace with your Firebase project config)
const firebaseConfig = {
    apiKey: "AIzaSyCvWW1TV20kk9dH_tnOnUblt_vpu7Z_-CQ",
    authDomain: "happy-5c75b.firebaseapp.com",
    projectId: "happy-5c75b",
    storageBucket: "happy-5c75b.appspot.com",
    messagingSenderId: "1061807532524",
    appId: "1:1061807532524:web:7f71e89b2ab3b4aa23b8c9",
    measurementId: "G-4LESK4N3H3"
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

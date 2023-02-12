import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCPVkFDCe2KdyzFDtRykW-IqXU2fsnCwdA",
    authDomain: "capstone-thieves.firebaseapp.com",
    projectId: "capstone-thieves",
    storageBucket: "capstone-thieves.appspot.com",
    messagingSenderId: "608947596137",
    appId: "1:608947596137:web:3e9bd0aca5167fa6c7abf8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => {
    return (
        signInWithPopup(auth, provider)
    )
}

export const db = getFirestore()

export const createUserDocument = async (user, signUpName=null) => {
    console.log(user.uid)
    const userDocRef = doc(db, 'users', user.uid)
    
    const userData = await getDoc(userDocRef)
    console.log(userData.exists())

    if(!userData.exists()) {
        const { displayName, email } = user
        const createdDate = new Date();
        try {
            if (!signUpName) {
                await setDoc(userDocRef, {
                    displayName, 
                    email, 
                    createdDate
                })
            } else {
                await setDoc(userDocRef, {
                    displayName: signUpName, 
                    email, 
                    createdDate,
                })
            }
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef
}

export const createSignup = async (email, password) => {
    if(email && password) {
        return await createUserWithEmailAndPassword(auth, email, password)
    }
}


export const firebaseAuth = getAuth(app);
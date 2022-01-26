import initializeAuth from "./firebase.init"
import { getAuth,FacebookAuthProvider,createUserWithEmailAndPassword, signOut,onAuthStateChanged, signInWithPopup,GoogleAuthProvider,updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
initializeAuth();
const useFirebase=()=>{
    const [user,setUser]=useState('')
    const auth = getAuth();

    const loginGoogle=()=>{
       return signInWithPopup(auth, googleProvider)
    }
     
    const loginFacebook=()=>{
       return signInWithPopup(auth, facebookProvider)
  
    }

    const signUpEmail=(email,password,name)=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
      updateName(name)
  })
    }
    
    const signInEmail=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
  setUser(result.user) 
  })
    }

    const updateName=(name)=>{
        updateProfile(auth.currentUser, {
            displayName:name
          }).then((result) => {
          })
    }
    const logout=()=>{
        signOut(auth).then(() => {
            setUser('')
          }).catch((error) => {
            
          });
    }
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
        }
      });
   },[])
    return {
        user,
        loginGoogle,
        loginFacebook,
        logout,
        signUpEmail,
        signInEmail,
        updateName
    }
}

export default useFirebase
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,GoogleAuthProvider, getAuth,signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
 const providerGoogle = new GoogleAuthProvider();
 const providerGithub = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInGoogle = () =>{
         return signInWithPopup(auth, providerGoogle);
    }

    const signInGithub = () =>{
        return signInWithPopup(auth, providerGithub);
    }
    // sign in email passs
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
               console.log('logged in user inside auth state observer', loggedUser);
               setUser(loggedUser);
               setLoading(false);
           })
           return () =>{
               unsubscribe();
           }
       }, [])

       const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
            signInGoogle,
            logOut,
            signInGithub,
            createUser,
            signIn,
            loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
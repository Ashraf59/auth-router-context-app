import React, { children, createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import App from '../firebase/firebase.confiq';

export const AuthContext = createContext();

const auth = getAuth(App)

const UserContext = ({children}) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);



    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth state changed', currentUser);
        }) 

        return() => {
            unsubscribe();
        }
    },[])
    const autoInfo = {user, loading, createUser, signIn, logOut, signInWithGoogle}
    return (
        <AuthContext.Provider value={autoInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.config'


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const GoogleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState([]);
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOUt = () => {
        return signOut(auth);
    }
    const updateUser = (userInfo) => {
        setLoader(true)
        return updateProfile(auth.currentUser, userInfo)
    }

    const GoogleSingIn = (Provider) => {
        return signInWithPopup(auth, Provider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        });
        return () => unSubscribe();

    }, [])

    const authInfo = { user, createUser, singIn, LogOUt, updateUser, GoogleSingIn, loader }
    return (
        <AuthContext.Provider value={authInfo}>
            return {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
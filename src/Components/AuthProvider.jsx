/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useRef, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import app from '../firebase.config';
import { Navigate, useNavigate } from 'react-router-dom';

const auth = getAuth(app);
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const ref = useRef(null)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState(false)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleScroll = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider)
    }
    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser)
            setLoading(false)
        });

        return () => {
            return unsubscribe()
        }
    }, [])

    const toggleTheme = ()=>{
        setTheme(!theme)
    }

    const userInfo = {
        createUser,
        loginUser,
        user,
        auth,
        logOut,
        loading,
        ref,
        handleScroll,
        googleLogin,
        gitHubLogin,
        passwordReset,
        toggleTheme,
        theme,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
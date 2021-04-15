import React from 'react';
import './Login.css';
import google_icon from '../../image/google.png';
import {
    firebaseInitialize,
    googleProvider,
    signInWithSocialPopup,
} from '../Firebase/Firebase';

firebaseInitialize();

const Login = () => {
    const handleLogin = () => {
        signInWithSocialPopup(googleProvider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="login container">
            <div className="login-container">
                <button className="btn login-btn" onClick={handleLogin}>
                    <img src={google_icon} alt="google_icon" />
                    <span>Sign in with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;

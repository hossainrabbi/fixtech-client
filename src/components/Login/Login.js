import React from 'react';
import './Login.css';
import google_icon from '../../image/google.png';

const Login = () => {
    return (
        <div className="login container">
            <div className="login-container">
                <button className="btn login-btn">
                    <img src={google_icon} alt="google_icon" />
                    <span>Sign in with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;

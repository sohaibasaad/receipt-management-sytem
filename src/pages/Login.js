
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './assets/css/Login.css'
import { useEffect } from "react";

function Login() {
    const navigate = useNavigate();
    let emailIsValidated = false;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [rememberMe, setRememberMe] = useState('');
    const [isPassword, setIsPassword] = useState('password');
    
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    useEffect(() => {
        if (storedUsername !== null && storedPassword !== null) {
            navigate('/home');
        }
        else {
            navigate('/');
        }
    }, []);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        isInputEmpty();
        validateEmail();
        if (password.length !== 0 && emailIsValidated === true) {
            if (rememberMe) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
            }
            navigate('/home');
        }
    }

    function isInputEmpty() {
        if (username.length === 0 && password.length === 0) {
            setEmailError('Email address field cannot be empty');
            setPasswordError('Password field cannot be empty');
            emailIsValidated = false;
            return emailIsValidated;
        }
        if (password.length === 0) {
            setPasswordError('Password field cannot be empty')
            return false;
        }

        else {
            setEmailError('');
            setPasswordError('')
            emailIsValidated = true;
            return emailIsValidated;
        }
    }

    function validateEmail() {
        if (username.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            setEmailError('');
            emailIsValidated = true;
            return emailIsValidated;
        }
        if (username.length === 0) {
            setEmailError('Email address field cannot be empty');
            emailIsValidated = false;
            return emailIsValidated;
        }
        else {
            setEmailError('Invalid email address');
            emailIsValidated = false;
            return emailIsValidated;
        }
    }

    const showPassword = (e) => {
        if(isPassword === "password"){
            setIsPassword('text');
            return;
        }
        else{
            setIsPassword('password');
        }
    }

    return (
        <div className='loginbg'>
            <div className="container">
                <div className="custom-form-main">
                    <form className="custom-form" onSubmit={handleLoginSubmit}>
                        <h4 className='main-heading'>login</h4>
                        <div className="mb-3">
                            <label htmlFor="txtEmail" className="form-label">Email Address</label>
                            <input type="email" className="form-control" onChange={(e) => setUsername(e.target.value)} placeholder="Enter Email" id="txtEmail" aria-describedby="emailHelp" />
                            <span className="input-error">{emailError}</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="txtPassword" className="form-label">Password</label>
                            <div className="password-field">
                                <input type={isPassword} className="form-control" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} id="txtPassword" />
                                <div onClick={showPassword}>
                                    {isPassword === "password" ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                                </div>
                            </div>
                            <span className="input-error">{passwordError}</span>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" onChange={(e) => setRememberMe(e.target.checked)} id="rememberInput" />
                            <label className="form-check-label" htmlFor="rememberInput">Remember Me</label>
                        </div>
                        {/* <Link to="/home" className="btn btn-primary custom-button">Login</Link> */}
                        <button type="submit" className="btn btn-primary custom-button" onClick={navigate('/home')}>Login</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login

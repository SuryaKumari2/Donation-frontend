

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = ({ onLogin }) => { 
    const [currState, setCurrState] = useState("Sign up");
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();

        if (currState === "Sign up" && !agreeToTerms) {
            toast.error('Please agree to the terms and privacy policy.');
            return;
        }

        try {
            setLoading(true); 
            const url = currState === "Sign up" ? '/auth/signup' : '/auth/signin';
            const method = 'POST';
            const body = currState === "Sign up"
                ? JSON.stringify({ username: userName, email, password })
                : JSON.stringify({ email, password });

            const response = await fetch(`https://donation-backend-d5or.onrender.com${url}`, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body
            });

            const data = await response.json();
            console.log('Response data:', data); 

            if (response.ok) {
                const successMessage = currState === "Sign up" ? 'Registration successful!' : 'Login successful!';
                toast.success(successMessage);
                console.log("Navigating to home..."); 
                onLogin(); 
                return navigate('/home');
            } else {
                toast.error(data.error || `${currState} failed. Please try again.`);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again later.');
        }
        finally {
            setLoading(false); 
        }
    };

    return (
        <div className='login'>
            <form onSubmit={submitHandler} className="login-form">
                <h2 style={{ textAlign: 'center' }}>{currState}</h2>

                {currState === "Sign up" && (
                    <input
                        type="text"
                        placeholder='Username'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="form-input"
                        required
                    />
                )}

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    className="form-input"
                    required
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    className="form-input"
                    required
                />

                <button type='submit'>
                    {currState === "Sign up" ? "Create an Account" : "Login"}
                </button>

                {currState === "Sign up" && (
                    <div className="login-term">
                        <input
                            type="checkbox"
                            checked={agreeToTerms}
                            onChange={() => setAgreeToTerms(!agreeToTerms)}
                        />
                        <p>Agree to the terms of use and privacy policy</p>
                    </div>
                )}

                <div className="login-toggle">
                    {currState === "Sign up" ? (
                        <p>
                            Already have an Account? <span onClick={() => setCurrState("Login")}>Login</span>
                        </p>
                    ) : (
                        <p>
                            Create an account. <span onClick={() => setCurrState("Sign up")}>Sign Up</span>
                        </p>
                    )}
                </div>

                <ToastContainer />
            </form>
        </div>
    );
};

export default Login;

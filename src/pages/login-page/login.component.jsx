import React, { useState } from 'react';
import './login.styles.scss';
import Navbar from '../../components/Navbar/Navbar.component';

import { AiOutlineMail, AiOutlineLogin } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { auth } from './../../firebase/firebase.utils';
import Swal from 'sweetalert2';
import Loader from 'react-loader-spinner';
import { forgotPassword } from './forgot-password';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setIsSigningIn(true);

            await auth.signInWithEmailAndPassword(email, password);

            setIsSigningIn(false);
            setEmailError("");
            setPasswordError("");

        } catch (error) {
            setIsSigningIn(false);
            if (error.code === 'auth/user-not-found'){
                setEmailError('User Not Found');

            } else if (error.code === 'auth/wrong-password') {
                setPasswordError('Incorrect Password');

            } else if (error.code === 'auth/network-request-failed'){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Network Error',
                    footer: 'Check your network connection'
                });

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: 'Try Again'
                })
            }
        }
    }

    return(
    <div className="login">
        <Navbar />
        <div className="login__box">
            <form onSubmit={handleSubmit} className="login__form">
                <h3 className="login__header">Log in</h3>
                <div className="login__form-group">
                    <AiOutlineMail className="login__icon" />
                    <input 
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className="login__input" type="email" 
                        name="login-email" id="login-email" 
                        placeholder="Email" required 
                    />
                    <p className="login__error-msg">{emailError}</p>
                </div>
                <div className="login__form-group">
                    <RiLockPasswordLine className="login__icon" />
                    <input 
                        onChange={e => setPassword(e.target.value)}
                        className="login__input" type="password" 
                        name="password" id="password" 
                        placeholder="Password" required 
                    />
                    <p className="login__error-msg">{passwordError}</p>
                </div>
                {
                    isSigningIn ?
                        <button className="login__submit" type="submit" style={{backgroundColor: '#2717d5', cursor: 'wait'}}>
                            <span>Wait</span>
                            <Loader className="login__submit-icon"
                                type="Circles"
                                color="#ffffff"
                                height={15}
                                width={15}
                            />
                        </button> :
                        <button className="login__submit" type="submit">
                            <span>Login</span>
                            <AiOutlineLogin />
                        </button>
                }
                
                <p onClick={()=> forgotPassword()} className="login__forgot-pass">Forgot password</p>
            </form>
            <div className="login__bg">
                <div className="login__bg-text">
                    <h3>LeadPreneuer</h3>
                    <p>Africa</p>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Login;
import React from 'react';
import './login.styles.scss';
import Navbar from '../../components/Navbar/Navbar.component';

import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

const Login = () => (
    <div className="login">
        <Navbar />
        <div className="login__box">
            <form className="login__form">
                <h3 className="login__header">Log in</h3>
                <div className="login__form-group">
                    <AiOutlineMail className="login__icon" />
                    <input className="login__input" type="text" name="login-email" id="login-email" placeholder="Email" />
                </div>
                <div className="login__form-group">
                    <RiLockPasswordLine className="login__icon" />
                    <input className="login__input" type="password" name="password" id="password" placeholder="Password" />
                </div>
                <button className="login__submit" type="submit">Login</button>
                <p className="login__forgot-pass">Forgot password</p>
            </form>
            <div className="login__bg">
                <div className="login__bg-text">
                    <h3>LeadPreneuer</h3>
                    <p>Africa</p>
                </div>
            </div>
        </div>
    </div>
);

export default Login;
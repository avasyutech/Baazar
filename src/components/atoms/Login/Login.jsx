import React, { useState } from "react";
import Button from '../Button/Button';
import usersData from '../../../json/users.json';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin, openLogin, setOpenLogin }) => {
    const navigate = useNavigate();

    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const loginAuthentication = (e) => {
        e.preventDefault();
        const user = usersData.find((user) => user.mobile === mobile && user.password === password);

        if (user) {
            onLogin(user);
        }
        else {
            alert('Invalid Details');
        }
    };

    return (
        <div className="login">
            <div className="login__form">
                <p className="body-xl-600">Sign in to your account</p>
                <div className="login__form-mobile">
                    <label htmlFor="mobile" className="body-small-400">Mobile</label>
                    <input type="text" id="mobile" className="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>
                <div className="login__form-password">
                    <div className="password-wrapper">
                        <label htmlFor="password" className="body-small-400">Password</label>
                        <p className="body-small-400" onClick={() => navigate("./password")}>Forget Password</p>
                    </div>
                    <input type="password" id="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button label="login" variant="primary"  labelLevel={7} onClick={loginAuthentication} />
            </div>
            <div className="login__create-account">
                <p className="body-small-400">Don't have account</p>
                <Button label="Create account" to={"/signup"} variant="secondary" labelLevel={7} onClick={() => setOpenLogin(!openLogin)} />
            </div>
        </div>
    );
}

export default Login;

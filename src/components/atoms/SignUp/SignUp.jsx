import React, { useState } from "react";
import Button from '../Button/Button';
import './SignUp.scss';
import { useNavigate } from 'react-router-dom';
import Backdrop from "../../../helpers/Backdrop/Backdrop";
import { ToastContainer, toast } from "react-toastify";

const SignUp = ({ }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        password: ''
    });

    const getInputData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const signUp = async () => {
        const response = await fetch('http://localhost:9000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            navigate('/');
        }
        else {
            toast.error("SignUp Failed. Please retry", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                style: {
                    color: "#757575",
                },
            });
        }
    };

    return (
        <Backdrop>
            <div className="signup">
                <div className="signup__form">
                    <p className="body-xl-600">Sign Up</p>
                    <div className="signup__form-name">
                        <label htmlFor="name" className="body-small-400">Name</label>
                        <input type="text" id="name" className="name" onChange={getInputData} />
                    </div>
                    <div className="signup__form-mobile">
                        <label htmlFor="mobile" className="body-small-400">Mobile</label>
                        <input type="text" id="mobile" className="mobile" onChange={getInputData} />
                    </div>
                    <div className="signup__form-password">
                        <label htmlFor="password" className="body-small-400">Password</label>
                        <input type="password" id="password" className="password" onChange={getInputData} />
                    </div>
                    <Button label="signup" variant="primary" labelLevel={7} onClick={signUp} />
                </div>
                <ToastContainer />
            </div>
        </Backdrop>
    );
}

export default SignUp;

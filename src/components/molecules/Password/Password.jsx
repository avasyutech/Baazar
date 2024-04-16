import React from "react";
import ForgetPassword from "../../atoms/ForgetPassword/ForgetPassword";
import ResetPassword from "../../atoms/ResetPassword/ResetPassword";
import Wrapper from "../../../helpers/Wrapper";
import "./Password.scss";

const Password = () => {
    return (
        <Wrapper>
            <div className="forget-password">
                <ForgetPassword />
            </div>
        </Wrapper>
    );
}

export default Password;

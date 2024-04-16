import React from "react";
import "./ResetPassword.scss";
import Button from "../Button/Button";

export default function ResetPassword() {
  return (
    <div className="reset">
      <span className="reset__pwd-label body-xl-600">reset password</span>
      <form className="reset__password">
        <div className="reset__password__type">
          <label className="password-label" for='password'>new password</label>
          <input className="password-input" type="password" placeholder="8+ characters" name='password'/>
          <img src='http://localhost:9000/icons/Eye-black.svg' alt="eye" />
        </div>
        <div className="reset__password__type">
          <label className="body-small-400" for='password'>confirm password</label>
          <input className="password-input" type="password" name='password'/>
          <img src='http://localhost:9000/icons/Eye-black.svg' alt="eye" />
        </div>
      </form>
      <Button label='Reset Password' redirect='#' size='auto' rightIcon='http://localhost:9000/icons/ArrowRight.svg'/>
    </div>
  );
}

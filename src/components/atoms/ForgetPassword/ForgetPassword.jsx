import React, { useState } from "react";
import "./ForgetPassword.scss";
import Wrapper from "../../../helpers/Wrapper";
import Button from "../Button/Button";
// const client = require("twilio")("AC1259143514a8e8a3293322b87b0edc11", "cfadbc622a45eae610d19697088877cd");
// const client = new Client("AC1259143514a8e8a3293322b87b0edc11", "cfadbc622a45eae610d19697088877cd");
// const client = new Twilio("AC1259143514a8e8a3293322b87b0edc11", "cfadbc622a45eae610d19697088877cd");

export default function ForgetPassword() {
  const [phoneNumber, setPhoneNumber] = useState("+916301655098");
  const [channel, setChannel] = useState('sms');
  const [verificationStatus, setVerificationStatus] = useState('');
  
  // async function twilioOTP(phoneNumber, channel) {
  //   try {
  //     const verification = await client.verify.v2.services(verifySid).verifications.create({
  //       to: phoneNumber,
  //       channel: channel
  //     });
  //     console.log(verification.status);
  //     return verification;
  //   }
  //   catch (error) {
  //     console.error("Error sending OTP:", error);
  //     throw error;
  //   }
  // }

  // const sendOTP = async () => {
  //   try {
  //     const verification = await twilioOTP(phoneNumber, channel);
  //     const verificationSid = verification.sid;
  //     setVerificationStatus('success');
  //   }
  //   catch (error) {
  //     console.error('Error sending OTP:', error);
  //     setVerificationStatus('fail');
  //   }
  // };

  // const verifyOTP = async (otpCode) => {
  //   try {
  //     const verificationCheck = await client.verify.v2.services(verifySid).verificationChecks.create({
  //       to: phoneNumber,
  //       code: otpCode
  //     });
  //     setVerificationStatus(verificationCheck.status);
  //   } 
  //   catch (error) {
  //     console.error('Error verifying OTP:', error);
  //     setVerificationStatus('fail');
  //   }
  // };

  return (
    <div className="forget">
      <div className="forget__text-blk">
        <span className="forget__text-blk__label body-xl-600">forget password</span>
        <p className="forget__text-blk__desc body-small-400">Enter the mobile phone number associated with your Bazaar account.</p>
      </div>
      <form className="forget__password">
        <div className="forget__password__type">
          <label className="forget__mobile-label body-small-400" htmlFor="mobile">Mobile</label>
          <input
            className="forget__password-input"
            type="text"
            name="mobile"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </form>
      <Button label="send code" redirect="#" size="auto" rightIcon="http://localhost:9000/icons/ArrowRight.svg" onClick={""} />
      {verificationStatus === 'success' && (
        <Wrapper>
          <input type="text" placeholder="Enter OTP" />
          <Button label="verify" redirect="#" size="auto" rightIcon="http://localhost:9000/icons/ArrowRight.svg" onClick={""} />
        </Wrapper>
      )}
      <div className="forget__options">
        <span className="body-small-400">Already have an account?
          <a href="#" className="forget__options__sign-option body-small-500">Sign In</a>
        </span>
        <span className="body-small-400">Don't have an account?
          <a href="#" className="forget__options__sign-option body-small-500">Sign Up</a>
        </span>
      </div>
      <div className="forget__contact">
        <span className="body-small-400">You may contact{" "}
          <span className="forget__contact__support body-small-500">Customer Service</span> for help restoring access to your account.</span>
      </div>
    </div>
  );
}

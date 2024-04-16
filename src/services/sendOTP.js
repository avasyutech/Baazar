// const accountSid = "AC1259143514a8e8a3293322b87b0edc11";
// const authToken = "cfadbc622a45eae610d19697088877cd";
// const verifySid = "VA27e994d77fbc4d05f649d2cc8048b913";
// const client = require("twilio")(accountSid, authToken);

// function sendOTP(phoneNumber, channel) {
//   client.verify.v2
//     .services(verifySid)
//     .verifications.create({ to: phoneNumber, channel: channel })
//     .then((verification) => console.log(verification.status))
//     .then(() => {
//       const readline = require("readline").createInterface({
//         input: process.stdin,
//         output: process.stdout,
//       });
//       readline.question("Please enter the OTP:", (otpCode) => {
//         client.verify.v2
//           .services(verifySid)
//           .verificationChecks.create({ to: phoneNumber, code: otpCode })
//           .then((verification_check) => console.log(verification_check.status))
//           .then(() => readline.close());
//       });
//     });
// }

// export default sendOTP;
const accountSid = "AC1259143514a8e8a3293322b87b0edc11";
const authToken = "cfadbc622a45eae610d19697088877cd";
const verifySid = "VA27e994d77fbc4d05f649d2cc8048b913";
const client = require("twilio")(accountSid, authToken);

async function twilioOTP(phoneNumber, channel) {
  try {
    const verification = await client.verify.v2.services(verifySid).verifications.create({
      to: phoneNumber,
      channel: channel
    });
    return verification;
  }
  catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
}

let phoneNumber = "+916301655098";
let channel = "sms";

const sendOTP = async () => {
  try {
    const verification = await twilioOTP(phoneNumber, channel);
    const verificationSid = verification.sid;
  } 
  catch (error) {
    console.error('Error sending OTP:', error);
  }
};

const verifyOTP = async (otpCode) => {
  try {
    const verificationCheck = await client.verify.v2.services(verifySid).verificationChecks.create({
      to: phoneNumber,
      code: otpCode
    });
  } 
  catch (error) {
    console.error('Error verifying OTP:', error);
  }
};


// export default twilioOTP;

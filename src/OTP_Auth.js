import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react"
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {auth} from "./config"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const App = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    console.log("2nd stage reached")
    console.log(window.recaptchaVerifier)
    if (!window.recaptchaVerifier) {
        console.log("3rd stage reached")
        window.recaptchaVerifier = new RecaptchaVerifier(auth,
        "recaptcha-container",
        { 
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
      console.log("captcha got") 
    }
  }

  function onSignup() {
    console.log("1st stage reached")
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section>
      <div style={{textAlign:"center"}}>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2>
            👍Login Success
          </h2>
        ) : (
          <div>
            
            {showOTP ? (
              <>
                <div>
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp">
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                >
                  {loading && (
                    <CgSpinner size={20} />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div>
                 
                </div>
                <label
                  htmlFor="" style={{color:"white",fontSize:"25px",textAlign:"center"}}> <BsTelephoneFill size={30} style={{color:"Orange", marginRight:"10px"}}/>
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}>
                  {loading && (
                    <CgSpinner size={20} />
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default App;
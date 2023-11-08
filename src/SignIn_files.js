import React from "react";
import {auth, provider,FaceBookProvider,GithubProvider} from "./config";
import { signInWithPopup } from "firebase/auth";
import {useNavigate } from "react-router-dom"
import "./SignIn.css"
import OTPAuthentication from "./OTP_Auth";
import { FcGoogle} from "react-icons/fc";
import { FaFacebook,FaGithub} from "react-icons/fa";


function Google_Signup(){
    const navigate = useNavigate();
    const handleClick = async () =>{
        await signInWithPopup(auth,provider);
        navigate("/google-home");
    }
    const GithubClick = async () =>{
        await signInWithPopup(auth, GithubProvider)
        navigate("/google-home");
    }
    const FBClick = () =>{
        signInWithPopup(auth,FaceBookProvider)
        navigate("/google-home")
    }
    


    return (
        <div className="parent-container">
            <div className="button-container">
            <button onClick={handleClick} >Login with Google <FcGoogle size={27} /></button>
            <button onClick={FBClick} >Login with Facebook <FaFacebook size={27}/></button>
            <button onClick={GithubClick} >Login with github <FaGithub size={27}/></button>
            {<OTPAuthentication/>}
        </div> 
        </div>
       
    )
}

export default Google_Signup
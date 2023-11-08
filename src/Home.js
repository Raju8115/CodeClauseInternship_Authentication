import React from "react";
import {auth} from "./config"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import "./Home.css"

function Home(){
    const [ user ] = useAuthState(auth);
    const navigate = useNavigate();
    let provideId;

    if(user){
        provideId = user.providerData[0].providerId;
        console.log(provideId);
    }
    const logout = async () =>{
        await signOut(auth);
        navigate("/")
    }

    return (
        <div className="main-container">
            <center>
            {user ? (
                <div className="container-home">
                    <h1>You have been Logged in via {provideId}</h1>
                    <h1>{user.displayName}</h1>
                    <h1>{user.email}</h1>
                    <img src={user.photoURL} alt="avatar"/><br/>
                    <button onClick={logout}>Log out</button>
                </div>
                 
            ):""}
       </center>
        </div>

    )
}

export default Home;
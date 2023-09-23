// to reread: how tokens work. how to store and render data from API (cmon, you already know this one). 
//how to send messages(i think this is a basic POST to messages API?)
//how react forms work. how to POST new user info(probably know). how to display toasts
// ternary statements
//
import { useState } from "react";
import RenderLoginForm from "./RenderLoginForm";
import Authenticate from "./Authenticate";

 // check login session token,
// if true, render username, info and init messeges w/ relevent data
//      messages component displays ALL recieved and sent? messages
// if false, display login form, submit button, and register button
export default function Profile({username, setUsername}) {
    // const [token, setToken] = useState(null);
    const [token, setToken] = useState(null);
    
    
    
    return ( 
        <> {!token &&(
            <RenderLoginForm username={username} setUsername={setUsername} token={token} setToken={setToken}/>     )}       
        </>
    )
}


// submit button accepts and compares string against /users data,
// if matched, assign session token. (reload page if necessary)
// if no match, display error

// register button renders registration form (username, password and repeat password)
// and render submit registration button
// registr button: if any registr forms empty, return error.
//      check if username matches existing username, if true then return error
//      check if string in username and password are valid, if true
//          then POST to /users, display success toast, registrations success msg
//          and display div with text, "You may now login"
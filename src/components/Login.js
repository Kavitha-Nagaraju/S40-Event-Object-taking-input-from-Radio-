import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigation =useNavigate();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let messageInputRef = useRef();
  return (
    <div>
      <form>
        <div>
            <label>Email</label>
            <input ref={emailInputRef}></input>
        </div>
        <div>
            <label>Password</label>
            <input ref={passwordInputRef}></input>
        </div>
        <div>
            <label>Message</label>
            <input ref={messageInputRef}></input>
        </div>
        <div>
            <button type="button" onClick={()=>{
                if(emailInputRef.current.value=="kavitha@gmail.com" && passwordInputRef.current.value=="Kavi@123"){
                
                  navigation("/signupform",{state: {msg:messageInputRef.current.value}});
                }else{
                    alert("Invalid Email or Password");
                }
                
            }}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login

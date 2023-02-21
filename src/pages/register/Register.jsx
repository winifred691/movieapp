import React, { useRef, useState } from 'react'
import "./register.scss"



const logo =require ('../../asset/picturelogo.png')


const Register = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("");

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () =>{
        setEmail(emailRef.current.value)
    };

    const handleFinish = () =>{
        setPassword(passwordRef.current.value)
    }

  return (
    <div className='register'>
        <div className='top'>
            <img src={logo} alt='' className='logo'/>

            <button className='loginButton'>Login</button>
        </div>

        <div className="container">
            <h1>Unlimited movies, Tv shows and More</h1>
            <h2>Watch anywhere, Cancel anytime</h2>
            <p>ready to watch, enter your email to create membership</p>
            {!email ? (
            <div className="input">
            <input type="email" placeholder='email address' ref={emailRef}/>
            <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
            ): ( <form className="input">
            <input type="password" placeholder='password' ref={passwordRef}/>
            <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>)}
        </div>
        </div>
  )
}

export default Register
import "./login.scss"



const logo =require ('../../asset/picturelogo.png')


const Login = () => {
    
  return (
    <div className='login'>
        <div className='top'>
            <img src={logo} alt='' className='logo'/>

        </div>

        <div className="container">
            <form>
                <h1>Sign IN</h1>
                <input type="email" placeholder="Email or phone number"/>
                <input type="password" placeholder="password"/>
                <button className="loginButton">Sign In</button>
                <span>New to Light studio?<b>Sign Up Now.</b></span>
                <small>This page is protected by Google reCAPTCHA to ensure you are not a robot. <b>Learn More</b></small>
            </form>
        </div>
        </div>

        
  )
}

export default Login
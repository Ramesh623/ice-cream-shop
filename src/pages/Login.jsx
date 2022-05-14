import './Login.css';

const Login = () => {
  return (
    <div className='login-container'>
        <div className='login-wrapper'>
            <h1 className='login-title'>SIGN IN</h1>
            <form action="register" className='login-form'>

                <input className='login-input' type="text" placeholder='username'/>
                <input className='login-input' type="text" placeholder='password'/> 
    
                <button className='login-button'>LOGIN</button>
                <a href="" className='login-link'>DO NOT YOU REMEMBER THE PASSWORD</a>
                <a href="" className='login-link'>CREATE A NEW ACCOUNT</a>
            </form>
        </div>

    </div>

  )
}

export default Login
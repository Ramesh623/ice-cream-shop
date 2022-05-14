import './Register.css';

const Register = () => {
  return (
    <div className='regi-container'>
        <div className='regi-wrapper'>
            <h1 className='regi-title'>CREATE AN ACCOUNT</h1>
            <form action="register" className='regi-form'>

                <input className='regi-input' type="text" placeholder='name'/>
                <input className='regi-input' type="text" placeholder='last name'/>
                <input className='regi-input' type="text" placeholder='username'/>
                <input className='regi-input' type="text" placeholder='email'/>
                <input className='regi-input' type="text" placeholder='password'/>
                <input className='regi-input' type="text" placeholder='confirm password'/>
    
                <span className='regi-agreement'>
                    By creating an account, I constent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </span>

                <button className='regi-button'>CREATE</button>
            </form>
        </div>

    </div>
  )
}

export default Register
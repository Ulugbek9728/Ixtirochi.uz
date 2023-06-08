import React from 'react';
import '../assets/Login.scss'

function Login(props) {
    return (
        <div className='LoginBox'>
            <div className="box">
                <div className="title">
                    Kirish
                </div>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <a href="#">Forgot your password</a><br/>
                <button className='btn' type={"button"}>Log in</button>
            </div>
        </div>
    );
}

export default Login;
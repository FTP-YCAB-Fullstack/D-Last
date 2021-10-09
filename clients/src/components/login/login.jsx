import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <form action="">
                <div>
                    <label>email</label>
                    <input type="email" placeholder="type your email here"/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" placeholder="type your password here"/>
                </div>
                <input type="button" value="LOGIN" />
                <Link to="/register">Sign Up</Link>
            </form>
        </div>
    )
}

export default Login

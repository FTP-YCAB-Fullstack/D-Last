import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from "axios"

function Login() {
    const history = useHistory()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const submited = async (e) => {
        e.preventDefault()
        let data = {
            email,
            password
        }

        let login = await axios.post("http://localhost:5000/login",data)
        localStorage.setItem('token', login.data.accesstoken)
        
        console.log(login.data.data.role)

        // console.log(localStorage.getItem('token'))

    }



    return (
        <div>
            <form onSubmit={submited}>
                <div>
                    <label>email</label>
                    <input type="email" placeholder="type your email here" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" placeholder="type your password here" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <input type="submit" value="LOGIN" />
                <Link to="/register">Sign Up</Link>
            </form>
        </div>
    )
}

export default Login

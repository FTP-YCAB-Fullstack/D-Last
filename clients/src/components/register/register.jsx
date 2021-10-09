import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom'

function Register() {
    const history = useHistory()
    const [nama,setNama] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    // useEffect(() => {
    //     console.log(`Nama : ${nama}`)
    //     console.log(`Email : ${email}`)
    //     console.log(`Password : ${password}`)
    // },[nama,email,password])

    const submited = async (e) => {
        e.preventDefault()
        let data = {
            nama,
            email,
            password
        }

        let health = await axios.post("http://localhost:5000/register",data)

        console.log(health)
        history.push('/login')
    }

    return (
        <div>
            <form onSubmit={submited}>
                <div>
                    <label>nama</label>
                    <input type="text" placeholder="type your name here" onChange={(e)=>setNama(e.target.value)}/>
                </div>
                <div>
                    <label>email</label>
                    <input type="email" placeholder="type your email here" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" placeholder="type your password here" onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Register

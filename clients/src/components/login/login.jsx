import React, { useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import Request from "../../axios_instance";
import img from "../images/login.jpg"

function Login() {
    const history = useHistory()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()

    const submited = async (e) => {
        try {
            e.preventDefault()
            let data = {
                email,
                password
            }


            let login = await Request({
                method : "POST",
                url : 'login',
                data : data
            })

            

            localStorage.setItem('token', login.data.accesstoken)
            
            await dispatch({
                type : "AUTHING",
                payload : {
                    authAs : login.data.data.role
                }
            });

            localStorage.setItem('authAs', login.data.data.role)

            await dispatch({
                type : "LOGGING",
                payload : {
                    logAs : login.data.data
                }
            });

            if(email === "dlastline003@gmail.com"){
                history.push("/admin");
            } else {
                history.push("/");
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message,
              })
        }
        

    }



    return (
        
<section className="min-h-screen flex items-stretch text-white ">
            <div className="lg:flex w-1/2 hidden bg-gray-500  relative items-center"  >
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div className="w-full px-24 z-10">
                    <h1 className="text-4xl font-bold text-left tracking-wide">Welcome to D'Last-Line</h1>
                    <p className="text-2xl my-4">You have an individual story to tell. You have a name, a history, a personality. Staying yourself is part of the battle.</p>
                </div>
            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" >
                <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" >
                    <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                </div>
                <div className="w-full py-6 z-20">
                    <h1 className="my-6 text-gray-100 font-bold lg:text-black text-5xl">
                        SELAMAT DATANG!
                    </h1>
                    <form onSubmit={submited} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <div className="pb-2 pt-4">
                            <input type="email" placeholder="type your email here" onChange={(e)=>setEmail(e.target.value)} className="block w-full p-4 text-lg rounded-sm placeholder-white bg-gray-900"/>
                        </div>
                        <div className="pb-2 pt-4">
                            <input type="password" placeholder="type your password here" onChange={(e)=>setPassword(e.target.value)} className="block w-full p-4 text-lg rounded-sm placeholder-white bg-gray-900" />
                        </div>
                        <div className="text-right text-white lg:text-black hover:underline hover:text-blue-600">
                            <Link to="/register">Daftar disini</Link>
                        </div>
                        <div className="px-4 pb-2 pt-4">
                            <input type="submit" value="Login" className="uppercase block w-full p-4 text-lg rounded-full bg-green-900 hover:bg-green-700 focus:outline-none"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login;

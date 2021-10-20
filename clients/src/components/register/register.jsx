import React, {useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Request from "../../axios_instance";

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
        try {
            e.preventDefault()
            let data = {
                nama,
                email,
                password
            }

            let health = await Request.post("register",data)
            Swal.fire({
                icon: 'success',
                title: 'Check your email',
                text: `Kami sudah mengirim email untuk validasi akun anda`,
              })
            
            history.push('/login')
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Something wrong happen',
                text: error.response.data.message,
              })
        }
        
    }

    return (
        <section className="min-h-screen flex items-stretch text-white ">
            <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" >
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
                    <h1 className="my-6 lg:text-black text-white font-semibold text-5xl">
                        DAFTAR
                    </h1>
                    <form onSubmit={submited} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <div className="pb-2 pt-4">
                            <input type="text" placeholder="type your name here" onChange={(e)=>setNama(e.target.value)} className="block w-full p-4 text-lg placeholder-white rounded-sm bg-gray-900"/>
                        </div>
                        <div className="pb-2 pt-4">
                            <input type="email" placeholder="type your email here" onChange={(e)=>setEmail(e.target.value)} className="block w-full p-4 text-lg placeholder-white rounded-sm bg-gray-900"/>
                        </div>
                        <div className="pb-2 pt-4">
                            <input type="password" placeholder="type your password here" onChange={(e)=>setPassword(e.target.value)} className="block w-full p-4 text-lg placeholder-white rounded-sm bg-gray-900" />
                        </div>
                        <div className="px-4 pb-2 pt-4">
                            <input type="submit" value="Daftar" className="uppercase block w-full p-4 text-lg rounded-full bg-green-900 hover:bg-green-600 focus:outline-none"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register;

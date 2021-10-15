import React, { useState } from 'react'
import FormCondition from '../modal/formCondition'
// import Swal from 'sweetalert2';
import image from '../images/volunteer_dashboard.jpg'
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {NavBtn, BtnOut} from '../nav/navbarStyle'

function Dashboard() {
    const [open, setOpen] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    const token =localStorage.getItem('token')

    const logout =(e) => {
        e.preventDefault()
        dispatch({type: "LOGOUT"})

        localStorage.removeItem("token");
        localStorage.removeItem('authAs')
    }


    return (
        <>
        
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                {token ?
                 <NavBtn>
                 <BtnOut onClick={logout}>
                     Keluar
                 </BtnOut>
                </NavBtn>
                : null }
                    <h2 className="text-base font-bold text-indigo-600">
                        We Love, We Care
                    </h2>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                        Admin Dashboard
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div onClick= {() => setOpen(true)} className="w-full bg-blue-200 rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/QcCxmZS/3771650.jpg" alt="photo"/>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">Kondisi Mental</p>
                        </div>
                        
                    </div>
                        
                    <div onClick={() => history.push('/admin-volunteer')} className="w-full bg-red-200 rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src={image} alt="photo"/>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">Volunteer</p>
                        </div>
                    </div>
                    {open && <FormCondition close={setOpen}/>}
                </div>   
                
            </section>
            

        </>
    )
}

export default Dashboard

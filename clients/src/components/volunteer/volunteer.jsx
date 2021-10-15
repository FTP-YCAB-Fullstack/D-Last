import React, { useState, useEffect } from 'react'
import FormVolunteer from '../modal/volunteerFotm'
import NavBar from '../nav/nav'
import { useDispatch, useSelector } from 'react-redux'
import getApi from '../../redux/action'

function Volunteer() {
    const [isOpen, setIsOpen] = useState(false)
    const volunteers= useSelector(state => state.volunteer)
    const activities = useSelector(state => state.activities)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getApi("approved"))
    },[])

    useEffect(() => {
        dispatch(getApi("activities"))
    },[])


    return (
        <div>
            <NavBar/>
       
            <div className="volunteer w-full h-screen flex flex-col items-center p-10 px-4 sm:px-6 lg:px-4 py-12">
                <h1>VOLUNTEER MEMBER</h1>
                <div className="flex w-full justify-end">
                    <button onClick= {() => setIsOpen(true)} className="relative bg-green-500 text-white hover:bg-green-700 w-48 p-4 rounded-full text-md font-bold overflow-visible mb-8">Gabung Volunteer</button>
                    {isOpen && <FormVolunteer close={setIsOpen}/>}
                </div>
                <div className="volunteer-box w-full h-72 flex flex-wrap items-center justify-center gap-10">
                    {volunteers.map((el,key) => {
                            return (
                            <div key={key}  className="w-56 h-full bg-gray-100 rounded-lg p-8 flex flex-col justify-center items-center ">
                            <div className="mb-8">
                                <img className="object-center object-cover rounded-full h-32 w-32" src={`http://localhost:5000/${el.pas_foto}`} alt="photo"/>
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-gray-700 font-bold mb-2">{el.nama}</p>
                                <p className="text-base text-gray-400 font-normal">{el.domisili}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <div className="volunteer-box w-full h-5/6 flex flex-col justify-center items-center gap-10 ">
                
                <h1>VOLUNTEER ACTIVITY</h1>
                    <div className="w-80 h-5/6 bg-gray-100 rounded-lg p-8 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-32 w-32" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                            <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default Volunteer

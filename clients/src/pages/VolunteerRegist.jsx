import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import VolunteerRegistInfo from '../components/modal/VolunteerRegistInfo'

function VolunteerRegist() {
    // const [openModal,setOpenModal] = useState(false)
    const [open, setOpen] = useState(false)
    
    const history = useHistory()

    const back = () => {
        history.goBack()
    }


    return (
        <div>
            <div className="relative items-center justify-center">
                <h1 className="text-center text-2xl mb-8 font-bold p-4">Daftar Ajuan Volunteer</h1>
                <div className="flex flex-wrap items-center container mx-auto my-auto">

                    <div className="max-w-md mx-auto">
                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs mb-5">
                                <img className="rounded-t-lg h-52 w-screen" src={`http://localhost:5000/bg_office.jpg`}  alt=""/>
                                <div className="p-5 flex items-center flex-col">
                                    <h5 className="text-gray-900 font-bold text-center text-xl tracking-tight mb-2">Judul</h5>
                                    <p className="font-normal text-gray-700 mb-3">Bogor</p>
                                    <a onClick={() => setOpen(true)}
                                        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                                        Read more
                                    </a>
                                </div>
                        </div>
                        {/* {openModal && <VolunteerRegistInfo close={setOpenModal}/>} */}
                        {open && <VolunteerRegistInfo close={setOpen}/>}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default VolunteerRegist






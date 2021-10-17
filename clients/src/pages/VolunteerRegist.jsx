import { useHistory } from 'react-router-dom'
import VolunteerRegistInfo from '../components/modal/VolunteerRegistInfo'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getApi from '../redux/action'

function VolunteerRegist() {
    // const [openModal,setOpenModal] = useState(false)
    const [open, setOpen] = useState(false)
    const [dataCard, setDataCard] = useState()

    const unapproved = useSelector(state => state.unVolunteer)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
            dispatch(getApi('unapproved'))
    },[])

    const cardData = (el) => {
        setDataCard(el)
        setOpen(true)
    }
    
    const back = (e) => {
        e.preventDefault()
        history.goBack()
    }


    return (
        <div>
            <div className="relative items-center justify-center">
                <h1 className="text-center text-2xl mb-8 font-bold p-4">Daftar Ajuan Volunteer</h1>
                <div className="flex flex-wrap items-center container mx-auto my-auto">

                    {unapproved.map((el,key) => {
                        return (
                            <div key={key} className="max-w-md mx-auto">
                                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs mb-5">
                                        <img className="rounded-t-lg h-64 p-3 w-screen" src={`http://localhost:5000/${el.pas_foto}`}  alt=""/>
                                        <div className="p-5 flex items-center flex-col">
                                            <h5 className="text-gray-900 font-bold text-center text-xl tracking-tight mb-2">{el.nama}</h5>
                                            <p className="font-normal text-gray-700 mb-3">{el.domisili}</p>
                                            <a onClick={() => cardData(el)}
                                                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                                                Read more
                                            </a>
                                        </div>
                                </div>
                                {open && <VolunteerRegistInfo {...dataCard} close={setOpen}/>}
                            </div>
                        )
                    })}
                    
                </div>
            </div>

            <button className="text-center shadow bg-blue-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={back}>BACK</button>
        </div>
    )
}

export default VolunteerRegist






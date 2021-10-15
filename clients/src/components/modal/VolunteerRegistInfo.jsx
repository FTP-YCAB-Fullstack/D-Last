import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Request from '../../axios_instance'
import getApi from '../../redux/action'

function VolunteerRegistInfo(props) {

    const dispatch = useDispatch()


    const Accept = async () => {
        try {
            // console.log(props._id)
            const id = props._id
            const newvolunteer = await Request({
                method : "PATCH",
                url : `volunteers/${id}`
            })
            alert("NEW VOLUNTEER ADDED")
            props.close(false)
            dispatch(getApi('unapproved'))
        } catch (error) {
            console.log(error)
        }  
    }

    const Reject = async () => {
        try {
            // console.log(props._id)
            const id = props._id
            const newvolunteer = await Request({
                method : 'DELETE',
                url : `volunteers/${id}`
            })
            alert("NEW VOLUNTEER REJECTED")
            props.close(false)
            dispatch(getApi('unapproved'))
        } catch (error) {
            console.log(error)
        }  
    }

    return (
        <div className="w-screen h-screen left-0 top-0 bg-opacity-50 bg-black flex items-center justify-center fixed">
                <div className="modalcheck h-5/6 w-5/6 p-4 gap-y-4 bg-white border-green-700 border-2 overflow-auto">
                    <p>Nama : {props.nama}</p>
                    <p>Tempat tanggal lahir : {props.ttl}</p>
                    <p>ttl : {props.ttl}</p>
                    <p>pendidikan terakhir : {props.pendidikan_terakhir}</p>
                    <p>Visi Misi : {props.visi_misi}</p>
                    <p>Rencana kedepan : {props.rencana_volunteer}</p>
                    <p>Pendapat tentang mental health : {props.pendapat_mental_health} </p>
                    <button onClick={Accept}
                            className="shadow bg-blue-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">TERIMA</button>

                    <button onClick={Reject}
                            className="shadow bg-red-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">TOLAK</button>
                    
                    <button onClick={() => props.close(false) }> Close </button>
                </div>
        </div>
    )
}

export default VolunteerRegistInfo

import React from 'react'
import { useDispatch } from 'react-redux'
import Request from '../../axios_instance'
import getApi from '../../redux/action'
import Swal from 'sweetalert2'

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
            Swal.fire({
                icon: 'success',
                title: 'Permintaan Diterima',
              })
            
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
            Swal.fire({
                icon: 'error',
                title: 'Permintaan Ditolak',
              })
            props.close(false)
            dispatch(getApi('unapproved'))
        } catch (error) {
            console.log(error)
        }  
    }

    return (
        <div className="w-screen h-screen left-0 top-0 bg-opacity-50 bg-black flex items-center justify-center fixed">
                <div className="modalcheck h-5/6 w-2/3 p-4 gap-y-4 bg-white border-green-700 border-2 overflow-auto">
                    <div className="clsBtn w-full">
                        <p onClick={() => props.close(false)} className="cursor-pointer text-right text-2xl text-red-500">X</p>
                    </div>
                    
                    <div className="top p-2 gap-x-2 flex">
                        <div className="img w-1/3 h-72">
                            <img className="w-full h-full" src={`http://localhost:5000/${props.pas_foto}`} alt="..." />
                        </div>
                        <div className="info w-1/2">
                            <div className="nama">
                                <p>Nama : {props.nama}</p>
                            </div>
                            <div className="nama">
                                <p>Tangal Lahir : {props.ttl}</p>
                            </div>
                            <div className="nama">
                                <p>Domisili : {props.domisili}</p>
                            </div>
                            <div className="nama">
                                <p>Pendidikan Terakhir : {props.pendidikan_terakhir}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bot p-2">
                        <div className="info">
                            <div className="alasan">
                                <p>Alasan</p>
                                <p>{props.visi_misi}</p>
                            </div>
                            <div className="rencana">
                                <p>Rencana</p>
                                <p>{props.rencana_volunteer}</p>
                            </div>
                            <div className="pendapat">
                                <p>Pendapat</p>
                                <p>{props.pendapat_mental_health}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default VolunteerRegistInfo

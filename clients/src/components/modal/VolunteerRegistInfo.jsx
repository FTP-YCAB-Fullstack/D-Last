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
                        <div className="img w-1/4 xs:h-24 h-52 flex justify-center items-center">
                            <img className="w-full h-full" src={`https://dlast.herokuapp.com/${props.pas_foto}`} alt="..." />
                        </div>
                        <div className="info w-1/2 ml-10 ">
                            <h2 className="dark:text-white font-bold text-lg lg:text-2xl my-2 mb-10 ">
                            Form Pengajuan Volunteer {props.nama}
                            </h2>
                            <div className="nama mb-2">
                                <p><span className="font-bold text-gray-600"> Tempat tanggal lahir : </span> {props.ttl.slice(0,15)}</p>
                            </div>
                            <div className="nama mb-2">
                                <p><span className="font-bold text-gray-600"> Domisili : </span> {props.domisili}</p>
                            </div>
                            <div className="nama">
                                <p><span className="font-bold text-gray-600"> Pendidikan terakhir : </span> {props.pendidikan_terakhir}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bot p-2">
                        <div className="info">
                            <div className="alasan">
                                <p className="font-bold text-gray-600 mb-3">Alasan ingin bergabung :</p>
                                <p className="mb-5"> {props.visi_misi}</p>
                            </div>
                            <div className="rencana ">
                                <p className="font-bold text-gray-600 mb-3">Rencana volunteer:</p>
                                <p className="mb-5">{props.rencana_volunteer}</p>
                            </div>
                            <div className="pendapat">
                                <p className="font-bold text-gray-600 mb-3">Pendapat tentang health:</p>
                                <p className="mb-5">{props.pendapat_mental_health}</p>
                            </div>
                        </div>
                        <button onClick={Accept}
                                    className="shadow bg-blue-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-5 mr-4">TERIMA</button>
                            <button onClick={Reject}
                                    className="shadow bg-red-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-5 ml-4">TOLAK</button>
                    </div>
                </div>
        </div>
    )
}

export default VolunteerRegistInfo

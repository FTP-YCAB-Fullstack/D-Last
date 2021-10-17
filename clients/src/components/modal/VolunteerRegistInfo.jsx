import React, { useEffect } from 'react'
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
                <div className="modalcheck h-5/6 w-5/6 p-4 gap-y-4 bg-white border-green-700 border-2 overflow-auto">
                <div className="btnClose">
                            <button className="text-xl font-extrabold text-green-900 text-right w-full pr-4 cursor-pointer" onClick={() => props.close(false)}>X</button>
                        </div>
                    <div className="flex flex-col lg:flex-row justify-around items-center lg:mx-10 py-8">
                        <div className="w-1/4" >
                            <img  src={`http://localhost:5000/${props.pas_foto}`} className="h-auto " alt="" />
                        </div>
                        <div className="lg:w-2/3 w-1/2 mt-4 lg:mt-0 pl-4">
                            <h2 className="dark:text-white font-bold text-lg lg:text-2xl my-2 ">
                            Form Pengajuan Volunteer {props.nama}
                            </h2>
                            <div className="flex justify-start items-center my-2">
                                <p className="dark:text-white text-base lg:w-3/4  text-gray-800">
                                    Tempat tanggal lahir : {props.ttl}
                                </p>
                            </div>
                            <div className="flex justify-start items-center my-2">
                                <p className="dark:text-white text-base lg:w-3/4  text-gray-800">
                                    Domisili : {props.domisili}
                                </p>
                            </div>
                            <div className="flex justify-start items-center my-2">
                                <p className="dark:text-white text-base lg:w-3/4  text-gray-800">
                                    pendidikan terakhir : {props.pendidikan_terakhir}
                                </p>
                            </div>
                            <div className="flex justify-start items-center my-2">
                                <p className="dark:text-white text-base lg:w-3/4  text-gray-800 mt-2 mr-2">
                                    Visi Misi : {props.visi_misi}
                                </p>
                            </div>
                            <div className="flex justify-start items-center my-2">
                                <p className="dark:text-white text-base lg:w-3/4  text-gray-800">
                                Rencana kedepan : {props.rencana_volunteer}
                                </p>
                            </div>
                            <div className="flex justify-start items-center my-2">
                                {/* <FaCheckSquare className="text-2xl text-red-600 mr-2" /> */}
                                <p className="dark:text-white text-base lg:w-3/4  text-gray-800">
                                Pendapat tentang mental health : {props.pendapat_mental_health}
                                </p>
                            </div>
                            <button onClick={Accept}
                                    className="shadow bg-blue-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-6 mr-4">TERIMA</button>
                            <button onClick={Reject}
                                    className="shadow bg-red-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-6 ml-4">TOLAK</button>
                                    
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default VolunteerRegistInfo

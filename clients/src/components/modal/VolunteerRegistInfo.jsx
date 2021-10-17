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
                <div className="modalcheck w-11/12 md:w-2/3 p-4 gap-y-4 bg-white border-green-700 border-2 overflow-auto">
                    {/* <p>Nama : {props.nama}</p>
                    <p>Tempat tanggal lahir : {props.ttl}</p>
                    <p>ttl : {props.ttl}</p>
                    <p>pendidikan terakhir : {props.pendidikan_terakhir}</p>
                    <p>Visi Misi : {props.visi_misi}</p>
                    <p>Rencana kedepan : {props.rencana_volunteer}</p>
                    <p>Pendapat tentang mental health : {props.pendapat_mental_health} </p>
                    <img src={`http://localhost:5000/${props.pas_foto}`} alt="" /> */}
                    <button className="text-right text-3xl text-red-500 w-full" onClick={() => props.close(false) }> X </button>

                    <div className="head flex">
                        <div className="img h-80">
                            <img className="h-full" src={`http://localhost:5000/${props.pas_foto}`} alt="..." />
                        </div>
                        <div className="little p-2 pl-12 w-1/2 flex flex-col gap-y-2 ">
                            <div className="">
                                <p className="md:text-2xl text-xl">Nama  </p>
                                <p className="">{props.nama}</p>
                            </div>
                            <div className="">
                                <p className="md:text-2xl text-xl">Email  </p>
                                <p className="">{props.email}</p>
                            </div>
                            <div className="">
                                <p className="md:text-2xl text-xl">Tempat Tanggal Lahir</p>
                                <p className="">{props.ttl}</p>
                            </div>
                            <div className="">
                                <p className="text-2xl">Pendidikan Terakhir </p>
                                <p className="">{props.pendidikan_terakhir}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bot mt-8 flex flex-col gap-y-4">
                        <div className="items flex flex-col">
                            <p className="text-3xl">Alasan bergabung</p>
                            <p>{props.visi_misi}</p>
                        </div>
                        <div className="items flex flex-col">
                            <p className="text-3xl">Pendapat mengenai mental health</p>
                            <p>{props.visi_misi}</p>
                        </div>
                        <div className="items flex flex-col">
                            <p className="text-3xl">Rencana setelah bergabung</p>
                            <p>{props.visi_misi}</p>
                        </div>
                    </div>

                    <div className="Btn flex gap-x-4">
                        <button onClick={Accept}
                                className="shadow bg-blue-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">TERIMA</button>

                        <button onClick={Reject}
                                className="shadow bg-red-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">TOLAK</button>
                    </div>
                    
                    
                    
                </div>
        </div>
    )
}

export default VolunteerRegistInfo

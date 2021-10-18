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
            <div className="relative flex flex-col items-center justify-center">
                <h1 className="text-center text-3xl mb-8 mt-10 font-bold text-green-700 p-4">DAFTAR PENGAJUAN VOLUNTEER</h1>
                <div className="w-full ml-10">
                    <button className="text-center shadow-lg mb-10 bg-white shadow-4 hover:bg-green-500 focus:shadow-outline focus:outline-none text-green-700 font-bold py-2 px-4 rounded" onClick={back}><i className="fas fa-angle-double-left "></i> kembali</button>
                </div>
                <div className="flex flex-wrap justify-center items-center container mx-auto my-auto t-0 mb-10">
                    <div  class="py-1 t-0 bg-blueGray-50 flex justify-center w-full h-full">
                        <div class="w-full h-full t-0 flex justify-center items-center mb-12 xl:mb-0 px-4 mx-auto ">
                            <div class=" flex flex-col min-w-0 break-words bg-white w-full h-full shadow-lg rounded ">
                                <div class="rounded-t mb-0 px-4 py-3 border-0">
                                    <div class="flex flex-wrap items-center">
                                        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                            <h3 class="font-semibold text-base text-blueGray-700">Volunteer Form Preview</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="block w-full overflow-x-auto">
                                    <table class="items-center bg-white w-full border-collapse ">
                                        <thead class="bg-green-500 text-white">
                                            <tr>
                                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Nama
                                            </th>
                                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                             Email
                                            </th>
                                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Tanggal Pengajuan
                                            </th>
                                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Domisili
                                            </th>
                                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Pendidikan Terakhir
                                            </th>
                                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Lihat Form
                                            </th>
                                        </tr>
                                    </thead>
                                    {unapproved.map((el,key) => {
                                            return (
                                                <tbody key={key}>
                                                <tr>
                                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                    {el.nama}
                                                    </th>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                    {el.email}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {el.createdAt.slice(0,15)}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {el.domisili}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {el.pendidikan_terakhir}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <button onClick={() => cardData(el)} class="text-gray-100 w-full rounded-sm my-5 ml-2 focus:outline-none bg-yellow-600 p-1">
                                                            DETAIL
                                                        </button>
                                                        {open && <VolunteerRegistInfo {...dataCard} close={setOpen}/>}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    })}
                             </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default VolunteerRegist






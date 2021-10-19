import React, { useState } from 'react'
import Request from '../../axios_instance'
import Swal from 'sweetalert2';

function VolunteerAct(props) {

    const [nama_kegiatan,setNama_Kegiatan] = useState('')
    const [deskripsi,setDeskripsi] = useState('')
    const [thumbnail,setThumbnail] = useState('')

    const getImg = (e) => {
        setThumbnail(e.target.files[0])
    }

    const submit = async (e) => {
        try {
            e.preventDefault()

            if(nama_kegiatan.length === 0 || deskripsi.length === 0 || thumbnail.length === 0){
                Swal.fire({
                    icon: 'error',
                    title: 'Harap Isi semua form',
                  })
                return
            }

            const formData = new FormData();

            formData.append("nama_kegiatan",nama_kegiatan)
            formData.append("deskripsi",deskripsi)
            formData.append("thumbnail",thumbnail)

            const data = await Request({
                method : 'POST',
                url : 'activities',
                data : formData
            })

            Swal.fire({
                icon: 'success',
                title: 'Acara sudah di posting',
              })

            props.close(false)

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="modalBg w-screen h-screen top-0 left-0 fixed flex justify-center items-center">
            <div className="modalcheck h-full items-center justify-center flex flex-col p-4 gap-y-4 bg-white w-full">
                <form onSubmit={submit} className="w-2/3 h-5/6 bg-green-800 rounded-lg shadow-lg p-4">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Nama Acara
                        </label>
                        <input onChange={(e) => setNama_Kegiatan(e.target.value)} maxlength="25" className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text"/>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Deskripsi
                        </label>
                        <textarea onChange={(e) => setDeskripsi(e.target.value)} className=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Thumbnail
                        </label>
                        <input onChange={getImg} type="file" filename="thumbnail"></input>

                        </div>
                    </div>

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3 flex gap-x-2">
                        <input type="submit" value="Kirim" className="shadow bg-green-600 mr-12 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" />
                        <button onClick={() => props.close(false)} className="shadow bg-red-400 hover:bg-red-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Batal
                        </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                    </form>
            </div>
        </div>
    )
}

export default VolunteerAct

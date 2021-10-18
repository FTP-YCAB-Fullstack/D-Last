import axios from 'axios';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import getApi from '../../redux/action';
import Swal from 'sweetalert2';
import Request from '../../axios_instance';

const FormStory = (props) => {
    const [judul, setJudul] = useState("")
    const [penulis, setPenulis] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const [thumbnail, setThumbnail] = useState("")

    const dispatch = useDispatch()

    const getImg = (e) => {
        setThumbnail(e.target.files[0])
    }

    const submit = async (e) => {
        try {
            e.preventDefault()

            const formData = new FormData();

            formData.append("judul",judul)
            formData.append("penulis",penulis)
            formData.append("deskripsi",deskripsi)
            formData.append("thumbnail",thumbnail)

            const token = localStorage.getItem('token')

            const data = await Request({
                method : 'POST',
                url : 'stories',
                headers : {
                    accesstoken : token
                },
                data : formData

            })


            Swal.fire({
                icon: 'success',
                title: 'Cerita anda telah dibuat !',
              })
            
            dispatch(getApi("story"))

            props.close(false)

        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Admin tidak bisa membuat cerita',
              })
        }
    }



    return(
        <div className="modalBg w-full h-full top-0 left-0 bg-opacity-50 bg-black fixed flex justify-center items-center">
    <div className="modalcheck w-2/3 items-center flex flex-col p-4 bg-white">
        <div className="w-3/4 t-0 mb-8 rounded shadow-2xl p-5 ">
            <h1 className="w-full text-center text-gray-800 text-xl font-bold mb-4">Mau bagiin cerita apa? Bagi disini ya</h1>
                <form onSubmit={submit} method="post">
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" >Judul</label>
                        <input onChange={(e) => setJudul(e.target.value)} className="border py-2 px-3 text-grey-800" type="text" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" >Penulis</label>
                        <input onChange={(e) => setPenulis(e.target.value)} className="border py-2 px-3 text-grey-800" type="text" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" for="textarea"> Ini kolom cerita mu! Tulis disini ya ^^</label>
                        <textarea onChange={(e) => setDeskripsi(e.target.value)} className="border py-2 px-3 text-grey-800" name="textarea" id="textarea"></textarea>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" for="File"> Thumbnail</label>
                        <input className="border py-2 px-3 text-grey-800" type="file" filename="thumbnail" onChange={getImg}/>
                        <div className="md:w-1/3 mt-10">
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
    </div>        
        
    )
}

export default FormStory

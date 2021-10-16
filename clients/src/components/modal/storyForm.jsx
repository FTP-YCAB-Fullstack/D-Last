import axios from 'axios';
import React, {useState} from 'react';

const FormStory = (props) => {
    const [judul, setJudul] = useState("")
    const [penulis, setPenulis] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const [thumbnail, setThumbnail] = useState("")

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

            const data = await axios.post("http://localhost:5000/stories",formData)
            console.log("Success Add Stories")

            props.close(false)

        } catch (error) {
            console.log(error)
        }
    }



    return(
        <>
        <div className="modalBg w-screen h-screen top-0 bg-opacity-50 bg-black fixed flex justify-center items-center">
            <div className="modalcheck h-3/4 items-center justify-center flex flex-col p-4 gap-y-4 bg-white w-2/4">
                <div class="flex justify-center items-center w-full ">
                    <div class="w-full bg-white rounded shadow-2xl p-8 m-4">
                        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Mau Bagiin Cerita apa nih? Yuk sharing ^^</h1>
                        <form onSubmit={submit} method="post">
                            <div class="flex flex-col mb-4">
                                <label class="mb-2 font-bold text-lg text-gray-900" >Judul</label>
                                <input onChange={(e) => setJudul(e.target.value)} class="border py-2 px-3 text-grey-800" type="text" />
                            </div>
                            <div class="flex flex-col mb-4">
                                <label class="mb-2 font-bold text-lg text-gray-900" >Penulis</label>
                                <input onChange={(e) => setPenulis(e.target.value)} class="border py-2 px-3 text-grey-800" type="text" />
                            </div>
                            <div class="flex flex-col mb-4">
                                <label class="mb-2 font-bold text-lg text-gray-900" for="textarea"> Ini kolom cerita mu! Tulis disini ya ^^</label>
                                <textarea onChange={(e) => setDeskripsi(e.target.value)} class="border py-2 px-3 text-grey-800" name="textarea" id="textarea"></textarea>
                            </div>
                            <div class="flex flex-col mb-4">
                                <label class="mb-2 font-bold text-lg text-gray-900" for="File"> Thumbnail</label>
                                <input class="border py-2 px-3 text-grey-800" type="file" filename="thumbnail" onChange={getImg}/>
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
        </div>
        </>
        
        
    )
}

export default FormStory

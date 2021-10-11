import axios from 'axios';
import React, {useState} from 'react';

const FormCondition = (props) => {
    const [judul, setJudul] = useState("")
    const [pengertian, setPengertian] = useState("")
    const [ciri, setCiri] = useState("")
    const [penanggulangan, setPenanggulangan] = useState("")
    const [credit, setCredit] = useState("")
    const [thumbnail, setThumbnail] = useState("")

    const getImg = (e) => {
        setThumbnail(e.target.files[0])
    }

    const submit = async (e) => {
        try {
            e.preventDefault()

            const formData = new FormData();

            formData.append("judul",judul)
            formData.append("pengertian",pengertian)
            formData.append("ciri",ciri)
            formData.append("penanggulangan",penanggulangan)
            formData.append("credit",credit)
            formData.append("thumbnail",thumbnail)

            const data = await axios.post("http://localhost:5000/health-conditions",formData)
            console.log("Success Add To Article")
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <div className="modalBg w-screen h-screen top-0 fixed flex justify-center items-center">
            <div className="modalcheck h-full items-center justify-center flex flex-col p-4 gap-y-4 bg-white w-full">
                <form onSubmit={submit} className="w-2/3 h-5/6 bg-blue-300 rounded-lg shadow-lg p-4 overflow-auto" encType="multipart/form-data">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                            Judul
                        </label>
                        <input onChange={(e) => setJudul(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500" id="nick" type="text"/>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                            Pengertian
                        </label>
                        <textarea onChange={(e) => setPengertian(e.target.value)} className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500 h-48 resize-none" id="message"></textarea>

                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label  className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                            Ciri - Ciri
                        </label>
                        <textarea onChange={(e) => setCiri(e.target.value)} className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500 h-48 resize-none" id="message"></textarea>

                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label  className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                            Cara mengatasi
                        </label>
                        <textarea onChange={(e) => setPenanggulangan(e.target.value)} className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500 h-48 resize-none" id="message"></textarea>

                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                            Credit
                        </label>
                        <input onChange={(e) => setCredit(e.target.value)} className="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500" id="nick" type="text"/>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                            Thumbnail
                        </label>
                        <input type="file" filename="thumbnail" onChange={getImg} ></input>

                        </div>
                    </div>

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                        <input type="submit" value="Send" className="shadow bg-blue-600 mr-12 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" />
                        <button onClick={() => props.close(false)} className="shadow bg-red-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Cancel
                        </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                    </form>
            </div>
        </div>
        </>
        
        
    )
}

export default FormCondition

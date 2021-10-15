import axios from 'axios';
import React, {useState} from 'react';

const FormVolunteer = (props) => {
    const [Nama, setNama] = useState("")
    const [ttl, setttl] = useState("")
    const [domisili, setDomisili] = useState("")
    const [Pendidikan, setPendidikan] = useState("")
    const [visiMisi, setVisiMisi] = useState("")
    const [pandangan, setPandangan] = useState("")
    const [planning, setPlanning] = useState("")
    const [pasFoto, setpasFoto] = useState("")

    const getImg = (e) => {
        setpasFoto(e.target.files[0])
    }

    const submit = async (e) => {
        try {
            e.preventDefault()

            const formData = new FormData();

            formData.append("nama",Nama)
            formData.append("ttl",ttl)
            formData.append("domisili",domisili)
            formData.append("pendidikan_terakhir",Pendidikan)
            formData.append("visi_misi",visiMisi)
            formData.append("pendapat_mental_health",pandangan)
            formData.append("rencana_volunteer",planning)
            formData.append("pas_foto",pasFoto)

            const data = await axios.post("http://localhost:5000/volunteers",formData)
            console.log("Success Add Volunteer")

            props.close(false)

        } catch (error) {
            console.log(error)
        }
    }



    return(
        <>
        <div className="w-screen h-screen left-0 top-0 bg-opacity-50 bg-black flex items-center justify-center fixed">
            <div className="modalcheck h-full items-center justify-center flex flex-col p-4 gap-y-4 bg-white w-full">
                <form onSubmit={submit} className="w-2/3 h-5/6 bg-green-800 rounded-lg shadow-lg p-4 overflow-auto">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Nama
                        </label>
                        <input onChange={(e) => setNama(e.target.value)}  maxlength="25" className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text"/>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Tempat, Tanggal Lahir
                        </label>
                        <input onChange={(e) => setttl(e.target.value)}  maxlength="25" className=" appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message"></input>

                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Domisili
                        </label>
                        <input onChange={(e) => setDomisili(e.target.value)}  maxlength="25" className=" appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message"></input>

                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Pendidikan Terakhir
                        </label>
                        <input onChange={(e) => setPendidikan(e.target.value)}  maxlength="50" className=" appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message"></input>

                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Apa alasan kamu ingin menjadi volunteer?
                        </label>
                        <textarea onChange={(e) => setVisiMisi(e.target.value)}  className=" appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message"></textarea>

                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Pendapat kamu tentang mental health apa sih?
                        </label>
                        <textarea onChange={(e) => setPandangan(e.target.value)} className=" appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message"></textarea>

                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Kalau kamu jadi volunteer, rencana yang akan kamu lakukan apa aja sih?
                        </label>
                        <textarea onChange={(e) => setPlanning(e.target.value)}  className=" appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message"></textarea>

                        </div>
                    </div>
                    
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Upload foto mu disini ya ^^
                        </label>
                        <input type="file" filename="pas_foto" onChange={getImg}></input>

                        </div>
                    </div>

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
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
        </>
        
        
    )
}

export default FormVolunteer

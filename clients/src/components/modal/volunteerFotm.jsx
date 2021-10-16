import axios from 'axios';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import Request from '../../axios_instance';

const FormVolunteer = (props) => {
    const [ttl, setttl] = useState("")
    const [domisili, setDomisili] = useState("")
    const [Pendidikan, setPendidikan] = useState("")
    const [visiMisi, setVisiMisi] = useState("")
    const [pandangan, setPandangan] = useState("")
    const [planning, setPlanning] = useState("")
    const [pasFoto, setpasFoto] = useState("")

    const logAs = useSelector(state => state.logAs)

    console.log(logAs)

    const getImg = (e) => {
        setpasFoto(e.target.files[0])
    }

    const submit = async (e) => {
        try {
            e.preventDefault()

            const formData = new FormData();

            formData.append("nama",logAs.username)
            formData.append("ttl",ttl)
            formData.append("domisili",domisili)
            formData.append("pendidikan_terakhir",Pendidikan)
            formData.append("visi_misi",visiMisi)
            formData.append("pendapat_mental_health",pandangan)
            formData.append("rencana_volunteer",planning)
            formData.append("pas_foto",pasFoto)
            formData.append('user_id',logAs.UserId)
            formData.append('email',logAs.email)

            // const data = await axios.post("http://localhost:5000/volunteers",formData)
            // console.log(logAs)
            const data = await Request({
                url : 'volunteers',
                method : 'POST',
                data : formData
            })
            console.log("Success Add Volunteer")

            props.close(false)

            Swal.fire({
                icon: 'success',
                title: 'Pendaftaran Berhasil'
              })

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Anda sudah tidak bisa mengisi form lagi',
                text : `Silahkan tunggu 1 minggu,
                jika nama anda tidak ada di daftar volunteer anda bisa melakukan registrasi ulang`
              })
        }
    }



    return(
        <div className="w-screen h-screen left-0 top-0 bg-opacity-50 bg-black flex items-center justify-center fixed">
            <div className="modalcheck h-full items-center justify-center flex flex-col p-4 gap-y-4 bg-white w-2/3">
            <div class="w-3/4 h-full rounded shadow-2xl p-5 ">
                <h1 class="w-full text-center text-gray-800 text-2xl font-bold mb-5">Volunteer Form</h1>
                <form onSubmit={submit} method="post">
                    <div className="flex flex-col mb-4">
                        <label class="mb-2 font-bold text-md text-gray-900" >Tempat, tanggal lahir</label>
                        <input onChange={(e) => setttl(e.target.value)} class="border py-2 px-3 text-grey-800" type="text"  />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label class="mb-2 font-bold text-md text-gray-900">Domisili</label>
                        <input onChange={(e) => setDomisili(e.target.value)} class="border py-2 px-3 text-grey-800" type="text"  />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label class="mb-2 font-bold text-md text-gray-900" >Pendidkan Terakhir</label>
                        <input onChange={(e) => setPendidikan(e.target.value)} class="border py-2 px-3 text-grey-800" type="text"  />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label class="mb-2 font-bold text-md text-gray-900" for="textarea">Apa alasan kamu ingin menjadi volunteer?</label>
                        <textarea onChange={(e) => setVisiMisi(e.target.value)} class="border py-2 px-3 text-grey-800" name="textarea" id="textarea"></textarea>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label class="mb-2 font-bold text-md text-gray-900" for="textarea">Pendapat kamu tentang mental health apa sih?</label>
                        <textarea onChange={(e) => setPandangan(e.target.value)} class="border py-2 px-3 text-grey-800" name="textarea" id="textarea"></textarea>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label class="mb-2 font-bold text-md text-gray-900" for="textarea"> Kalau kamu jadi volunteer, rencana yang akan kamu lakukan apa?</label>
                        <textarea onChange={(e) => setPlanning(e.target.value)} class="border py-2 px-3 text-grey-800" name="textarea" id="textarea"></textarea>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label class="mb-2 font-bold text-md text-gray-900" for="File"> Upload foto mu disini ya</label>
                        <input class="border py-2 px-3 text-grey-800" type="file" filename="pas_foto" onChange={getImg}/>
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
    </div>
        
        
    )
}

export default FormVolunteer

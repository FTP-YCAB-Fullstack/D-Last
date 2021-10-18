import axios from 'axios';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Request from '../../axios_instance';

const FormVolunteer = (props) => {
const [ttl, setttl] = useState(null)
const [domisili, setDomisili] = useState("")
const [Pendidikan, setPendidikan] = useState("")
const [visiMisi, setVisiMisi] = useState("")
const [pandangan, setPandangan] = useState("")
const [planning, setPlanning] = useState("")
const [pasFoto, setpasFoto] = useState("")

  const logAs = useSelector((state) => state.logAs);

  console.log(logAs);

  const getImg = (e) => {
    setpasFoto(e.target.files[0]);
  };

  const submit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();

      formData.append("nama", logAs.username);
      formData.append("ttl", ttl);
      formData.append("domisili", domisili);
      formData.append("pendidikan_terakhir", Pendidikan);
      formData.append("visi_misi", visiMisi);
      formData.append("pendapat_mental_health", pandangan);
      formData.append("rencana_volunteer", planning);
      formData.append("pas_foto", pasFoto);
      formData.append("user_id", logAs.UserId);
      formData.append("email", logAs.email);

      // const data = await axios.post("http://localhost:5000/volunteers",formData)
      // console.log(logAs)
      const data = await Request({
        url: "volunteers",
        method: "POST",
        data: formData,
      });
      console.log("Success Add Volunteer");

      props.close(false);

      Swal.fire({
        icon: "success",
        title: "Pendaftaran Berhasil",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Anda sudah tidak bisa mengisi form lagi",
        text: `Silahkan tunggu 1 minggu,
                jika nama anda tidak ada di daftar volunteer anda bisa melakukan registrasi ulang`,
      });
    }
  };
  
    return(
        <div className="modalBg w-full h-full top-0 left-0 bg-opacity-50 bg-black fixed flex justify-center items-center">
            <div className="modalcheck overflow-auto w-full h-full items-center flex flex-col p-4 bg-white">
            <div className="w-3/4 t-0 mb-8 rounded shadow-2xl p-5 ">
                <h1 className="w-full text-center text-gray-800 text-xl font-bold mb-4">Volunteer Form</h1>
                <form onSubmit={submit} className="w-full h-full overflow-hidden" method="post">
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-md text-gray-900" >Tanggal Lahir</label>
                        <DatePicker dateFormat='dd/MM/yyyy' selected={ttl} onChange={date => setttl(date)} showYearDropdown scrollableMonthYearDropdown className="border py-2 px-3 text-grey-800" type="text"  />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-md text-gray-900">Domisili</label>
                        <input onChange={(e) => setDomisili(e.target.value)} className="border py-2 px-3 text-grey-800" type="text"  />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-md text-gray-900" >Pendidkan Terakhir</label>
                        <input onChange={(e) => setPendidikan(e.target.value)} className="border py-2 px-3 text-grey-800" type="text"  />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-md text-gray-900" for="textarea">Apa alasan kamu ingin menjadi volunteer?</label>
                        <textarea onChange={(e) => setVisiMisi(e.target.value)} className="border py-2 px-3 text-grey-800" name="textarea" id="textarea"></textarea>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-md text-gray-900" for="textarea">Pendapat kamu tentang mental health apa sih?</label>
                        <textarea onChange={(e) => setPandangan(e.target.value)} className="border py-2 px-3 text-grey-800" name="textarea" id="textarea"></textarea>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-md text-gray-900" for="textarea"> Kalau kamu jadi volunteer, rencana yang akan kamu lakukan apa?</label>
                        <textarea onChange={(e) => setPlanning(e.target.value)} className="border py-2 px-3 text-grey-800" name="textarea" id="textarea"></textarea>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-md text-gray-900" for="File"> Upload foto mu disini ya</label>
                        <input className="border py-2 px-3 text-grey-800" type="file" filename="pas_foto" onChange={getImg}/>
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
  );
};

export default FormVolunteer;

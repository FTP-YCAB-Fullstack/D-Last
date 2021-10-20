import React, { useState, useEffect } from "react";
import FormVolunteer from "../modal/volunteerFotm";
import NavBar from "../nav/nav";
import { useDispatch, useSelector } from "react-redux";
import getApi from "../../redux/action";
import ActivitiesModal from "../modal/ActivitiesModal";
import Swal from 'sweetalert2';
import Request from "../../axios_instance";

function Volunteer() {
  const [isOpen, setIsOpen] = useState(false);
  const volunteers = useSelector((state) => state.volunteer);
  const activities = useSelector((state) => state.activities);
  const [dataCard, setDataCard] = useState();
  const dispatch = useDispatch();
  const [openAct, setOpenAct] = useState(false);

  const authAs = localStorage.getItem("authAs")

  // activities/:id

  const DeleteVolun = async (id) => {
      try {
          const newvolunteer = await Request({
              method : 'DELETE',
              url : `volunteers/${id}`
          })
          Swal.fire({
              icon: 'success',
              title: 'Volunteer Berhasil Dihapus',
            })
          dispatch(getApi('approved'))
      } catch (error) {
          console.log(error)
      }  
  }

  const DeleteAct = async (id) => {
    try {
        const newvolunteer = await Request({
            method : 'DELETE',
            url : `activities/${id}`
        })
        Swal.fire({
            icon: 'success',
            title: 'Volunteer Activity Berhasil Dihapus',
          })
        dispatch(getApi('activities'))
    } catch (error) {
        console.log(error)
    }  
}

  useEffect(() => {
    dispatch(getApi("approved"));
  }, []);

  useEffect(() => {
    dispatch(getApi("activities"));
  }, []);

  const cardData = (el) => {
    setDataCard(el);
    setOpenAct(true);
  };

  return (
    <>
    <div >
      <NavBar />

      <div className="volunteer w-full h-screen flex flex-col items-center ">
        <h1 className="block text-green-900 text-3xl mt-10 font-bold mb-10">
          Mari Bergabung Menjadi Volunteer
        </h1>
        <div className="flex w-full justify-center">
          {authAs === 'admin' ? null : <button
            onClick={() => setIsOpen(true)}
            className="relative bg-green-500 text-white hover:bg-green-700 w-48 p-4 rounded-full text-md font-bold overflow-visible mb-8"
          >
            Gabung Volunteer
          </button>}
          
        </div>
        <div>
        <h1 className="block text-green-900 text-3xl font-bold mt-10 mb-5">
          Tim Volunteer
        </h1>
        </div>
        
        {isOpen && <FormVolunteer close={setIsOpen} />}
        <div className="volunteer-box w-full p-3 flex flex-wrap items-center justify-center gap-10">
          {volunteers.map((el, key) => {
            return (
              <div
                key={key}
                className="w-56 bg-gray-200 shadow-lg rounded-lg p-8 flex flex-col justify-center items-center "
              >
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-32 w-32"
                    src={`https://dlast.herokuapp.com/${el.pas_foto}`}
                    alt="photo"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-gray-700 font-bold mb-2">
                    {el.nama}
                  </p>
                  <p className="text-base text-blueGray-200 font-normal">
                    {el.domisili}
                  </p>
                </div>
                {authAs === 'admin' ? <button
                  onClick={() => DeleteVolun(el._id)}
                  className="text-white mt-2 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                >
                  Hapus
                </button> : null}
                
              </div>
            );
          })}
        </div>

        <h1 className="block text-green-900 text-3xl font-bold mt-16">
          Kegiatan dan Event
        </h1>
        <div className="volunteer-box p-4 w-full r-0 l-0 flex flex-wrap items-center justify-center gap-10 mb-10 mt-5 ">
          {activities.map((el, key) => {
            return (
              <>
                <div key={key} className="w-80 bg-gray-200 shadow-lg mb-12 rounded-lg p-8 flex flex-col justify-center items-center">
                  <div className="mb-8">
                    <img
                      className="object-center object-cover h-32 w-32"
                      src={`https://dlast.herokuapp.com/${el.thumbnail}`}
                      alt="photo"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-gray-700 font-bold mb-2">
                      {el.nama_kegiatan}
                    </p>
                    <p className="text-base text-gray-400 font-normal">
                      {el.createdAt.slice(0, 10)}
                    </p>
                  </div>
                  <div className="btn flex gap-x-3">
                    <button
                      onClick={() => cardData(el)}
                      className="text-white mt-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    >
                      Read more
                    </button>
                    {authAs === 'admin' ? <button
                      onClick={() => DeleteAct(el._id)}
                      className="text-white mt-2 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    >
                      Hapus
                    </button> : null}
                    
                  </div>
                  
                </div>
                {openAct && (
                  <ActivitiesModal close={setOpenAct} {...dataCard} />
                )}
              </>
            );
          })}
          
        </div>
        <div className="bg-gray-900 w-full">
        <footer className="flex flex-wrap items-center justify-between p-3 m-auto">
            <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
                <div className="flex mx-auto text-white text-center">
                    Copyright D'Last-Line © 2021
                </div>
            </div>
        </footer>
      </div>
      </div>
            
    </div>
    
    </>
  );
}

export default Volunteer;

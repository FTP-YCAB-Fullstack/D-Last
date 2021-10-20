import React from "react";
import NavBar from "../nav/nav";
import homePic from "../images/home_bg.jpg"
// import HeaderPicture from "../images/Untitled.png";

// import { Link, useHistory } from 'react-router-dom'
// import axios from "axios"
// import { useDispatch, useSelector } from 'react-redux'

function Home() {
  return (
    <div>
      <NavBar />
      
<section className="relative opacity-100 bg-black">
<div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div className="absolute top-0 w-full h-full bg-center bg-cover" >
            <img className="filter brightness-75" src={homePic} alt="" />
          <span className="w-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="filter drop-shadow-lg pr-12">
                <h1 className="text-white font-semibold text-5xl mb-10">
                  WE LOVE, WE WALK TOGETHER
                </h1>
                <p className="filter drop-shadow mt-4 text-lg text-gray-100">
                "Let your story go. Allow <br /> yourself to be present <br /> with
                 who you are right <br /> now.” – Russ Kyle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" bg-gray-200 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <i className="fas fa-info"></i> 
                  </div>
                  <h6 className="text-xl font-semibold">Kita bisa ngapain aja disini?</h6>
                  <p className="mt-2 mb-4 text-blueGray-200">
                    Kamu bisa membaca artikel mengenai mental kondisi di section Kondisi.
                    Kamu juga bisa membaca dan menulis cerita terkait pengalamanmu di dunia kesehatan mental yang bisa kamu bagikan kepada teman-teman 
                    pengguna lain. 
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white bg-blue-400 text-md p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-question"></i>
                  </div>
                  <h6 className="text-xl font-semibold">D'Last-Line Itu Apa?</h6>
                  <p className="mt-2 mb-4 text-blueGray-200">
                    Web Aplikasi komunitas yang menyuguhkan data-data informatif seputar kesehatan mental.
                    kami memiliki 4 fitur berbeda dengan tujuan dan kegunaannya masing-masing.
                    Salah satunya kami menyediakan fitur pencarian rumah sakit
                    buat kamu yang mau berkonsultasi dengan psikolog di rumah sakit daerah mu.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white bg-green-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                  <i className="fas fa-hands-helping"></i> 
                  </div>
                  <h6 className="text-xl font-semibold">Aku bisa ikut kontribusi ga?</h6>
                  <p className="mt-2 mb-4 text-blueGray-200">
                    Bisa banget! kami menyediakan informasi kegiatan volunteer yang biasanya dilakukan oleh komunitas.
                    Kalau kamu mau jadi salah satu bagian dari tim volunteer bisa
                    dengan menekan button yang kami sediakan untuk user yang 
                    tertarik menjadi volunteer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="bg-gray-900">
        <footer className="flex flex-wrap items-center justify-between p-3 m-auto">
            <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
                <div className="flex mx-auto text-white text-center">
                    Copyright D'Last-Line © 2021
                </div>
            </div>
        </footer>
      </div>
      </section>
      </section>
    </div>
  );
}

export default Home;

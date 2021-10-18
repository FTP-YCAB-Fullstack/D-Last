import React from "react";
import NavBar from "../nav/nav";
import HeaderPicture from "../images/Untitled.png";

// import { Link, useHistory } from 'react-router-dom'
// import axios from "axios"
// import { useDispatch, useSelector } from 'react-redux'

function Home() {
  return (
    <div>
      <NavBar />
      <section className="mt-32 md:flex container mx-auto">
        <div className="text-center w-3/6 p-2 mt-20">
          <h1 className="text-5xl my-2 text-green-500 font-semibold p-4">
            WE LOVE,
            <br /> WE WALK TOGETHER
          </h1>
          <h1 className="text-4xl my-2 font-semibold mt-20">
            "Let your story go. Allow <br /> yourself to be present <br /> with
            who you are right <br /> now.” – Russ Kyle
          </h1>
        </div>
        <div className="w-3/6">
          <img src={HeaderPicture} alt="" />
        </div>
      </section>
      <footer className="bg-green-500 h-40 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white">&copy; Copyright 2021 D_Last</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

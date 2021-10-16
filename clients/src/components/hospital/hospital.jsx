import React, { useEffect, useState } from "react";
import NavBar from "../nav/nav";
// import { Link, useHistory } from "react-router-dom";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import getApi from "../../redux/action";
import HospitalImage from "../images/hospital.jpg";

function Hospital() {
  const [input, setInput] = useState("");
  const hospitals = useSelector((state) => state.hospital);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApi("hospital"));
  }, []);

  const filter = () => {
    return hospitals.filter((el) => {
      if (input === "") {
        return el;
      } else if (el.province.toLowerCase().includes(input.toLowerCase())) {
        return el;
      }
    });
  };

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <div>
      <NavBar />
      <form>
        {/* <div className="inp text-center py-10">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Masukan nama provinsi"
          />
          <input
            type="button"
            onClick={() => console.log(hospitals)}
            value="Check"
          />
        </div> */}
        <div class="my-20 text-center">
          <label
            class="block text-gray-700 text-xl font-bold mb-2"
            for="province"
          >
            Cari berdasarkan provinsi
          </label>
          <input
            class="shadow appearance-none border rounded-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-500"
            id="province"
            type="text"
            placeholder="Masukan nama provinsi"
            onChange={(e) => setInput(e.target.value)}
          />
          {/* <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            value="Cari"
            onClick={() => console.log(hospitals)}
          >
            Cari
          </button> */}
        </div>
      </form>
      <div className="w-11/12 h-4/6 flex flex-wrap mx-auto justify-center">
        {filter().length ? (
          filter().map((el, key) => {
            return (
              <div className="p-4 sm:w-1/2 lg:w-1/3">
                <div className="text-center border-2 border-gray-200 border-opacity-60 overflow-hidden shadow-lg">
                  <img src={HospitalImage} alt="" className="object-center" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{el.name}</div>
                    <p class="text-gray-700 text-base">{el.address}</p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {el.phone}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Not Found</p>
        )}
      </div>
      {/* {hospitals.map((el) => <p>{el.province.toLowerCase()}</p>)} */}
    </div>
  );
}
export default Hospital;

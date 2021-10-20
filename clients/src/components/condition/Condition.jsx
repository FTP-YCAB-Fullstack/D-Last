import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getApi from "../../redux/action";
import ConditionDetail from "../modal/ConditionDetail";
import NavBar from "../nav/nav";
import Swal from "sweetalert2";
import Request from "../../axios_instance";

function Condition() {
  const conditions = useSelector((state) => state.dataCondition);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [dataCard, setDataCard] = useState();

  const auth = localStorage.getItem('authAs')

  useEffect(() => {
    dispatch(getApi("condition"));
  }, []);

  const cardData = (el) => {
    setDataCard(el);
    setOpen(true);
  };

  const deleteCondition = async (id) => {
    try {
      const deleted = await Request({
        method: "delete",
        url: `health-conditions/${id}`,
      });

      Swal.fire({
        icon: "success",
        title: "Health Condition Dihapus",
      });

      dispatch(getApi("condition"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className=" overflow-auto p-12 h-11/12 flex justify-center items-center flex-col ">
        <h1 className="block text-green-900 text-3xl font-bold mb-4">
          Kenali Penyakit Anda
        </h1>
        <div className=" flex flex-wrap items-center w-11/12 gap-y-4 gap-x-3 mt-10">
          {conditions.map((el, key) => {
            return (
              <>
                <div key={key} className="max-w-md mx-auto ">
                  <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs mb-5">
                    <img
                      className="rounded-t-lg h-52 w-screen"
                      src={`https://dlast.herokuapp.com/${el.thumbnail}`}
                      alt=""
                    />
                    <div className="p-5 flex items-center flex-col">
                      <h5 className="text-gray-900 font-bold text-center text-2xl tracking-tight mb-2">
                        {el.judul}
                      </h5>
                      <div className="btn flex gap-x-4">
                        <button
                          onClick={() => cardData(el)}
                          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                        >
                          Baca
                        </button>
                        {auth === 'admin' ? <button
                          onClick={() => deleteCondition(el._id)}
                          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                        >
                          Hapus
                        </button> : null}
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
                {open && <ConditionDetail close={setOpen} {...dataCard} />}
              </>
            );
          })}
        </div>
        <div className="w-full flex justify-center">
          <div class="m-6 space-y-3 w-72 bg-green-700 ">
          </div>
        </div>
      </div>
      <div class="bg-gray-900">
        <footer class="flex flex-wrap items-center justify-between p-3 m-auto">
            <div class="container mx-auto flex flex-col flex-wrap items-center justify-between">
                <div class="flex mx-auto text-white text-center">
                    Copyright D'Last-Line © 2021
                </div>
            </div>
        </footer>
      </div>
    </div>
  );
}

export default Condition;

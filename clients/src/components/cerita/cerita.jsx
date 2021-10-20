import React, { useState, useEffect } from "react";
import Nav from "../nav/nav";
import FormStory from "../modal/storyForm";
import { useDispatch, useSelector } from "react-redux";
import getApi from "../../redux/action";
import StoryDetail from "../modal/storyDetail";
import Request from "../../axios_instance";
import Swal from "sweetalert2";

function Cerita() {
  const stories = useSelector((state) => state.dataStory);
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [dataCard, setDataCard] = useState();
  const authAs = localStorage.getItem("authAs");

  useEffect(() => {
    dispatch(getApi("story"));
    console.log(stories);
  }, []);

  const deleteStory = async (id) => {
    try {
      const deleted = await Request({
        method: "delete",
        url: `stories/${id}`,
      });

      Swal.fire({
        icon: "success",
        title: "Story Dihapus",
      });

      dispatch(getApi("story"));
    } catch (error) {
      console.log(error);
    }
  };

  const cardData = (el) => {
    setDataCard(el);
    setOpen(true);
  };

  return (
    <div>
      <Nav />
      <div className=" overflow-auto p-12 h-11/12 flex justify-center items-center flex-col ">
        <h1 className="block text-green-900 text-3xl font-bold mb-4">
          Cerita Mereka
        </h1>
        <div className=" flex flex-wrap items-center w-11/12 gap-x-4 gap-y-4 mt-10">
          {stories.map((el, key) => {
            return (
              <>
                <div key={key} className="max-w-md mx-auto ">
                  <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs mb-5">
                    <img
                      className="rounded-t-lg h-52 w-screen"
                      src={`http://localhost:5000/${el.thumbnail}`}
                      alt=""
                    />
                    <div className="p-5 flex items-center flex-col">
                      <h5 className="text-gray-900 font-bold text-center text-xl tracking-tight mb-2">
                        {el.judul}
                      </h5>
                      <p className="font-normal text-gray-700 mb-3">
                        By {el.penulis}
                      </p>
                      <p className="font-normal text-gray-700 mb-3">
                        {el.createdAt.slice(0, 10)}
                      </p>

                      <div className="Btn flex gap-x-3 w-full justify-center">
                        <button
                          onClick={() => cardData(el)}
                          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                        >
                          Read more
                        </button>

                        {authAs === "admin" ? (
                          <button
                            onClick={() => deleteStory(el._id)}
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 inline-flex items-center"
                          >
                            Hapus
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                {open && <StoryDetail close={setOpen} {...dataCard} />}
              </>
            );
          })}
        </div>
        <div className="w-full flex justify-center">
          <div class="m-6 space-y-3 w-72">
            <button
              onClick={() => setOpenForm(true)}
              class="block rounded-full py-3 px-6 w-full px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-700 rounded shadow ripple hover:shadow-lg hover:bg-green-800 focus:outline-none"
            >
              Buat Cerita Mu Disini!
            </button>
          </div>
        </div>
        {openForm && <FormStory close={setOpenForm} />}
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
    </div>
  );
}

export default Cerita;

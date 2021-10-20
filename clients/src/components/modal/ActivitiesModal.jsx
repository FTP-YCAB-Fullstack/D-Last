import React from "react";

function ActivitiesModal(props) {
  return (
    <div className="modalBg w-full h-full top-0 left-0 bg-opacity-50 bg-black fixed flex justify-center items-center">
      <div className="modalcheck overflow-auto w-5/6 h-5/6 md:w-1/2 h-5/6 mt-16 mb-16 rounded-xl items-center justify-center flex flex-col p-4 bg-white">
        <div className="w-full h-full gap-6 ">
          <div className="bg-white w-full h-full rounded-lg p-6">
            <div className="btnClose">
              <button
                className="text-xl text-green-900 text-right w-full pr-4 cursor-pointer"
                onClick={() => props.close(false)}
              >
                X
              </button>
            </div>
            <div className="flex flex-col justify-center items-center mb-4 ">
              <img
                className="h-60 w-140 object-cover object-center rounded-lg mb-8"
                src={`http://localhost:5000/${props.thumbnail}`}
                alt="photo"
              />
              <div className="w-full flex flex-col flex-wrap text-center rounded-lg">
                <p className="text-3xl text-gray-900 font-bold mb-6 ">
                  {props.nama_kegiatan}
                </p>
                <p className="text-gray-900 leading-loose font-normal text-base mb-10 ">
                  {props.deskripsi}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesModal;

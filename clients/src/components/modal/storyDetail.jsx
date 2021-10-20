import React from 'react'

function StoryDetail(props) {
    return (
        <div className="modalBg w-full h-full top-0 left-0 bg-opacity-50 bg-black fixed flex justify-center items-center">
            <div className="modalcheck overflow-auto w-5/6 h-5/6 md:w-1/2 h-5/6 mt-16 mb-16 rounded-xl items-center justify-center flex flex-col p-4 bg-white">
                <div className="w-full h-full gap-6 ">
                    <div className="bg-white w-full h-full rounded-lg p-6">
                        <div className="btnClose">
                            <button className="text-xl text-green-900 text-right w-full pr-4 cursor-pointer" onClick={() => props.close(false)}>X</button>
                        </div>
                        <div className="flex flex-col justify-center items-center mb-4 ">
                            <img className=" w-1/2 mb-6 object-cover object-center " 
                            src={`http://localhost:5000/${props.thumbnail}`} alt="photo"/>
                            <div className="w-full flex flex-col flex-wrap  ">
                                <p className="text-3xl text-gray-700 font-bold mb-6">{props.judul}</p>
                                <p className="text-base text-blue-600 font-normal mb-6"> <span className="text-gray-400">Oleh : </span> {props.penulis}</p>
                                <p className="text-gray-400 leading-loose font-normal text-base ">{props.deskripsi}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default StoryDetail

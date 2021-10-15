import React from 'react'

function StoryDetail(props) {
    return (
        <>
            <div className="modalBg w-screen h-screen top-0 fixed flex items-center p-8 w-screen h-screen left-0 bg-opacity-50 bg-black justify-center">
                <div className="modalcheck h-5/6 w-5/6 p-4 gap-y-4 bg-white border-green-700 border-2 overflow-auto rounded-xl">
                    <div className="btnClose">
                        <button className="text-xl text-green-900 text-right w-full pr-4 cursor-pointer" onClick={() => props.close(false)}>X</button>
                    </div>
                    <div className="display flex flex-col">
                        <h1 className="text-gray-600 font-extrabold text-4xl text-center p-8">{props.judul} </h1>
                        <p className="text-right text-gray-600 pb-5 ">ditulis oleh : <span className="text-blue-500"> {props.penulis} </span> </p>
                        <p className="text-justify text-gray-600">{props.deskripsi}</p>
                    </div>
                    
                </div>
            </div>     
        </>
    )
}

export default StoryDetail

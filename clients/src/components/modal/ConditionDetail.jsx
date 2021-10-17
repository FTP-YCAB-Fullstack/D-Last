import React from 'react'

function ConditionDetail(props) {
    return (
<div className="modalBg w-full h-full top-0 left-0 bg-opacity-50 bg-black fixed flex justify-center items-center">
<div className="modalcheck overflow-auto w-5/6 md:w-1/2 h-5/6 mt-16 mb-16 rounded-xl items-center justify-center flex flex-col p-4 bg-white">
    <div className="w-full h-full gap-6 ">
        <div className="bg-white w-full h-full rounded-lg p-6">
            <div className="btnClose">
                <button className="text-xl text-green-900 text-right w-full pr-4 cursor-pointer" onClick={() => props.close(false)}>X</button>
            </div>
            <div className="flex flex-col justify-center items-center mb-4 ">
                <img className="h-28 w-28 object-cover object-center rounded-full" 
                src={props.thumbnail} alt="photo"/>
                <div className="w-full flex flex-col flex-wrap  ">
                    <h1 className="text-4xl text-gray-800 font-extrabold text-center mb-6">{props.judul}</h1>
                    <p className="text-base text-gray-400 font-normal mb-6"> {props.pengertian}</p>
                    <h2 className="text-2xl text-gray-800 text-center mb-6"> Apa aja sih ciri-cirinya? </h2>
                    <p className="text-gray-400 leading-loose font-normal text-base mb-6 ">{props.ciri}</p>
                    <h2 className="text-2xl text-gray-800 text-center mb-6">Penanggulangan gimana?</h2>
                    <p className="text-gray-400 leading-loose font-normal text-base ">{props.penanggulangan}</p>
                    <a className="underline italic text-blue-500 mt-10" href={props.credit}> <span className="text-gray-300">Credit:</span>{props.credit}</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  
    )
}

export default ConditionDetail

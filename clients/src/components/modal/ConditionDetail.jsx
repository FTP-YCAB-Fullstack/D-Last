import React from 'react'

function ConditionDetail(props) {
    return (
        <>
            <div className="modalBg w-screen h-screen top-0 fixed flex items-center">
                <div className="modalcheck h-5/6 w-5/6 p-4 gap-y-4 bg-gray-400 overflow-auto">
                    <div className="btnClose">
                        <button className="text-xl text-red-700 text-right w-full pr-4 cursor-pointer" onClick={() => props.close(false)}>X</button>
                    </div>
                    <h1>Apa itu {props.judul} ?</h1>
                    <p>Pengertian :</p>
                    <p>{props.pengertian}</p>
                    <p>Ciri - ciri :</p>
                    <p>{props.ciri}</p>
                    <p>Penanggulangan :</p>
                    <p>{props.penanggulangan}</p>
                    <p>Credit :</p>
                    <a className="underline italic text-blue-500" href={props.credit}>{props.credit}</a>
                </div>
            </div>     
        </>
    )
}

export default ConditionDetail

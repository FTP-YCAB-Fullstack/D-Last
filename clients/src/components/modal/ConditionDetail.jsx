import React from 'react'

function ConditionDetail(props) {
    return (
        <>
            <div className="modalBg w-screen h-screen top-0 fixed flex items-center">
                <div className="modalcheck h-5/6 w-5/6 p-4 gap-y-4 bg-gray-400">
                    <div className="btnClose">
                        <button className="text-xl text-red-700 text-right w-full pr-4 cursor-pointer" onClick={() => props.close(false)}>X</button>
                    </div>
                    <h1>Apa itu {props.judul} ?</h1>
                    <p>{props.pengertian}</p>
                </div>
            </div>     
        </>
    )
}

export default ConditionDetail

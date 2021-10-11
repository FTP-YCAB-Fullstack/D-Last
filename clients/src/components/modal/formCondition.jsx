import React, {useState} from 'react';

const FormCondition = (props) => {
    // const [judul, setJudul] = useState("")
    // const [pengertian, setPengertian] = useState("")
    // const [ciri, setCiri] = useState('')
    // const [penanggulangan, setPenanggulangan] = useState("")
    // const [credit, setCredit] = useState("")
    // const [thumbnail, setThumbnail] = useState("")


    return(
        <>
        <div className="modalBg w-screen h-screen top-0 fixed flex justify-center items-center">
            <div className="modalcheck h-full items-center justify-center flex flex-col p-4 gap-y-4 bg-white w-full">
                <form className="w-2/3 h-5/6 bg-blue-300 rounded-lg shadow-lg p-4 overflow-auto">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Judul
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500" id="nick" type="text"/>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Pengertian
                        </label>
                        <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500 h-48 resize-none" id="message"></textarea>

                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Ciri - Ciri
                        </label>
                        <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500 h-48 resize-none" id="message"></textarea>

                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Cara mengatasi
                        </label>
                        <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500 h-48 resize-none" id="message"></textarea>

                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Credit
                        </label>
                        <input className="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500" id="nick" type="text"/>
                        {/* <p className="text-gray-600 text-xs italic">Remove if not needed</p> */}
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Thumbnail
                        </label>
                        <input type="file" filename="thumbnail" ></input>

                        </div>
                    </div>

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                        <button className="shadow bg-blue-600 mr-12 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Send
                        </button>
                        <button onClick={() => props.close(false)} className="shadow bg-red-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Cancel
                        </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                    </form>
            </div>
        </div>
        </>
        
        
    )
}

export default FormCondition

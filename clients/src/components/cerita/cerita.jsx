import React, { useState } from 'react'
import FormStory from '../modal/storyForm'
import Nav from '../nav/nav'
// import { Link, useHistory } from 'react-router-dom'
// import axios from "axios"
// import { useDispatch, useSelector } from 'react-redux'

function Cerita() {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Nav/>
            <div className= " overflow-auto p-12 h-11/12 flex justify-center items-center flex-col ">
                <div className= " flex flex-wrap items-center w-11/12 gap-y-4">
                    <div className="max-w-md mx-auto ">
                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs mb-5">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                            <div className="p-5 flex items-center flex-col">
                                <h5 className="text-gray-900 font-bold text-center text-2xl tracking-tight mb-2">Me with Inner child</h5>
                                <p className="font-normal text-gray-700 mb-3">By Jack</p>
                                <p className="font-normal text-gray-700 mb-3">10 Oktober 2021</p>
                                <a className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-md mx-auto">
                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs mb-5">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                            <div className="p-5 flex items-center flex-col">
                                <h5 className="text-gray-900 font-bold text-center text-2xl tracking-tight mb-2"> Hi, This a Note</h5>
                                <p className="font-normal text-gray-700 mb-3">By Joy</p>
                                <p className="font-normal text-gray-700 mb-3">10 Oktober 2021</p>
                                <a className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-md mx-auto">
                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs mb-5">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                            <div className="p-5 flex items-center flex-col">
                                <h5 className="text-gray-900 font-bold text-center text-2xl tracking-tight mb-2">Can you just believe me?</h5>
                                <p className="font-normal text-gray-700 mb-3">By Rachel</p>
                                <p className="font-normal text-gray-700 mb-3">10 Oktober 2021</p>
                                <a className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-md mx-auto">
                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs mb-5">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                            <div className="p-5 flex items-center flex-col">
                                <h5 className="text-gray-900 font-bold text-center text-2xl tracking-tight mb-2">I'm Scared</h5>
                                <p className="font-normal text-gray-700 mb-3">By Alan</p>
                                <p className="font-normal text-gray-700 mb-3">10 Oktober 2021</p>
                                <a className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div class="m-6 space-y-3 w-72 bg-green-700 ">
                        <button onClick= {() => setOpen(true)}
                            class="block rounded-full py-3 px-6 w-full px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-700 rounded shadow ripple hover:shadow-lg hover:bg-green-800 focus:outline-none">
                            Buat Cerita Disini!
                        </button>
                    </div>
                </div>
                {open && <FormStory close={setOpen}/>}
            </div>
           
            
        </div>

    )
}

export default Cerita

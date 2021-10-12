import React, { useState, useEffect } from 'react'
import FormStory from '../modal/storyForm'
import Nav from '../nav/nav'
import { useDispatch, useSelector } from 'react-redux'
import getApi from '../../redux/action'
import StoryDetail from '../modal/storyDetail'

function Cerita() {
    const stories = useSelector(state => state.dataStory)
    const dispatch = useDispatch()
    const [openForm,setOpenForm] = useState(false)
    const [open,setOpen] = useState(false)
    const [dataCard, setDataCard] = useState()

    useEffect(() => {
        dispatch(getApi("story"))
        console.log(stories)
    },[])

    const cardData = (el) => {
        setDataCard(el)
        setOpen(true)
    }

    return (
        <div>
            <Nav/>
            <div className= " overflow-auto p-12 h-11/12 flex justify-center items-center flex-col ">
                <div className= " flex flex-wrap items-center w-11/12 gap-x-4 gap-y-4">
                    {stories.map((el,key) => {
                        return (
                            <>
                    <div key={key}  className="max-w-md mx-auto ">
                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs mb-5">
                            {/* <div className="bg-red-200 w-full "> */}
                                <img className="rounded-t-lg h-52 w-screen" src={`http://localhost:5000/${el.thumbnail}`}  alt=""/>
                            {/* </div> */}
                            <div className="p-5 flex items-center flex-col">
                                <h5 className="text-gray-900 font-bold text-center text-xl tracking-tight mb-2">{el.judul}</h5>
                                <p className="font-normal text-gray-700 mb-3">By {el.penulis}</p>
                                <p className="font-normal text-gray-700 mb-3">10 Oktober 2021</p>
                                <a onClick={() => cardData(el)} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                      {open && <StoryDetail close={setOpen} {...dataCard}/>}
                      </>
                    )
                 })}
                </div>
                <div className="w-full flex justify-center">
                    <div class="m-6 space-y-3 w-72 bg-green-700 ">
                        <button onClick= {() => setOpenForm(true)}
                            class="block rounded-full py-3 px-6 w-full px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-700 rounded shadow ripple hover:shadow-lg hover:bg-green-800 focus:outline-none">
                            Buat Cerita Disini!
                        </button>
                    </div>
                </div>
                {openForm && <FormStory close={setOpenForm}/>}
            </div>
           
            
        </div>

    )
}

export default Cerita
